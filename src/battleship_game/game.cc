#include "game.h"

#include <iostream>
#include <vector>
#include <string>

#include "src/battleship_game/Event.h"

namespace battleship {

Game::~Game() {
    // Delete heap-allocated Player and Board objects to avoid memory leak
    for (auto player : players_)
        delete player;
    for (auto board : boards_)
        delete board;
    for (auto mapping : player_to_boards)
        delete &mapping;
 
}

void Game::Init() {
    // Prevent re-initializing game after it has started
    if (IsStarted())
        return;
    // Loop over player IDs and ask each player to place ships on their board
    for (int player_id = 0; player_id < num_players_; ++player_id) {
        const Player& player = *players_.at(player_id);
        Board& board = *boards_.at(player_id);
        const int num_ships = board.Rows() * board.Cols() / 6;
        int row, col, size, vertical, result;
        std::string orientation;
        for (int ship = 1; ship <= num_ships; ) {
            // Get ship placement info from player: (row, col, size, vertical)
            const int *ship_coords = player.GetShipCoords(board);
            // Unpack ship orientation, size, and coordinates from returned array
            row = ship_coords[0];
            col = ship_coords[1];
            size = ship_coords[2];
            vertical = ship_coords[3];
            delete [] ship_coords;  // Delete heap-allocated array to avoid memory leak
            orientation = (vertical ? "vertically" : "horizontally");
            // Place ship at player-chosen coordinates
            if (vertical)
                result = board.PlaceShipVertical(row, row + size - 1, col);
            else
                result = board.PlaceShipHorizontal(row, col, col + size - 1);
            ship += result;  // Advance to next ship only if placement succeeded
        }
    }
    is_started_ = true;
}

EventResult Game::HandleEvent(Event* event) {
    if (event->GetType() == EventType::PollGame) {
        return HandlePollGame();
    }

    if (event->GetType() == EventType::PlayerJoined) {
        return HandlePlayerJoined(static_cast<PlayerJoinedData*>(event->GetData()));
    }

    if (event->GetType() == EventType::ShowPlacedShip) {
        return HandleShowShip(static_cast<ShowPlacedShipData*>(event->GetData()));
    }

    if (event->GetType() == EventType::FireMissile) {
        return HandleFireMissile(static_cast<FireMissileData*>(event->GetData()));
    }

    return EventResult(14, "Event type not available.");
}

EventResult Game::HandleShowShip(ShowPlacedShipData* data) {

    bool is_owner = data->GetPlayerName() == data->GetTargetName();

    auto pair = player_to_boards.find(data->GetTargetName());

    Board* board = pair->second.second;
    int** grid = board->ShowGrid(is_owner);
    EventResult e(0, "Successfully obtained the board");
    e.SetGrid(grid);
    return e;
}

EventResult Game::HandlePlayerJoined(PlayerJoinedData* data) {

    if( NumPlayers() == 2 ){
        return EventResult(7, "The game is already full.");
    }

    if(player_to_boards.find(data->GetPlayerName()) != player_to_boards.end()) {
        return EventResult(7, "The player is already in the game.");
    }
    
    if (!is_started_) {
        is_started_ = true;
    }

    Player* player = new Player(NumPlayers(), data->GetPlayerName());
    Board* board = new Board(10, 10);
    board->PlaceShipsRandom();
    player_to_boards.emplace(MapNameToData(player->Name(), PlayerAndBoard(player, board)));
    ++num_players_;

    return EventResult(0, "Successfully added player.");
}

EventResult Game::HandlePollGame() {
    EventResult e(0, "Successfully obtained the board");

    e.SetIsWon(is_won_);
    for (auto pair : player_to_boards) {
        e.AddPlayer(pair.first);
    }
    return e;
}

EventResult Game::HandleFireMissile(FireMissileData* data) {

    bool is_owner = data->GetPlayerName() == data->GetTargetName();
    auto pair = player_to_boards.find(data->GetTargetName());
    Board* board = pair->second.second;

    // check if the player is targeting enemy and not himself
    if (!is_owner) {

        int x = data->GetX();
        int y = data->GetY();
        board->FireMissile(x, y);

        return EventResult(0, "Sucessfully fired missile");
    }

      return EventResult(7, "You can't fire on your own board");

}


void Game::Play() {
    // Ask current player to fire missiles in turn until a player wins the game
    while (!IsWon()) {
        // Calculate ID of next player after current player
        const int next_player = (current_player_ + 1) % num_players_;
        const Player& player = *players_.at(current_player_);  // Current player
        Board& board = *boards_.at(next_player);  // Fire at next player's board
        // Get missile coordinates from player: (row, col)
        const int *missile_coords = player.GetMissileCoords(board);
        // Unpack missile coordinates from returned array
        const int row = missile_coords[0];
        const int col = missile_coords[1];
        delete [] missile_coords;  // Delete heap-allocated array to avoid memory leak
        // Fire missile at player-chosen coordinates
        const bool result = board.FireMissile(row, col);
        // usleep(timestep / 2);  // Sleep after firing missile
        // Check if opponent's board is full
        if (board.IsFull()) {
            is_won_ = true;
            break;
        }
        // Advance turn to next player
        current_player_ = next_player;
    }
}

const int Game::NumPlayers() const {
    return num_players_;
}

const int Game::CurrentPlayer() const {
    return current_player_;
}

const bool Game::IsStarted() const {
    return is_started_;
}

const bool Game::IsWon() const {
    return is_won_;  // TODO: Determine if a player has won the game
}

const int Game::Winner() const {
    if (IsWon()) {
        // Assume current player won the game (fired last missile to win)
        return current_player_;
    }
    return -1;  // No winner
}



}  // namespace battleship
#include "src/battleship_service/battleship_service_impl.h"
#include "src/battleship_game/board.h"
#include "src/battleship_game/random.h"
#include "src/battleship_game/player.h"
#include "src/battleship_game/game.h"


#include "grpc++/grpc++.h"

#include "src/battleship_service/proto/services.grpc.pb.h"
#include "src/util/status_macros.h"

namespace battleshipservice  {

// init new boards
battleship::Board* board_1 = new battleship::Board(10,10);
battleship::Board* board_2 = new battleship::Board(10,10);

// -----------------------------------------------------------------

void PlaceShipsRandom(Board& board, const int num_ships = 5) {
    // Place ships at random coordinates
    usleep(2 * timestep);  // Sleep before placing ships
    RandomGenerator random;
    int row, col, size, vertical, result, count = 0;
    std::string orientation;
    for (int ship = 1; ship <= num_ships; ++ship) {
        // Generate random integer for ship orientation
        vertical = random.RandomInt(0, 1);  // 0 = horizontal, 1 = vertical
        // Generate random integer for ship size within range on its dimension
        size = random.RandomInt(1, (vertical ? board.Rows() : board.Cols()));
        // Generate random integer for each dimension of ship coordinates
        // considering ship orientation and size along each dimension
        row = random.RandomInt(0, board.Rows() - (vertical ? size : 1));
        col = random.RandomInt(0, board.Cols() - (vertical ? 1 : size));
        orientation = (vertical ? "vertically" : "horizontally");
        if (vertical)
            result = board.PlaceShipVertical(row, row + size - 1, col);
        else
            result = board.PlaceShipHorizontal(row, col, col + size - 1);
        count += result;
        board.Print();
        usleep(timestep);  // Sleep after placing ship
    }
    usleep(timestep);  // Sleep after placing all ships
}

// -----------------------------------------------------------------

// Create board with randomly placed ships
PlaceShipsRandom(board_1, 5);
PlaceShipsRandom(board_2, 5);

// send back coordinates of places ships

grpc::Status BattleShipServiceImpl::StreamShips(
    grpc::ServerContext* context,
    const ::battleshipservice::FireMissileRequest* request,
    ::battleshipservice::FireMissileResponse* response) {

        // stream all cooridinates of places ships
        return grpc::Status::OK;
}

grpc::Status BattleShipServiceImpl::FireMissile(
    grpc::ServerContext* context,
    const ::battleshipservice::FireMissileRequest* request,
    ::battleshipservice::FireMissileResponse* response) {

        int col = request->col();
        int row = request->row();

        bool status = board->FireMissile(col, row);
        response->set_status(status);
        return grpc::Status::OK;
}

}  // namespace battleshipservice
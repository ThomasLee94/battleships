#include "src/battleship_service/battleship_service_impl.h"
#include "src/battleship_game/board.h"
#include "src/battleship_game/random.h"
#include "src/battleship_game/player.h"
#include "src/battleship_game/game.h"


#include "grpc++/grpc++.h"

#include <string>

#include "src/battleship_service/proto/services.grpc.pb.h"
#include "src/util/status_macros.h"

#include "src/battleship_game/Event.h"

namespace battleshipservice  {

grpc::Status BattleShipServiceImpl::PollGame(
    grpc::ServerContext* context,
        const ::battleshipservice::PollGameRequest* request,
        ::battleshipservice::PollGameResponse* response) {

        std::string id = request->gameid();
        
        battleship::PollGameEvent e(id);  
        battleship::EventResult result = manager_->HandleEvent(&e);
     
        response->set_iswon(result.GetIsWon());
        
        for (std::string player_name : result.GetPlayers()) {
            response->add_players(player_name);
        }

        return grpc::Status::OK;
}


grpc::Status BattleShipServiceImpl::ShowPlacedShips(
    grpc::ServerContext* context,
        const ::battleshipservice::ShowPlacedShipsRequest* request,
        ::battleshipservice::ShowPlacedShipsResponse* response) {

        std::string id = request->gameid();
        std::string player_name = request->currentuser();
        std::string target_name = request->targetuser();
        
        battleship::ShowPlacedShipEvent e(id, player_name, target_name);  
        battleship::EventResult result = manager_->HandleEvent(&e);
     
        int** grid = result.GetGrid();
        for (int row = 0; row < 10; ++row) {
            ::battleshipservice::Row* row_ptr = response->add_grid();
            for (int col = 0; col < 10; ++col) {
                row_ptr->add_col(grid[row][col]);
            }       
        }

        response->set_message(result.GetMessage());
        return grpc::Status::OK;
}

grpc::Status BattleShipServiceImpl::FireMissile(
    grpc::ServerContext* context,
    const ::battleshipservice::FireMissileRequest* request,
    ::battleshipservice::FireMissileResponse* response) {

        battleship::FireMissileEvent e(x, y, player_name, target_name);  
        battleship::EventResult result = manager_->HandleEvent(&e);

        // bool status = board->FireMissile(col, row);
        response->set_status(true);
        return grpc::Status::OK;
}

grpc::Status BattleShipServiceImpl::CreateGame(
        grpc::ServerContext* context,
        const ::battleshipservice::CreateGameRequest* request,
        ::battleshipservice::CreateGameResponse* response) {
    if (request->name() == ""){
        return grpc::Status::CANCELLED;
    }

    std::string name = request->name();
            


    battleship::CreateGameEvent e;  
    battleship::EventResult result = manager_->HandleEvent(&e);

    response->set_gameid(result.GetGameId());
    response->set_message(result.GetMessage());
    return grpc::Status::OK;

}

grpc::Status BattleShipServiceImpl::AddPlayer(
    grpc::ServerContext* context,
    const ::battleshipservice::AddPlayerRequest* request,
    ::battleshipservice::AddPlayerResponse* response) {
        std::string game_id = request->gameid();
        std::string name = request->name();
        battleship::PlayerJoinedEvent e(game_id, name);
        battleship::EventResult result = manager_->HandleEvent(&e);

        response->set_message(result.GetMessage());
        return grpc::Status::OK;

}

}  // namespace battleshipservice


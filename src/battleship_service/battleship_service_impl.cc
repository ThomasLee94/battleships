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


grpc::Status BattleShipServiceImpl::ShowPlacedShips(
    grpc::ServerContext* context,
        const ::battleshipservice::ShowPlacedShipsRequest* request,
        ::battleshipservice::ShowPlacedShipsResponse* response) {

    // make request to see ships on board
        // get their specific board
        // iterate through PlaceShip vector 
            //  Convert struct into proto message dependant on type
        // add all ship proto messages to response
        // send it back

        std::string id = request->boardid();
        if (id=="1") {
        }

        return grpc::Status::OK;
}

grpc::Status BattleShipServiceImpl::FireMissile(
    grpc::ServerContext* context,
    const ::battleshipservice::FireMissileRequest* request,
    ::battleshipservice::FireMissileResponse* response) {

        int col = request->col();
        int row = request->row();

        // bool status = board->FireMissile(col, row);
        response->set_status(true);
        return grpc::Status::OK;
}

grpc::Status BattleShipServiceImpl::CreateGame(
        grpc::ServerContext* context,
        const ::battleshipservice::CreateGameRequest* request,
        ::battleshipservice::CreateGameResponse* response) {
            std::string game_id = request->gameid();
            std::string name = request->name();

            battleship::CreateGameEvent e()  
            battleship::EventResult result = manager_->HandleEvent(&e);

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


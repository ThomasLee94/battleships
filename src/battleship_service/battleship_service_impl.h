#ifndef SRC_BATTLESHIP_UNARY_SERVICE_IMPL_H
#define SRC_BATTLESHIP_UNARY_SERVICE_IMPL_H

#include "grpc++/grpc++.h"

#include "src/battleship_service/proto/services.grpc.pb.h"
#include "src/battleship_game/manager.h"

namespace battleshipservice {

class BattleShipServiceImpl final : public ::battleshipservice::BoardService::Service {
    public: 
        explicit BattleShipServiceImpl(battleship::Manager* manager) :  manager_(manager){}
        battleship::Manager* manager_;

    grpc::Status ShowPlacedShips(
        grpc::ServerContext* context,
        const ::battleshipservice::ShowPlacedShipsRequest* request,
        ::battleshipservice::ShowPlacedShipsResponse* response) override;
    
    
    grpc::Status FireMissile(
        grpc::ServerContext* context,
        const ::battleshipservice::FireMissileRequest* request,
        ::battleshipservice::FireMissileResponse* response) override;
 
    grpc::Status AddPlayer(
        grpc::ServerContext* context,
        const ::battleshipservice::AddPlayerRequest* request,
        ::battleshipservice::AddPlayerResponse* response) override;
};

}  // namespace battleshipservice

#endif

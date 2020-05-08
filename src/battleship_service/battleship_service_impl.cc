#include "src/battleship_service/battleship_service_impl.h"
#include "src/battleship_game/board.h"

#include "grpc++/grpc++.h"

#include "src/battleship_service/proto/services.grpc.pb.h"
#include "src/util/status_macros.h"

namespace battleshipservice  {

    battleship::Board* board = new battleship::Board(10,10);

    // instantiate game, not just board?

grpc::Status BattleShipServiceImpl::PlaceShipVert(
    grpc::ServerContext* context,
    const ::battleshipservice::PlaceShipVertRequest* request,
    ::battleshipservice::PlaceShipVertResponse* response) {

        int row_start = request->row_start();
        int row_end = request->row_end();
        int col = request->col();

        bool status = board->PlaceShipVertical(row_start, row_end, col);
        response->set_status(status);

        return grpc::Status::OK;
}

grpc::Status BattleShipServiceImpl::PlaceShipHor(
    grpc::ServerContext* context,
    const ::battleshipservice::PlaceShipHorRequest* request,
    ::battleshipservice::PlaceShipHorResponse* response) {

        int col_start = request->col_start();
        int col_end = request->col_end();
        int row = request->row();

        bool status = board->PlaceShipHorizontal(col_start, col_end, row);
        response->set_status(status);
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
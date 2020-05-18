// #include <memory>
// #include <string>
// #include <iostream>

// #include "grpc++/grpc++.h"
// #include "grpc++/health_check_service_interface.h"

// #include "src/battleship_game/manager.h"
// #include "src/battleship_service/proto/services.grpc.pb.h"
// #include "src/battleship_service/battleship_service_impl.h"

// using ::battleshipservice::BattleShipServiceImpl;

// void RunServer() {
//   std::string server_address("0.0.0.0:50051");
//   // BattleShipServiceImpl service;

//   // Build the server
//   grpc::ServerBuilder builder;
//   builder.AddListeningPort(server_address, grpc::InsecureServerCredentials());

//   // Add services
//   grpc::EnableDefaultHealthCheckService(true);

//   battleship::Manager* manager = new battleship::Manager();
//   BattleShipServiceImpl service(manager);

//   // Call health service
//   builder.RegisterService(&service);
//   std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
//   server->Wait();
// }

// int main(int argc, char** argv) {
//   RunServer();
//   return 0;
// }

#include <memory>
#include <string>
#include <iostream>

#include "grpc++/grpc++.h"
#include "src/battleship_game/manager.h"
#include "src/battleship_service/proto/services.grpc.pb.h"
#include "src/battleship_service/battleship_service_impl.h"

using ::battleshipservice::BattleShipServiceImpl;

void RunServer()
{
  // Build the server
  grpc::ServerBuilder builder;
  std::string server_address("0.0.0.0:50051");
  builder.AddListeningPort(server_address, grpc::InsecureServerCredentials());

  // Add services
  grpc::EnableDefaultHealthCheckService(true);
  battleship::Manager *manager = new battleship::Manager();

  BattleShipServiceImpl service(manager);
  builder.RegisterService(&service);

  // Start the server.
  std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
  server->Wait();
  // LOG(INFO) << "Server listening on " << server_address;
}

int main(int argc, char **argv)
{
  RunServer();
  return 0;
}
/* eslint-disabled */
//@ts-nocheck

import { BoardServiceClient } from '../generated/src/services_grpc_web_pb';
import {
  CreateGameRequest,
  CreateGameResponse,
  AddPlayerRequest, 
  AddPlayerResponse, 
  ShowPlacedShipsRequest, 
  ShowPlacedShipsReponse, 
  FireMissileRequest,
  FireMissileResponse
} from '../generated/src/services_pb'

const client = new BoardServiceClient('http://localhost:8080', null, null);

function CreateGame(name = "yeet") {
  const request = new CreateGameRequest();
  request.setName(name);

  const call = client.createGame(request, {'custom-header-1': 'value1'},
  (err, response) => {
    if(err) {
      console.log(err)
    }
    console.log(response.getMessage());
    console.log(response.getGameid());
    AddPlayerRPC(response.getGameid());
    console.log("here")
    AddPlayerRPC(response.getGameid());
    AddPlayerRPC(response.getGameid(),"extra user");
    AddPlayerRPC(response.getGameid(),"extra user");
    AddPlayerRPC(response.getGameid(),"extra user");

  });
  call.on('status', (status) => {
  });
}



function AddPlayerRPC(gameID, name = "yeet") {
  const request = new AddPlayerRequest();
  request.setGameid(gameID);
  request.setName(name);

  const call = client.addPlayer(request, {'custom-header-1': 'value1'},
  (err, response) => {
    if(err) {
      console.log(err)
    }
    console.log(response.getMessage());
    console.log(name);
  });
  call.on('status', (status) => {
    console.log(status)
  // ...
  });
}

function ShowBoardRPC(row, col) {
  const request = new ShowPlacedShipsRequest();
  let boardId = request.getBoardId()
  
  const call = client.showPlacedShips(request, {'custom-header-1': 'value1'},
(err, response) => {
  if(err) {
    console.log(err)
  }
  console.log(response.getStatus());
});
call.on('status', (status) => {
// ...
});
  
  console.log('yeet')
  return 
}


function FireMissileRPC(row, col) {
  const request = new FireMissileRequest();
  request.setRow()
  request.setCol()
  console.log(row, col)
  const call = client.fireMissile(request, {'custom-header-1': 'value1'},
(err, response) => {
  if(err) {
    console.log(err)
  }
  console.log(response.getStatus());
});
call.on('status', (status) => {
// ...
});
  
  console.log('yeet')
  return 
}

// game manager
  // create game rpc

  // join game rpc
  CreateGame();
export default {
  CreateGame,
  AddPlayerRPC,
  ShowBoardRPC,
  FireMissileRPC,
}
/* eslint-disabled */
//@ts-nocheck

import { BoardServiceClient } from '../generated/src/services_grpc_web_pb';
import {
  CreateGameRequest, CreateGameResponse,
  AddPlayerRequest, AddPlayerResponse, 
  ShowPlacedShipsRequest, ShowPlacedShipsReponse, 
  FireMissileRequest, FireMissileResponse
} from '../generated/src/services_pb'

const client = new BoardServiceClient('http://localhost:8080', null, null);

function CreateGameRPC(name, callback) {
  const request = new CreateGameRequest();

  const call = client.createGame(request, {'custom-header-1': 'value1'},
  (err, response) => {
    if(err) {
      console.log(err)
    }
    return AddPlayerRPC(response.getGameid(), name, callback)

  });
  call.on('status', (status) => {
  });
}

function AddPlayerRPC(gameID, name, callback) {
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
    return callback(gameID, name)
  });
  call.on('status', (status) => {
    console.log(status)
  // ...
  });
}

function ShowBoardRPC(row, col) {
  const request = new ShowPlacedShipsRequest();
  let boardId = request.getBoardId()

  let coordinatesVert = response.getVertShip()
  let coordinatesHor = response.getHorShip()


  
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
  
  console.log('yeet in show board rpc')
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

export default {
  CreateGameRPC,
  AddPlayerRPC,
  ShowBoardRPC,
  FireMissileRPC,
}
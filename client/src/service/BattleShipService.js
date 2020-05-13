/* eslint-disabled */
//@ts-nocheck

import {BoardServiceClient} from '../generated/src/services_grpc_web_pb';
import {ShowPlacedShipsRequest, ShowPlacedShipsReponse, AddPlayerRequest, AddPlayerResponse, FireMissileRequest, FireMissileResponse} from '../generated/src/services_pb'

const client = new BoardServiceClient('http://localhost:8080', null, null);

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

function AddPlayerRPC(name = "yeet") {
  const request = new AddPlayerRequest();
  request.setGameid("test");
  request.setName(name);

  const call = client.addPlayer(request, {'custom-header-1': 'value1'},
  (err, response) => {
    if(err) {
      console.log(err)
    }
    console.log(response.getMessage());
  });
  call.on('status', (status) => {
  // ...
  });
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

AddPlayerRPC()
export default {
  FireMissileRPC,
  AddPlayerRPC,
  ShowBoardRPC
}
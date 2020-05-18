/* eslint-disabled */
//@ts-nocheck


import {
  CreateGameRequest, CreateGameResponse,
  AddPlayerRequest, AddPlayerResponse, 
  ShowPlacedShipsRequest, ShowPlacedShipsReponse, 
  FireMissileRequest, FireMissileResponse
} from '../generated/src/services_pb'



function FireMissileRPC(row, col) {
  const request = new FireMissileRequest();
  request.setRow()
  request.setCol()
  console.log(row, col)
  let client = {}
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
  FireMissileRPC,
}
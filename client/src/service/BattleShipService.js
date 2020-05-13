/*eslint-disabled */
//@ts-nocheck

import {BoardServiceClient} from '../generated/src/services_grpc_web_pb';
import {ShowPlacedShipsRequest, ShowPlacedShipsReponse, AddPlayerRequest, AddPlayerResponse, FireMissileRequest, FireMissileResponse} from '../generated/src/services_pb'

const client = new BoardServiceClient('http://localhost:8080', null, null);

export function FireMissileRPC(row, col) {
  const request = new ShowPlacedShipsRequest();
  const boardId = request.getBoardId()
  console.log(row, col, boardId)
  const call = fireMissile(request, {'custom-header-1': 'value1'},
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

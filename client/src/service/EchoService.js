/*eslint-disabled */
//@ts-nocheck

import {BoardServiceClient} from '../generated/src/services_grpc_web_pb';
import {PlaceShipVertRequest, PlaceShipVertResponse} from '../generated/src/services_pb'

const client = new BoardServiceClient('http://localhost:8080', null, null);

export function PlaceShipVertRPC(row_start, row_end, col) {
    const request = new PlaceShipVertRequest();
    request.setRowStart(row_start)
    request.setRowEnd(row_end)
    request.setCol(col)
    const call = client.placeShipVert(request, {'custom-header-1': 'value1'},
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

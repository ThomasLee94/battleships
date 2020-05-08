/*eslint-disabled */
//@ts-nocheck
import { promisify } from 'util';
import {BoardServiceClient} from '../generated/src/services_grpc_web_pb';
import {PlaceShipVertRequest, PlaceShipVertResponse} from '../generated/src/services_pb'

const client = new BoardServiceClient('http://localhost:8080', null, null);

export async function ServiceEndpointRPC() {
    const request = new PlaceShipVertRequest();
    request.setRow_start(2)
    request.setRow_end(4)
    request.setCol(5)
    const call = client.placeshipvert(request, {'custom-header-1': 'value1'},
  (err, response) => {
      console.log(err)
    console.log(response.getStatus());
  });
call.on('status', (status) => {
  // ...
});
    
    
    console.log('yeet')
    return 
}

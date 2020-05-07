/*eslint-disabled */
//@ts-nocheck
import { promisify } from 'util';
import {ServiceClient} from '../generated/src/services_grpc_web_pb';
import {ServiceRequest, ServiceResponse} from '../generated/src/services_pb'

const client = new ServiceClient('http://localhost:8080', null, null);

export async function ServiceEndpointRPC() {
    const request = new ServiceRequest();
    request.setMessage("Testing the echo rpc!");
    console.log('here')

    const call = client.battleshipservice(request, {'custom-header-1': 'value1'},
  (err, response) => {
      console.log(err)
    console.log(response.getMessage());
  });
call.on('status', (status) => {
  // ...
});
    
    
    console.log('yeet')
    return 
}

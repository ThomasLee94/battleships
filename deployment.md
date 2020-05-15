## Commands with docker & gcloud
### Backend
`gcloud auth login`

`bazel build -c opt src/battleship_service/docker/...`

`bazel build -c opt src/battleship_service:image.tar`

`docker load -i bazel-bin/src/battleship_service/image.tar`

`docker tag bazel/src/battleship_service:image gcr.io/battleship-react-backend/server:latest`

`docker push gcr.io/battleship-react-backend/server:latest`

`kubectl get pods`

`gcloud container clusters get-credentials cluster-2 --zone us-west1-a --project battleship-react-backend`

`kubectl apply -f infra/microservices/server/deployment.yaml`

### Envoy
`bazel build -c opt src/battleship_service/edge_envoy/...`

`bazel build -c opt src/battleship_service/edge_envoy:image_envoy.tar`

`docker load -i bazel-bin/server/edge_envoy/image_envoy.tar`

run image locally - `docker run bazel/server/edge_envoy:image_envoy`

`docker tag bazel/server/edge_envoy:image_envoy gcr.io/battleship-react-backend/edge-envoy:v1.14.1`

`docker push gcr.io/battleship-react-backend/edge-envoy:v1.14.1`

`kubectl apply -f server/edge_envoy/deployment.yaml`

`kubectl apply -f infra/microservices/server/service.yaml`

`kubectl apply -f infra/microservices/edge_envoy/service.yaml`

### Ingress

`kubectl apply -f infra/ingress.yaml`

## Debug

`kubectl describe pod <pod_name>`

`kubectl logs <pod_name>`

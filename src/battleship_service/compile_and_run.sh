ROOT_DIR=$(git rev-parse --show-toplevel)
export CC="CC=gcc"

pushd "$ROOT_DIR/src/battleship_service"

CC=gcc bazel build proto:services_grpc_proto
CC=gcc bazel build :server
CC=gcc bazel build :server_compdb
CC=gcc bazel run :server
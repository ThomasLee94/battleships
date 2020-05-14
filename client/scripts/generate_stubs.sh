ROOT_DIR=$(git rev-parse --show-toplevel)
DIR="$ROOT_DIR/src/battleship_service/proto"
OUT_DIR="$ROOT_DIR/client/src/generated/src"

rm -r "$OUT_DIR"
mkdir -p "$OUT_DIR"

protoc-gen-grpc --proto_path="$DIR" services.proto --js_out=import_style=commonjs:$OUT_DIR --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

echo "/* eslint-disable */\n\n $(cat $OUT_DIR/services_grpc_web_pb.js)" > "$OUT_DIR/services_grpc_web_pb.js"
echo "/* eslint-disable */\n\n $(cat $OUT_DIR/services_pb.js)" > "$OUT_DIR/services_pb.js"
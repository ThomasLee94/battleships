/**
 * @fileoverview gRPC-Web generated client stub for battleshipservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.battleshipservice = require('./services_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.battleshipservice.BoardServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.battleshipservice.BoardServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.battleshipservice.PlaceShipVertRequest,
 *   !proto.battleshipservice.PlaceShipVertResponse>}
 */
const methodDescriptor_BoardService_PlaceShipVert = new grpc.web.MethodDescriptor(
  '/battleshipservice.BoardService/PlaceShipVert',
  grpc.web.MethodType.UNARY,
  proto.battleshipservice.PlaceShipVertRequest,
  proto.battleshipservice.PlaceShipVertResponse,
  /** @param {!proto.battleshipservice.PlaceShipVertRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.PlaceShipVertResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.battleshipservice.PlaceShipVertRequest,
 *   !proto.battleshipservice.PlaceShipVertResponse>}
 */
const methodInfo_BoardService_PlaceShipVert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.battleshipservice.PlaceShipVertResponse,
  /** @param {!proto.battleshipservice.PlaceShipVertRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.PlaceShipVertResponse.deserializeBinary
);


/**
 * @param {!proto.battleshipservice.PlaceShipVertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.battleshipservice.PlaceShipVertResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.battleshipservice.PlaceShipVertResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.battleshipservice.BoardServiceClient.prototype.placeShipVert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/battleshipservice.BoardService/PlaceShipVert',
      request,
      metadata || {},
      methodDescriptor_BoardService_PlaceShipVert,
      callback);
};


/**
 * @param {!proto.battleshipservice.PlaceShipVertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.battleshipservice.PlaceShipVertResponse>}
 *     A native promise that resolves to the response
 */
proto.battleshipservice.BoardServicePromiseClient.prototype.placeShipVert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/battleshipservice.BoardService/PlaceShipVert',
      request,
      metadata || {},
      methodDescriptor_BoardService_PlaceShipVert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.battleshipservice.PlaceShipHorRequest,
 *   !proto.battleshipservice.PlaceShipHorResponse>}
 */
const methodDescriptor_BoardService_PlaceShipHor = new grpc.web.MethodDescriptor(
  '/battleshipservice.BoardService/PlaceShipHor',
  grpc.web.MethodType.UNARY,
  proto.battleshipservice.PlaceShipHorRequest,
  proto.battleshipservice.PlaceShipHorResponse,
  /** @param {!proto.battleshipservice.PlaceShipHorRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.PlaceShipHorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.battleshipservice.PlaceShipHorRequest,
 *   !proto.battleshipservice.PlaceShipHorResponse>}
 */
const methodInfo_BoardService_PlaceShipHor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.battleshipservice.PlaceShipHorResponse,
  /** @param {!proto.battleshipservice.PlaceShipHorRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.PlaceShipHorResponse.deserializeBinary
);


/**
 * @param {!proto.battleshipservice.PlaceShipHorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.battleshipservice.PlaceShipHorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.battleshipservice.PlaceShipHorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.battleshipservice.BoardServiceClient.prototype.placeShipHor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/battleshipservice.BoardService/PlaceShipHor',
      request,
      metadata || {},
      methodDescriptor_BoardService_PlaceShipHor,
      callback);
};


/**
 * @param {!proto.battleshipservice.PlaceShipHorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.battleshipservice.PlaceShipHorResponse>}
 *     A native promise that resolves to the response
 */
proto.battleshipservice.BoardServicePromiseClient.prototype.placeShipHor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/battleshipservice.BoardService/PlaceShipHor',
      request,
      metadata || {},
      methodDescriptor_BoardService_PlaceShipHor);
};


module.exports = proto.battleshipservice;


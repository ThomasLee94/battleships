/* eslint-disable */

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
 *   !proto.battleshipservice.AddPlayerRequest,
 *   !proto.battleshipservice.AddPlayerResponse>}
 */
const methodDescriptor_BoardService_AddPlayer = new grpc.web.MethodDescriptor(
  '/battleshipservice.BoardService/AddPlayer',
  grpc.web.MethodType.UNARY,
  proto.battleshipservice.AddPlayerRequest,
  proto.battleshipservice.AddPlayerResponse,
  /** @param {!proto.battleshipservice.AddPlayerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.AddPlayerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.battleshipservice.AddPlayerRequest,
 *   !proto.battleshipservice.AddPlayerResponse>}
 */
const methodInfo_BoardService_AddPlayer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.battleshipservice.AddPlayerResponse,
  /** @param {!proto.battleshipservice.AddPlayerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.AddPlayerResponse.deserializeBinary
);


/**
 * @param {!proto.battleshipservice.AddPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.battleshipservice.AddPlayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.battleshipservice.AddPlayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.battleshipservice.BoardServiceClient.prototype.addPlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/battleshipservice.BoardService/AddPlayer',
      request,
      metadata || {},
      methodDescriptor_BoardService_AddPlayer,
      callback);
};


/**
 * @param {!proto.battleshipservice.AddPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.battleshipservice.AddPlayerResponse>}
 *     A native promise that resolves to the response
 */
proto.battleshipservice.BoardServicePromiseClient.prototype.addPlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/battleshipservice.BoardService/AddPlayer',
      request,
      metadata || {},
      methodDescriptor_BoardService_AddPlayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.battleshipservice.FireMissileRequest,
 *   !proto.battleshipservice.FireMissileResponse>}
 */
const methodDescriptor_BoardService_FireMissile = new grpc.web.MethodDescriptor(
  '/battleshipservice.BoardService/FireMissile',
  grpc.web.MethodType.UNARY,
  proto.battleshipservice.FireMissileRequest,
  proto.battleshipservice.FireMissileResponse,
  /** @param {!proto.battleshipservice.FireMissileRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.FireMissileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.battleshipservice.FireMissileRequest,
 *   !proto.battleshipservice.FireMissileResponse>}
 */
const methodInfo_BoardService_FireMissile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.battleshipservice.FireMissileResponse,
  /** @param {!proto.battleshipservice.FireMissileRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.FireMissileResponse.deserializeBinary
);


/**
 * @param {!proto.battleshipservice.FireMissileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.battleshipservice.FireMissileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.battleshipservice.FireMissileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.battleshipservice.BoardServiceClient.prototype.fireMissile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/battleshipservice.BoardService/FireMissile',
      request,
      metadata || {},
      methodDescriptor_BoardService_FireMissile,
      callback);
};


/**
 * @param {!proto.battleshipservice.FireMissileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.battleshipservice.FireMissileResponse>}
 *     A native promise that resolves to the response
 */
proto.battleshipservice.BoardServicePromiseClient.prototype.fireMissile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/battleshipservice.BoardService/FireMissile',
      request,
      metadata || {},
      methodDescriptor_BoardService_FireMissile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.battleshipservice.ShowPlacedShipsRequest,
 *   !proto.battleshipservice.ShowPlacedShipsResponse>}
 */
const methodDescriptor_BoardService_ShowPlacedShips = new grpc.web.MethodDescriptor(
  '/battleshipservice.BoardService/ShowPlacedShips',
  grpc.web.MethodType.UNARY,
  proto.battleshipservice.ShowPlacedShipsRequest,
  proto.battleshipservice.ShowPlacedShipsResponse,
  /** @param {!proto.battleshipservice.ShowPlacedShipsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.ShowPlacedShipsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.battleshipservice.ShowPlacedShipsRequest,
 *   !proto.battleshipservice.ShowPlacedShipsResponse>}
 */
const methodInfo_BoardService_ShowPlacedShips = new grpc.web.AbstractClientBase.MethodInfo(
  proto.battleshipservice.ShowPlacedShipsResponse,
  /** @param {!proto.battleshipservice.ShowPlacedShipsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.ShowPlacedShipsResponse.deserializeBinary
);


/**
 * @param {!proto.battleshipservice.ShowPlacedShipsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.battleshipservice.ShowPlacedShipsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.battleshipservice.ShowPlacedShipsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.battleshipservice.BoardServiceClient.prototype.showPlacedShips =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/battleshipservice.BoardService/ShowPlacedShips',
      request,
      metadata || {},
      methodDescriptor_BoardService_ShowPlacedShips,
      callback);
};


/**
 * @param {!proto.battleshipservice.ShowPlacedShipsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.battleshipservice.ShowPlacedShipsResponse>}
 *     A native promise that resolves to the response
 */
proto.battleshipservice.BoardServicePromiseClient.prototype.showPlacedShips =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/battleshipservice.BoardService/ShowPlacedShips',
      request,
      metadata || {},
      methodDescriptor_BoardService_ShowPlacedShips);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.battleshipservice.CreateGameRequest,
 *   !proto.battleshipservice.CreateGameResponse>}
 */
const methodDescriptor_BoardService_CreateGame = new grpc.web.MethodDescriptor(
  '/battleshipservice.BoardService/CreateGame',
  grpc.web.MethodType.UNARY,
  proto.battleshipservice.CreateGameRequest,
  proto.battleshipservice.CreateGameResponse,
  /** @param {!proto.battleshipservice.CreateGameRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.CreateGameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.battleshipservice.CreateGameRequest,
 *   !proto.battleshipservice.CreateGameResponse>}
 */
const methodInfo_BoardService_CreateGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.battleshipservice.CreateGameResponse,
  /** @param {!proto.battleshipservice.CreateGameRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.battleshipservice.CreateGameResponse.deserializeBinary
);


/**
 * @param {!proto.battleshipservice.CreateGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.battleshipservice.CreateGameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.battleshipservice.CreateGameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.battleshipservice.BoardServiceClient.prototype.createGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/battleshipservice.BoardService/CreateGame',
      request,
      metadata || {},
      methodDescriptor_BoardService_CreateGame,
      callback);
};


/**
 * @param {!proto.battleshipservice.CreateGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.battleshipservice.CreateGameResponse>}
 *     A native promise that resolves to the response
 */
proto.battleshipservice.BoardServicePromiseClient.prototype.createGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/battleshipservice.BoardService/CreateGame',
      request,
      metadata || {},
      methodDescriptor_BoardService_CreateGame);
};


module.exports = proto.battleshipservice;


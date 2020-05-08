/* eslint-disable */

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.battleshipservice.FireMissielResponse', null, global);
goog.exportSymbol('proto.battleshipservice.FireMissileRequest', null, global);
goog.exportSymbol('proto.battleshipservice.PlaceShipHorRequest', null, global);
goog.exportSymbol('proto.battleshipservice.PlaceShipHorResponse', null, global);
goog.exportSymbol('proto.battleshipservice.PlaceShipVertRequest', null, global);
goog.exportSymbol('proto.battleshipservice.PlaceShipVertResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.battleshipservice.PlaceShipVertRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.battleshipservice.PlaceShipVertRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.battleshipservice.PlaceShipVertRequest.displayName = 'proto.battleshipservice.PlaceShipVertRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.battleshipservice.PlaceShipVertRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.battleshipservice.PlaceShipVertRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.battleshipservice.PlaceShipVertRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipVertRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowStart: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rowEnd: jspb.Message.getFieldWithDefault(msg, 2, 0),
    col: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.battleshipservice.PlaceShipVertRequest}
 */
proto.battleshipservice.PlaceShipVertRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.battleshipservice.PlaceShipVertRequest;
  return proto.battleshipservice.PlaceShipVertRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.battleshipservice.PlaceShipVertRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.battleshipservice.PlaceShipVertRequest}
 */
proto.battleshipservice.PlaceShipVertRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.battleshipservice.PlaceShipVertRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.battleshipservice.PlaceShipVertRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.battleshipservice.PlaceShipVertRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipVertRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRowStart();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRowEnd();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCol();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 row_start = 1;
 * @return {number}
 */
proto.battleshipservice.PlaceShipVertRequest.prototype.getRowStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.battleshipservice.PlaceShipVertRequest.prototype.setRowStart = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 row_end = 2;
 * @return {number}
 */
proto.battleshipservice.PlaceShipVertRequest.prototype.getRowEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.battleshipservice.PlaceShipVertRequest.prototype.setRowEnd = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 col = 3;
 * @return {number}
 */
proto.battleshipservice.PlaceShipVertRequest.prototype.getCol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.battleshipservice.PlaceShipVertRequest.prototype.setCol = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.battleshipservice.PlaceShipVertResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.battleshipservice.PlaceShipVertResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.battleshipservice.PlaceShipVertResponse.displayName = 'proto.battleshipservice.PlaceShipVertResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.battleshipservice.PlaceShipVertResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.battleshipservice.PlaceShipVertResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.battleshipservice.PlaceShipVertResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipVertResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.battleshipservice.PlaceShipVertResponse}
 */
proto.battleshipservice.PlaceShipVertResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.battleshipservice.PlaceShipVertResponse;
  return proto.battleshipservice.PlaceShipVertResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.battleshipservice.PlaceShipVertResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.battleshipservice.PlaceShipVertResponse}
 */
proto.battleshipservice.PlaceShipVertResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.battleshipservice.PlaceShipVertResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.battleshipservice.PlaceShipVertResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.battleshipservice.PlaceShipVertResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipVertResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool status = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.battleshipservice.PlaceShipVertResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.battleshipservice.PlaceShipVertResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.battleshipservice.PlaceShipHorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.battleshipservice.PlaceShipHorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.battleshipservice.PlaceShipHorRequest.displayName = 'proto.battleshipservice.PlaceShipHorRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.battleshipservice.PlaceShipHorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.battleshipservice.PlaceShipHorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.battleshipservice.PlaceShipHorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipHorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    colStart: jspb.Message.getFieldWithDefault(msg, 1, 0),
    colEnd: jspb.Message.getFieldWithDefault(msg, 2, 0),
    row: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.battleshipservice.PlaceShipHorRequest}
 */
proto.battleshipservice.PlaceShipHorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.battleshipservice.PlaceShipHorRequest;
  return proto.battleshipservice.PlaceShipHorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.battleshipservice.PlaceShipHorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.battleshipservice.PlaceShipHorRequest}
 */
proto.battleshipservice.PlaceShipHorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setColStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setColEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.battleshipservice.PlaceShipHorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.battleshipservice.PlaceShipHorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.battleshipservice.PlaceShipHorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipHorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColStart();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getColEnd();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRow();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 col_start = 1;
 * @return {number}
 */
proto.battleshipservice.PlaceShipHorRequest.prototype.getColStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.battleshipservice.PlaceShipHorRequest.prototype.setColStart = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 col_end = 2;
 * @return {number}
 */
proto.battleshipservice.PlaceShipHorRequest.prototype.getColEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.battleshipservice.PlaceShipHorRequest.prototype.setColEnd = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 row = 3;
 * @return {number}
 */
proto.battleshipservice.PlaceShipHorRequest.prototype.getRow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.battleshipservice.PlaceShipHorRequest.prototype.setRow = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.battleshipservice.PlaceShipHorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.battleshipservice.PlaceShipHorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.battleshipservice.PlaceShipHorResponse.displayName = 'proto.battleshipservice.PlaceShipHorResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.battleshipservice.PlaceShipHorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.battleshipservice.PlaceShipHorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.battleshipservice.PlaceShipHorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipHorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.battleshipservice.PlaceShipHorResponse}
 */
proto.battleshipservice.PlaceShipHorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.battleshipservice.PlaceShipHorResponse;
  return proto.battleshipservice.PlaceShipHorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.battleshipservice.PlaceShipHorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.battleshipservice.PlaceShipHorResponse}
 */
proto.battleshipservice.PlaceShipHorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.battleshipservice.PlaceShipHorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.battleshipservice.PlaceShipHorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.battleshipservice.PlaceShipHorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.PlaceShipHorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool status = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.battleshipservice.PlaceShipHorResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.battleshipservice.PlaceShipHorResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.battleshipservice.FireMissileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.battleshipservice.FireMissileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.battleshipservice.FireMissileRequest.displayName = 'proto.battleshipservice.FireMissileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.battleshipservice.FireMissileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.battleshipservice.FireMissileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.battleshipservice.FireMissileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.FireMissileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    col: jspb.Message.getFieldWithDefault(msg, 1, 0),
    row: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.battleshipservice.FireMissileRequest}
 */
proto.battleshipservice.FireMissileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.battleshipservice.FireMissileRequest;
  return proto.battleshipservice.FireMissileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.battleshipservice.FireMissileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.battleshipservice.FireMissileRequest}
 */
proto.battleshipservice.FireMissileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.battleshipservice.FireMissileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.battleshipservice.FireMissileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.battleshipservice.FireMissileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.FireMissileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCol();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRow();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 col = 1;
 * @return {number}
 */
proto.battleshipservice.FireMissileRequest.prototype.getCol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.battleshipservice.FireMissileRequest.prototype.setCol = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 row = 2;
 * @return {number}
 */
proto.battleshipservice.FireMissileRequest.prototype.getRow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.battleshipservice.FireMissileRequest.prototype.setRow = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.battleshipservice.FireMissielResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.battleshipservice.FireMissielResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.battleshipservice.FireMissielResponse.displayName = 'proto.battleshipservice.FireMissielResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.battleshipservice.FireMissielResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.battleshipservice.FireMissielResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.battleshipservice.FireMissielResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.FireMissielResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.battleshipservice.FireMissielResponse}
 */
proto.battleshipservice.FireMissielResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.battleshipservice.FireMissielResponse;
  return proto.battleshipservice.FireMissielResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.battleshipservice.FireMissielResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.battleshipservice.FireMissielResponse}
 */
proto.battleshipservice.FireMissielResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.battleshipservice.FireMissielResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.battleshipservice.FireMissielResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.battleshipservice.FireMissielResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.battleshipservice.FireMissielResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool status = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.battleshipservice.FireMissielResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.battleshipservice.FireMissielResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.battleshipservice);
let Deferred = function() {
  let successHandlers = [];
  let errorHandlers   = [];
  let isRejected      = false;
  let isResolved      = false;
  let resolveData     = null;
  let rejectData      = null;

  let then = function(callback) {
    if (isResolved) callback(resolveData);
    successHandlers.push(callback);
    return this;
  };

  let fail = function(callback) {
    if (isRejected) callback(rejectData);
    errorHandlers.push(callback);
    return this;
  };

  let resolve = function(data) {
    isResolved = true;
    resolveData = data;
    successHandlers.forEach(function(callback) {
      callback(data);
    });
  };

  let reject = function(data) {
    isRejected = true;
    rejectData = data;
    errorHandlers.forEach(function(callback) {
      callback(data);
    });
  };

  return {
    then: then,
    fail: fail,
    resolve: resolve,
    reject: reject,

    promise: function() {
      return {
        then: then,
        fail: fail,
      };
    }
  };
};

let promise = Deferred().promise();

promise.then(function(data) {
  // Here for success.
}).fail(function(data) {
  // Here for failure.
});

/******************************************************************************/
// Spy on the Ajax library, stubbing out one of its methods.
ajaxSpy = function(method, result, error) {
  spyOn(Ajax, method).and.callFake(function() {
    if (error === undefined) {
      return Promise.resolve(result);
    } else {
      return Promise.reject(error);
    }
  });
};

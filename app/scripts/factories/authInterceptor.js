'use strict';

app.factory('authInterceptor', function($q) {
  var interceptor = {
    request: function(config) {
      var deferred = $q.defer();
      // config.headers['accessToken'] = 'UBJkgE9swtk0sB5NdVk5|3bb231d1-0f64-4d32-a01e-430e78be3657|1439540018038'
      deferred.resolve(config);
      return deferred.promise;
    }
  };

  return interceptor;
});

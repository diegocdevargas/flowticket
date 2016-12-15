angular.module('flowTicket.services', [])

.factory('BlankFactory', [function(){

}])
.service('APIInterceptor', function ($rootScope, $q) {
  var service = this;

  service.responseError = function (response) {
    if (response.status === 401) {
      $rootScope.$broadcast('unauthorized');
    }
    return $q.reject(response);
  };
})

.service('ProductsModel', function ($http, Backand) {
  var service = this,
    baseUrl = '/1/objects/',
    objectName = 'products/';

  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }

  function getUrlForId(id) {
    return getUrl() + id;
  }

  service.all = function () {
    return $http.get(getUrl());
  };

  service.fetch = function (id) {
    return $http.get(getUrlForId(id));
  };

  service.create = function (object) {
    return $http.post(getUrl(), object);
  };

  service.update = function (id, object) {
    return $http.put(getUrlForId(id), object);
  };

  service.delete = function (id) {
    return $http.delete(getUrlForId(id));
  };
})

.service('LoginService', function (Backand) {
  var service = this;

  service.signin = function (email, password, appName) {
    //call Backand for sign in
    return Backand.signin(email, password);
  };

  service.signup = function (firstName, lastName, email, password, again) {
    return Backand.signup(firstName, lastName, email, password, password);
  };

  service.anonymousLogin= function(){
    // don't have to do anything here,
    // because we set app token att app.js
  };

  service.facebookToken = function(token){
    console.log("facebookToken",token);
    return Backand.socialSignInToken('facebook', token);
  };

  service.signout = function () {
    return Backand.signout();
  };

  service.socialSignUp = function (provider) {
    return Backand.socialSignUp(provider);
  };

  service.socialSignIn = function (provider) {
    return Backand.socialSignIn(provider);
  };
});
// .service('LoginService', function($q) {
//     return {
//         loginUser: function(name, pw) {
//             var deferred = $q.defer();
//             var promise = deferred.promise;
 
//             if (name == 'user' && pw == 'secret') {
//                 deferred.resolve('Welcome ' + name + '!');
//             } else {
//                 deferred.reject('Wrong credentials.');
//             }
//             promise.success = function(fn) {
//                 promise.then(fn);
//                 return promise;
//             }
//             promise.error = function(fn) {
//                 promise.then(null, fn);
//                 return promise;
//             }
//             return promise;
//         }
//     }
// });

angular.module('flowTicket.controllers', [])
  
.controller('nowCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('avaliablePlacesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('currentPlacesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('flowingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', function (Backand, $state, $rootScope, $ionicPopup, LoginService) {
  var login = this;
  login.facebookToken = '';

  function signin() {
    LoginService.signin(login.email, login.password)
      .then(function () {
        onLogin();
      }, function (error) {
        //console.log(error)
        var alertPopup = $ionicPopup.alert({
          title: 'Falha no login!',
          template: 'Por favor verifique suas credenciais.'
        });
      })
  }

  function loginError(err){
    console.log(err);
  }

  login.facebookTokenSingin = function () {
    console.log('start facebook token');
    var fbLoginSuccess = function (userData) {

      facebookConnectPlugin.getAccessToken(function (token) {

        login.facebookToken = token;

        LoginService.facebookToken(login.facebookToken).then(function (d) {
          login.isLoggedWihtBackand = true;
          login.facebookToken = "Here with Backand InAPP! ";
          login.username = d.username;
          login.role = d.role;
        }, loginError);
      });
    }

    var haveInAppPlugin = false;

    try {
      haveInAppPlugin = facebookConnectPlugin;
    }
    catch (err){

    }

    // facebookConnectPlugin is not defined on desktop
    if(haveInAppPlugin) { // mobile
      facebookConnectPlugin.login(["public_profile", "email"], fbLoginSuccess,
        function (error) {
          console.error(error)
        }
      );
    }
    else { // desktop
      LoginService.socialSignIn('facebook').then(function(){
        var username = Backand.getUsername();
        var userRole = Backand.getUserRole();

        login.isLoggedWihtBackand = true;
        login.facebookToken = "Here with Backand! ";
        login.username = username;
        login.role = userRole;
      }, loginError)
    }
  }

  function anonymousLogin() {
    LoginService.anonymousLogin();
    onLogin();
  }

  function onLogin() {
    $rootScope.$broadcast('authorized');
    $state.go('main');
  }

  function signout() {
    LoginService.signout()
      .then(function () {
        //$state.go('tab.login');
        $rootScope.$broadcast('logout');
        $state.go($state.current, {}, {reload: true});
      })

  }

  login.signin = signin;
  login.signout = signout;
  login.anonymousLogin = anonymousLogin;


})
   
// .controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state) {
//     $scope.data = {};
 	
//     $scope.login = function() {
//         LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
//             $state.go('main');
//         }).error(function(data) {
//             var alertPopup = $ionicPopup.alert({
//                 title: 'Login failed!',
//                 template: 'Please check your credentials!'
//             });
//         });
//     }


// })

.controller('signupCtrl', function (Backand, $state, $rootScope, LoginService) {
  var vm = this;


  function signUp() {
    vm.errorMessage = '';
    LoginService.signup(vm.firstName, vm.lastName, vm.email, vm.password, vm.again)
      .then(function (response) {
        // success
        onLogin();
      }, function (reason) {
        if (reason.data.error_description !== undefined) {
          vm.errorMessage = reason.data.error_description;
        }
        else {
          vm.errorMessage = reason.data;
        }
      });

  }

  function signupFacebook() {
    LoginService.socialSignUp('facebook')
      .then(function () {
          onLogin();
        }
        , function (reason) {
          if (reason.data.error_description !== undefined) {
            vm.errorMessage = reason.data.error_description;
          }
          else {
            vm.errorMessage = reason.data;
          }
        });
  }

  function onLogin() {
    $rootScope.$broadcast('authorized');
    $state.go('main');
  }

  vm.signupFacebook = signupFacebook;
  vm.signup = signUp;
  vm.email = '';
  vm.password = '';
  vm.again = '';
  vm.firstName = '';
  vm.lastName = '';
  vm.errorMessage = '';
})
   
.controller('mainCtrl', function (ItemsModel, $rootScope) {
  var vm = this;

  function goToBackand() {
    window.location = 'http://docs.backand.com';
  }

  function getAll() {
    ItemsModel.all()
      .then(function (result) {
        vm.data = result.data.data;
      });
  }

  function clearData() {
    vm.data = null;
  }

  function create(object) {
    ItemsModel.create(object)
      .then(function (result) {
        cancelCreate();
        getAll();
      });
  }

  function update(object) {
    ItemsModel.update(object.id, object)
      .then(function (result) {
        cancelEditing();
        getAll();
      });
  }

  function deleteObject(id) {
    ItemsModel.delete(id)
      .then(function (result) {
        cancelEditing();
        getAll();
      });
  }

  function initCreateForm() {
    vm.newObject = {name: '', description: ''};
  }

  function setEdited(object) {
    vm.edited = angular.copy(object);
    vm.isEditing = true;
  }

  function isCurrent(id) {
    return vm.edited !== null && vm.edited.id === id;
  }

  function cancelEditing() {
    vm.edited = null;
    vm.isEditing = false;
  }

  function cancelCreate() {
    initCreateForm();
    vm.isCreating = false;
  }

  vm.objects = [];
  vm.edited = null;
  vm.isEditing = false;
  vm.isCreating = false;
  vm.getAll = getAll;
  vm.create = create;
  vm.update = update;
  vm.delete = deleteObject;
  vm.setEdited = setEdited;
  vm.isCurrent = isCurrent;
  vm.cancelEditing = cancelEditing;
  vm.cancelCreate = cancelCreate;
  vm.goToBackand = goToBackand;
  vm.isAuthorized = false;

  $rootScope.$on('authorized', function () {
    vm.isAuthorized = true;
    getAll();
  });

  $rootScope.$on('logout', function () {
    clearData();
  });

  if (!vm.isAuthorized) {
    $rootScope.$broadcast('logout');
  }

  initCreateForm();
  getAll();

})
   
.controller('recoveryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('calendaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('hotPlacesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('storyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('workCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('logOutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
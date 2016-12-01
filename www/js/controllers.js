angular.module('flowTicket.controllers', [])
  
.controller('nowCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  var map = L.map('now-map').fitWorld();

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWV0YWx4aXgiLCJhIjoiY2l1c21pamtlMDBhczJvcnYzZDI3M2xmZiJ9.5Q6VLQB9TQPkY8e8cPravQ', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);

   var LeafIcon = L.Icon.extend({
    options: {
      // shadowUrl: 'https://unpkg.com/leaflet@1.0.2/dist/images/marker-shadow.png',
      iconSize:     [20, 60],
      shadowSize:   [30, 30],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
    }
  });

  var greenIcon = new LeafIcon({iconUrl: 'http://awc.art.br/beer.png'}),
      redIcon = new LeafIcon({iconUrl: 'http://awc.art.br/water.png'});
      orangeIcon = new LeafIcon({iconUrl: 'http://awc.art.br/water2.png'});

  L.marker([-28.2643051, -52.4077101], {icon: greenIcon}).bindPopup('King Size Pub <a href="#/story">Go</a>').addTo(map);
  L.marker([-28.2626028, -52.4067191], {icon: redIcon}).bindPopup("Boka Lanches").addTo(map);
  L.marker([-28.2343797, -52.3839636], {icon: orangeIcon}).bindPopup("Associação dos Professores. (Projecto X - Artes)").addTo(map);

  map.locate({setView: true, maxZoom: 16});

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
  }

  map.on('locationfound', onLocationFound);

  function onLocationError(e) {
      alert(e.message);
  }

  map.on('locationerror', onLocationError);


// isElementTapDisabled: function(ele) {
//     if(ele && ele.nodeType === 1) {
//       var element = ele;
//       while(element) {
//         if( element.getAttribute('data-tap-disabled') == 'true' || element.dataset.tapDisabled == 'true' ) {
//           return true;
//         }
//         element = element.parentElement;
//       }
//     }
//     return false;
//   }


  // var map = L.map('now-map').fitWorld();

  //   L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWV0YWx4aXgiLCJhIjoiY2l1c21pamtlMDBhczJvcnYzZDI3M2xmZiJ9.5Q6VLQB9TQPkY8e8cPravQ', {
  //       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  //       maxZoom: 18
  //   }).addTo(map);

  //   map.locate({setView: true, maxZoom: 16});

  //   function onLocationFound(e) {
  //       var radius = e.accuracy / 2;

  //       L.marker(e.latlng).addTo(map)
  //           .bindPopup("Você está há " + radius + " metros deste ponto").openPopup();

  //       L.circle(e.latlng, radius).addTo(map);
  //   }

  //   map.on('locationfound', onLocationFound);

  //   function onLocationError(e) {
  //       alert(e.message);
  //   }

  //   map.on('locationerror', onLocationError);



}])
   
.controller('avaliablePlacesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  var map2 = L.map('avaliable-map').fitWorld();

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWV0YWx4aXgiLCJhIjoiY2l1c21pamtlMDBhczJvcnYzZDI3M2xmZiJ9.5Q6VLQB9TQPkY8e8cPravQ', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map2);

   var LeafIcon = L.Icon.extend({
    options: {
      // shadowUrl: 'https://unpkg.com/leaflet@1.0.2/dist/images/marker-shadow.png',
      iconSize:     [20, 60],
      shadowSize:   [30, 30],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
    }
  });

  var greenIcon = new LeafIcon({iconUrl: 'http://awc.art.br/beer.png'}),
      redIcon = new LeafIcon({iconUrl: 'http://awc.art.br/val.png'});
      orangeIcon = new LeafIcon({iconUrl: 'http://awc.art.br/wateravaliable.png'});

  L.marker([-28.2643051, -52.4077101], {icon: greenIcon}).bindPopup('King Size Pub <a href="#/story">Go</a>').addTo(map2);
  L.marker([-28.2626028, -52.4067191], {icon: redIcon}).bindPopup("Boka Lanches").addTo(map2);
  L.marker([-28.2343797, -52.3839636], {icon: orangeIcon}).bindPopup("Associação dos Professores. (Projecto X - Artes)").addTo(map2);

  map2.locate({setView: true, maxZoom: 16});

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map2)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
  }

  map2.on('locationfound', onLocationFound);

  function onLocationError(e) {
      alert(e.message);
  }

  map2.on('locationerror', onLocationError);
   

}])
   
.controller('currentPlacesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  var map3 = L.map('current-map').fitWorld();

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWV0YWx4aXgiLCJhIjoiY2l1c21pamtlMDBhczJvcnYzZDI3M2xmZiJ9.5Q6VLQB9TQPkY8e8cPravQ', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map3);

   var LeafIcon = L.Icon.extend({
    options: {
      // shadowUrl: 'https://unpkg.com/leaflet@1.0.2/dist/images/marker-shadow.png',
      iconSize:     [20, 60],
      shadowSize:   [30, 30],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
    }
  });

  var greenIcon = new LeafIcon({iconUrl: 'http://awc.art.br/beercurrent.png'}),
      redIcon = new LeafIcon({iconUrl: 'http://awc.art.br/water.png'});
      orangeIcon = new LeafIcon({iconUrl: 'http://awc.art.br/water2current.png'});

  L.marker([-28.2643051, -52.4077101], {icon: greenIcon}).bindPopup('King Size Pub <a href="#/story">Go</a>').addTo(map3);
  L.marker([-28.2626028, -52.4067191], {icon: redIcon}).bindPopup("Boka Lanches").addTo(map3);
  L.marker([-28.2343797, -52.3839636], {icon: orangeIcon}).bindPopup("Associação dos Professores. (Projecto X - Artes)").addTo(map3);

  map3.locate({setView: true, maxZoom: 16});

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map3)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
  }

  map3.on('locationfound', onLocationFound);

  function onLocationError(e) {
      alert(e.message);
  }

  map3.on('locationerror', onLocationError);

}])
      
.controller('flowingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', function (Backand, $state, $scope, $rootScope, $ionicPopup, $ionicSideMenuDelegate, LoginService) {
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
    onLogin();
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

  $ionicSideMenuDelegate.canDragContent(false);

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


  $(document).ready(function(){
  var menuItemNum=$(".menu-item").length;
  var angle=120;
  var distance=90;
  var startingAngle=180+(-angle/2);
  var slice=angle/(menuItemNum-1);
  TweenMax.globalTimeScale(0.8);
  $(".menu-item").each(function(i){
    var angle=startingAngle+(slice*i);
    $(this).css({
      transform:"rotate("+(angle)+"deg)"
    })
    $(this).find(".menu-item-icon").css({
      transform:"rotate("+(-angle)+"deg)"
    })
  })
  var on=false;

  $(".menu-toggle-button").mousedown(function(){
    TweenMax.to($(".menu-toggle-icon"),0.1,{
      scale:0.65
    })
  })
  $(document).mouseup(function(){
    TweenMax.to($(".menu-toggle-icon"),0.1,{
      scale:1
    })
  });
  $(document).on("touchend",function(){
    $(document).trigger("mouseup")
  })
  $(".menu-toggle-button").on("mousedown",pressHandler);
  $(".menu-toggle-button").on("touchstart",function(event){
    $(this).trigger("mousedown");
    event.preventDefault();
    event.stopPropagation();
  });

  function pressHandler(event){
    on=!on;

    TweenMax.to($(this).children('.menu-toggle-icon'),0.4,{
      rotation:on?45:0,
      ease:Quint.easeInOut,
      force3D:true
    });

    on?openMenu():closeMenu();
    
  }
  function openMenu(){
    $(".menu-item").each(function(i){
      var delay=i*0.08;

      var $bounce=$(this).children(".menu-item-bounce");

      TweenMax.fromTo($bounce,0.2,{
        transformOrigin:"50% 50%"
      },{
        delay:delay,
        scaleX:0.8,
        scaleY:1.2,
        force3D:true,
        ease:Quad.easeInOut,
        onComplete:function(){
          TweenMax.to($bounce,0.15,{
            // scaleX:1.2,
            scaleY:0.7,
            force3D:true,
            ease:Quad.easeInOut,
            onComplete:function(){
              TweenMax.to($bounce,3,{
                // scaleX:1,
                scaleY:0.8,
                force3D:true,
                ease:Elastic.easeOut,
                easeParams:[1.1,0.12]
              })
            }
          })
        }
      });

      TweenMax.to($(this).children(".menu-item-button"),0.5,{
        delay:delay,
        y:distance,
        force3D:true,
        ease:Quint.easeInOut
      });
    })
  }
  function closeMenu(){
    $(".menu-item").each(function(i){
      var delay=i*0.08;

      var $bounce=$(this).children(".menu-item-bounce");

      TweenMax.fromTo($bounce,0.2,{
        transformOrigin:"50% 50%"
      },{
        delay:delay,
        scaleX:1,
        scaleY:0.8,
        force3D:true,
        ease:Quad.easeInOut,
        onComplete:function(){
          TweenMax.to($bounce,0.15,{
            // scaleX:1.2,
            scaleY:1.2,
            force3D:true,
            ease:Quad.easeInOut,
            onComplete:function(){
              TweenMax.to($bounce,3,{
                // scaleX:1,
                scaleY:1,
                force3D:true,
                ease:Elastic.easeOut,
                easeParams:[1.1,0.12]
              })
            }
          })
        }
      });
      

      TweenMax.to($(this).children(".menu-item-button"),0.3,{
        delay:delay,
        y:0,
        force3D:true,
        ease:Quint.easeIn
      });
    })
  }
});
  
  $(function() {
  // Crash varibles
  crashCymbolAll = $('#Crash');
  crashCymbol = $('#Crash-Cymbol');
  crashAudio = $('#Crash-Audio');

  // Crash timeline
  var crashtl = new TimelineMax({
    paused: true
  });
  crashtl.to(crashCymbol, 0.1, {rotation: 8, transformOrigin: "50% 50%"})
         .to(crashCymbol,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

  // Crash play
  window.crash = function() {
    crashtl.restart();
    crashtl.play();
    var crashAudioEl = crashAudio.get(0);
    crashAudioEl.currentTime = 0;
    crashAudioEl.play();
  }

  // Do the crash stuff when clicked/touched
  var clickTouchCrashDone = false;
  crashCymbolAll.on("touchstart click", function() {
    if(!clickTouchCrashDone) {
      clickTouchCrashDone = true;
      setTimeout(function() {
        clickTouchCrashDone = false;
      }, 100);
      crash();
      return false;
    }
  });

  // Right tom drum varibles
  rightTomDrumAll = $('#Tom-Right-All');
  rightTomDrum = $('#Tom-Right-Drum');
  smallTomAudio = $('#Small-Rack-Tom-Audio');

  // Right tom drum timeline
  var rightTomtl = new TimelineMax({
    paused: true
  });
  rightTomtl.to(rightTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
            .to(rightTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
            .to(rightTomDrumAll, 0.1, {rotation: 2.5, transformOrigin: "0 50%", ease: Elastic.easeOut}, '0')
            .to(rightTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
            .to(rightTomDrumAll, 0.6, {rotation: 0, transformOrigin: "0 50%", ease: Elastic.easeOut}, '-=0.4');

  // Right tom play
  window.rightTom = function() {
    rightTomtl.restart();
    rightTomtl.play();
    var smallTomAudioEl = smallTomAudio.get(0);
    smallTomAudioEl.currentTime = 0;
    smallTomAudioEl.play();
  }

  // Do the right tom stuff when clicked/touched
  var clickTouchRTDrumDone = false;
  rightTomDrumAll.on("touchstart click", function() {
    if(!clickTouchRTDrumDone) {
      clickTouchRTDrumDone = true;
      setTimeout(function() {
        clickTouchRTDrumDone = false;
      }, 100);
      rightTom();
      return false;
    }
  });

  // Left tom drum varibles
  leftTomDrumAll = $('#Tom-Left-All');
  leftTomDrum = $('#Tom-Left-Drum');
  bigTomAudio = $('#Big-Rack-Tom-Audio');

  // Left tom drum timeline
  var leftTomtl = new TimelineMax({
    paused: true
  });
  leftTomtl.to(leftTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
          .to(leftTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
          .to(leftTomDrumAll, 0.1, {rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '0')
          .to(leftTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
          .to(leftTomDrumAll, 0.6, {rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '-=0.4');

  // Left tom play
  window.leftTom = function(){
    leftTomtl.restart();
    leftTomtl.play();
    var bigTomAudioEl = bigTomAudio.get(0);
    bigTomAudioEl.currentTime = 0;
    bigTomAudioEl.play();
  }

  // Do the left tom stuff when clicked/touched
  var clickTouchLTDrumDone = false;
  leftTomDrumAll.on("touchstart click", function() {
    if(!clickTouchLTDrumDone) {
      clickTouchLTDrumDone = true;
      setTimeout(function() {
        clickTouchLTDrumDone = false;
      }, 100);
      leftTom();
      return false;
    }
  });

  // Floor tom drum varibles
  floorTomDrumAll = $('#Floor-Tom');
  floorTomAudio = $('#Floor-Tom-Audio');

  // Floor tom drum timeline
  var floorTomtl = new TimelineMax({
    paused: true
  });
  floorTomtl.to(floorTomDrumAll, 0.1, {scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut})
            .to(floorTomDrumAll, 0.1, {scaleY: 0.95, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
            .to(floorTomDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

  // Floor tom play
  window.floorTom = function(){
    floorTomtl.restart();
    floorTomtl.play();
    var floorTomAudioEl = floorTomAudio.get(0);
    floorTomAudioEl.currentTime = 0;
    floorTomAudioEl.play();
  }

  // Do the floor tom stuff when clicked/touched
  var clickTouchTDrumDone = false;
  floorTomDrumAll.on("touchstart click", function() {
    if(!clickTouchTDrumDone) {
      clickTouchTDrumDone = true;
      setTimeout(function() {
        clickTouchTDrumDone = false;
      }, 100);
      floorTom();
      return false;
    }
  });

  // Snare drum varibles
  snareDrumAll = $('#Snare');
  snareDrum = $('#Snare-Drum');
  snareAudio = $('#Snare-Audio');

  // Snare drum timeline
  var snaretl = new TimelineMax({
    paused: true
  });
  snaretl.to(snareDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
         .to(snareDrum, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
         .to(snareDrum, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

  // Snare play
  window.snare = function(){
    snaretl.restart();
    snaretl.play();
    var snareAudioEl = snareAudio.get(0);
    snareAudioEl.currentTime = 0;
    snareAudioEl.play();
  }

  // Do the snare stuff when clicked/touched
  var clickTouchSnareDone = false;
  snareDrumAll.on("touchstart click", function() {
    if(!clickTouchSnareDone) {
      clickTouchSnareDone = true;
      setTimeout(function() {
        clickTouchSnareDone = false;
      }, 100);
      snare();
      return false;
    }
  });

  // Kick drum varibles
  kickDrumAll = $('#Kick');
  kickAudio = $('#Kick-Audio');

  // Kick drum timeline
  var kicktl = new TimelineMax({
    paused: true
  });
  kicktl.to(kickDrumAll, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
        .to(kickDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

  // Kick play
  window.kick = function(){
    kicktl.restart();
    kicktl.play();
    var kickAudioEl = kickAudio.get(0);
    kickAudioEl.currentTime = 0;
    kickAudioEl.play();
  }

  // Do the kick stuff when clicked/touched
  var clickTouchKickDone = false;
  kickDrumAll.on("touchstart click", function() {
    if(!clickTouchKickDone) {
      clickTouchKickDone = true;
      setTimeout(function() {
        clickTouchKickDone = false;
      }, 100);
      kick();
      return false;
    }
  });

  // Hi-hat varibles
  hiHatAll = $('#Hi-Hat');
  hiHatTop = $('#Hi-Hat-Top');
  hiHatBottom = $('#Hi-Hat-Bottom');
  hiHatClosedAudio = $('#Hi-Hat-Closed-Audio');

  // Hi-hat timeline
  var hiHattl = new TimelineMax({
    paused: true
  });
  hiHattl.to([hiHatTop, hiHatBottom], 0.1, {rotation: -4, transformOrigin: "50% 50%"})
         .to([hiHatTop, hiHatBottom], 0.6, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2)});

  // Hi-hat play
  window.hiHat = function() {
    hiHattl.restart();
    hiHattl.play();
    var hiHatClosedAudioEl = hiHatClosedAudio.get(0);
    hiHatClosedAudioEl.currentTime = 0;
    hiHatClosedAudioEl.play();
  }

  // Do the hi-hat stuff when clicked/touched
  var clickTouchHitHatDone = false;
  hiHatAll.on("touchstart click", function() {
    if(!clickTouchHitHatDone) {
      clickTouchHitHatDone = true;
      setTimeout(function() {
        clickTouchHitHatDone = false;
      }, 100);
      hiHat();
      return false;
    }
  });

  // Key guide
  allKeys = $('#All-Keys');

  // Key timeline
  function animateKey(key) {
    keytl = new TimelineMax({
      paused: true
    });
    keytl.to(key, 0.1, {scale: 1.1, transformOrigin: "50% 50%", ease: Expo.easeOut})
    .to(key, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});
          keytl.restart();
          keytl.play();
  }

  // Show/hide keys
  $('#keys-btn').click(function() {
    allKeys.fadeToggle();
  });

  // Key triggers
  document.onkeydown = function(e) {
    thisKeyID = 'Key-' + e.keyCode;
    thisKey = $('#' + thisKeyID);
    switch (e.keyCode) {
      case 74:
        hiHat();
        animateKey(thisKey);
        break;
      case 72:
        snare();
        animateKey(thisKey);
        break;
      case 66:
        kick();
        animateKey(thisKey);
        break;
      case 71:
        floorTom();
        animateKey(thisKey);
        break;
      case 70:
        crash();
        animateKey(thisKey);
        break;
      case 84:
        leftTom();
        animateKey(thisKey);
        break;
      case 89:
        rightTom();
        animateKey(thisKey);
        break;
    }
  };

  // Show/hide sequencer variables
  sequencerVisible = false;

  // Show/hide sequencer
  $('#sequencer-visible-btn').click(function () {
    // Changes the flex-grow value
    $("#container-sequencer").toggleClass("collapse");
    if (sequencerVisible === false) {
      sequencerVisible = true;
    }  else {
      sequencerVisible = false;
    }
    // This class hides the drums on smaller screens
    $("#container-drums").toggleClass("screen-sm-hidden");
  });

  // Sequencer varibles
  rows = $('.row');
  rowLength = rows.first().children().length;
  labels = $('label');
  // Beat starts at 1 because 0 is the img for each row
  beat = 1;

  // Sequencer
  function sequencer () {
    labels.removeClass('active');
    // Do this function for each .row
    $(rows).each(function() {
    // Select the child element at the "beat" index
      current = $(this).children().eq(beat);
      current.addClass('active');
    // If the current input is checked do some stuff!
      if (current.find('input').is(":checked")) {
        targetDrum = (current.parent().attr('data-target-drum'));
        // If there a function that shares the same name as the data attribue, do it!
        fn = window[targetDrum];
        if (typeof fn === "function") {
          fn();
        }
      }
    });
    // If we get to the last child, start over
    if ( beat < (rowLength - 1) ) {
      ++beat;
    } else {
      beat = 1;
    }
  }

  // Start/Stop Sequencer varibles
  sequencerOn = false;

  // Start/Stop Sequencer
  $('#sequencer-active-btn').click(function () {
    $(this).find('i').toggleClass('fa-pause');
    if (sequencerOn === false) {
      intervalId = window.setInterval(sequencer, interval);
      sequencerOn = true;
    } else {
      window.clearInterval(intervalId);
      sequencerOn = false;
    }
  });

  // Tempo varibles
  bpm = 150;
  interval = 60000 / bpm;

  // Set tempo
  function setTempo() {
    window.clearInterval(intervalId);
    intervalId = window.setInterval(sequencer, interval);
  }

  // Increase tempo
  $('#bpm-increase-btn').click(function() {
    if ( bpm < 300 ) {
      bpm = parseInt($('#bpm-indicator').val());
      bpm += 10;
      interval = 60000 / bpm;
      $('#bpm-indicator').val(bpm);
      if(sequencerOn === true) {
        setTempo();
      }
    }
  });

  //Decrease tempo
  $('#bpm-decrease-btn').click(function() {
    if ( bpm > 100 ) {
      bpm = parseInt($('#bpm-indicator').val());
      bpm -= 10;
      interval = 60000 / bpm;
      $('#bpm-indicator').val(bpm);
      if(sequencerOn === true) {
        setTempo();
      }
    }
  });

  // Trigger drum on input check
  $('input').click(function() {
    if (sequencerOn === false) {
      if ($(this).is(":checked")) {
        targetDrum = $(this).parents(".row").attr('data-target-drum');
        fn = window[targetDrum];
        if (typeof fn === "function") {
          fn();
        }
      }
    }
  });

  // Load audio on iOS devices on the first user interaction, because...
  $('#sequencer-visible-btn').one('click', function() {
    $("audio").each(function(i) {
      this.play();
      this.pause();
    });
  });

});


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

  var map4 = L.map('flow-map').fitWorld();

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWV0YWx4aXgiLCJhIjoiY2l1c21pamtlMDBhczJvcnYzZDI3M2xmZiJ9.5Q6VLQB9TQPkY8e8cPravQ', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map4);

   var LeafIcon = L.Icon.extend({
    options: {
      // shadowUrl: 'https://unpkg.com/leaflet@1.0.2/dist/images/marker-shadow.png',
      iconSize:     [20, 60],
      shadowSize:   [30, 30],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
    }
  });

  var greenIcon = new LeafIcon({iconUrl: 'http://awc.art.br/beer.png'}),
      redIcon = new LeafIcon({iconUrl: 'http://awc.art.br/water.png'});
      orangeIcon = new LeafIcon({iconUrl: 'http://awc.art.br/water2.png'});

  L.marker([-28.2643051, -52.4077101], {icon: greenIcon}).bindPopup('King Size Pub <a href="#/story">Go</a>').addTo(map4);
  L.marker([-28.2626028, -52.4067191], {icon: redIcon}).bindPopup("Boka Lanches").addTo(map4);
  L.marker([-28.2343797, -52.3839636], {icon: orangeIcon}).bindPopup("Associação dos Professores. (Projecto X - Artes)").addTo(map4);

  map4.locate({setView: true, maxZoom: 16});

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map4)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
  }

  map4.on('locationfound', onLocationFound);

  function onLocationError(e) {
      alert(e.message);
  }

  map4.on('locationerror', onLocationError);

}])
   
.controller('calendaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $(function() {
      
        var cal = $( '#calendar' ).calendario( {
            onDayClick : function( $el, $contentEl, dateProperties ) {

              for( var key in dateProperties ) {
                console.log( key + ' = ' + dateProperties[ key ] );
              }

            },
            caldata : codropsEvents
          } ),
          $month = $( '#custom-month' ).html( cal.getMonthName() ),
          $year = $( '#custom-year' ).html( cal.getYear() );

        $( '#custom-next' ).on( 'click', function() {
          cal.gotoNextMonth( updateMonthYear );
        } );
        $( '#custom-prev' ).on( 'click', function() {
          cal.gotoPreviousMonth( updateMonthYear );
        } );
        $( '#custom-current' ).on( 'click', function() {
          cal.gotoNow( updateMonthYear );
        } );

        function updateMonthYear() {        
          $month.html( cal.getMonthName() );
          $year.html( cal.getYear() );
        }

        // you can also add more data later on. As an example:
        /*
        someElement.on( 'click', function() {
          
          cal.setData( {
            '03-01-2013' : '<a href="#">testing</a>',
            '03-10-2013' : '<a href="#">testing</a>',
            '03-12-2013' : '<a href="#">testing</a>'
          } );
          // goes to a specific month/year
          cal.goto( 3, 2013, updateMonthYear );

        } );
        */
      
      });

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

  (function() {

  var viewEl = document.querySelector('.view'),
    gridEl = viewEl.querySelector('.grid'),
    items = [].slice.call(gridEl.querySelectorAll('.product')),
    basket;

  // the compare basket
  function CompareBasket() {
    this.el = document.querySelector('.compare-basket');
    this.compareCtrl = this.el.querySelector('.action--compare');
    this.compareWrapper = document.querySelector('.compare'),
    this.closeCompareCtrl = this.compareWrapper.querySelector('.action--close')
    
    this.itemsAllowed = 3;
    this.totalItems = 0;
    this.items = [];

    // compares items in the compare basket: opens the compare products wrapper
    //this.compareCtrl.addEventListener('click', this._compareItems.bind(this));
    // close the compare products wrapper
    var self = this;
    this.closeCompareCtrl.addEventListener('click', function() {
      // toggle compare basket
      classie.add(self.el, 'compare-basket--active');
      // animate..
      classie.remove(viewEl, 'view--compare');
    });
  }

  CompareBasket.prototype.add = function(item) {
    // check limit
    if( this.isFull() ) {
      return false;
    }

    classie.add(item, 'product--selected');

    // create item preview element
    var preview = this._createItemPreview(item);
    // prepend it to the basket
    this.el.insertBefore(preview, this.el.childNodes[0]);
    // insert item
    this.items.push(preview);

    this.totalItems++;
    if( this.isFull() ) {
      classie.add(this.el, 'compare-basket--full');
    }

    classie.add(this.el, 'compare-basket--active');
  };

  CompareBasket.prototype._createItemPreview = function(item) {
    var self = this;

    var preview = document.createElement('div');
    preview.className = 'product-icon';
    preview.setAttribute('data-idx', items.indexOf(item));
    
    var removeCtrl = document.createElement('button');
    removeCtrl.className = 'action action--remove';
    removeCtrl.innerHTML = '<i class="fa fa-remove"></i><span class="action__text action__text--invisible">Remove product</span>';
    removeCtrl.addEventListener('click', function() {
      self.remove(item);
    });
    
    var productImageEl = item.querySelector('img.product__image').cloneNode(true);

    preview.appendChild(productImageEl);
    preview.appendChild(removeCtrl);

    var productInfo = item.querySelector('.product__info').innerHTML;
    preview.setAttribute('data-info', productInfo);

    return preview;
  };

  CompareBasket.prototype.remove = function(item) {
    classie.remove(this.el, 'compare-basket--full');
    classie.remove(item, 'product--selected');
    var preview = this.el.querySelector('[data-idx = "' + items.indexOf(item) + '"]');
    this.el.removeChild(preview);
    this.totalItems--;

    var indexRemove = this.items.indexOf(preview);
    this.items.splice(indexRemove, 1);

    if( this.totalItems === 0 ) {
      classie.remove(this.el, 'compare-basket--active');
    }

    // checkbox
    var checkbox = item.querySelector('.action--compare-add > input[type = "checkbox"]');
    if( checkbox.checked ) {
      checkbox.checked = false;
    }
  };

  CompareBasket.prototype._compareItems = function() {
    var self = this;

    // remove all previous items inside the compareWrapper element
    [].slice.call(this.compareWrapper.querySelectorAll('div.compare__item')).forEach(function(item) {
      self.compareWrapper.removeChild(item);
    });

    for(var i = 0; i < this.totalItems; ++i) {
      var compareItemWrapper = document.createElement('div');
      compareItemWrapper.className = 'compare__item';

      var compareItemEffectEl = document.createElement('div');
      compareItemEffectEl.className = 'compare__effect';

      compareItemEffectEl.innerHTML = this.items[i].getAttribute('data-info');
      compareItemWrapper.appendChild(compareItemEffectEl);

      this.compareWrapper.insertBefore(compareItemWrapper, this.compareWrapper.childNodes[0]);
    }

    setTimeout(function() {
      // toggle compare basket
      classie.remove(self.el, 'compare-basket--active');
      // animate..
      classie.add(viewEl, 'view--compare');
    }, 25);
  };

  CompareBasket.prototype.isFull = function() {
    return this.totalItems === this.itemsAllowed;
  };

  function init() {
    // initialize an empty basket
    basket = new CompareBasket();
    initEvents();
  }

  function initEvents() {
    items.forEach(function(item) {
      var checkbox = item.querySelector('.action--compare-add > input[type = "checkbox"]');
      checkbox.checked = false;

      // ctrl to add to the "compare basket"
      checkbox.addEventListener('click', function(ev) {
        if( ev.target.checked ) {
          if( basket.isFull() ) {
            ev.preventDefault();
            return false;
          }
          basket.add(item);
        }
        else {
          basket.remove(item);
        }
      });
    });
  }

  init();

})();

}])
   
.controller('workCtrl', function (Backand, $state, $scope, $rootScope, $ionicPopup, $ionicSideMenuDelegate, LoginService) {
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
    onLogin();
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

  $ionicSideMenuDelegate.canDragContent(false);

})
   
.controller('logOutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
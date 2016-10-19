angular.module('flowTicket.routes', [])

.config(function (BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
   // change here to your appName
  var appName = 'flowticket';

  // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access
  var token = 'ea4f1806-6b43-459a-8821-b5ead56097c2';

  var signUpToken = 'b89dbd1c-da16-46ac-9452-70399d247d2d';

  
  BackandProvider.setAppName(appName);
  BackandProvider.setAnonymousToken(token);
  BackandProvider.setSignUpToken(signUpToken);

  $stateProvider

  .state('feed.now', {
    url: '/now',
    views: {
      'tab1': {
        templateUrl: 'templates/now.html',
        controller: 'nowCtrl'
      }
    }
  })

  .state('feed.avaliablePlaces', {
    url: '/avaliable',
    views: {
      'tab2': {
        templateUrl: 'templates/avaliablePlaces.html',
        controller: 'avaliablePlacesCtrl'
      }
    }
  })

  .state('feed.currentPlaces', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/currentPlaces.html',
        controller: 'currentPlacesCtrl'
      }
    }
  })

  .state('feed', {
    url: '/feed',
    templateUrl: 'templates/feed.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl as login'

  })


  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl as vm'
  })

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl as vm'
  })

  .state('recovery', {
    url: '/recovery',
    templateUrl: 'templates/recovery.html',
    controller: 'recoveryCtrl'
  })

  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('calendary', {
    url: '/calendary',
    templateUrl: 'templates/calendary.html',
    controller: 'calendaryCtrl'
  })

  .state('hotPlaces', {
    url: '/hot-places',
    templateUrl: 'templates/hotPlaces.html',
    controller: 'hotPlacesCtrl'
  })

  .state('story', {
    url: '/story',
    templateUrl: 'templates/story.html',
    controller: 'storyCtrl'
  })

  .state('work', {
    url: '/work',
    templateUrl: 'templates/work.html',
    controller: 'workCtrl'
  })

  .state('logOut', {
    url: '/logout',
    templateUrl: 'templates/logOut.html',
    controller: 'logOutCtrl'
  })

$urlRouterProvider.otherwise('/login');
$httpProvider.interceptors.push('APIInterceptor');

  

})


// .config(function (BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

//         // change here to your appName
//         var appName = 'flowTicket';

//         // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access
//         var token = 'ea4f1806-6b43-459a-8821-b5ead56097c2';

//         BackandProvider.setAppName(appName);
//         BackandProvider.setAnonymousToken(token);

//         $stateProvider
//             // setup an abstract state for the tabs directive
//             .state('tab', {
//                 url: '/tabs',
//                 abstract: true,
//                 templateUrl: 'templates/tabs.html'
//             })
//             .state('tab.dashboard', {
//                 url: '/dashboard',
//                 views: {
//                     'tab-dashboard': {
//                         templateUrl: 'templates/tab-dashboard.html',
//                         controller: 'DashboardCtrl as vm'
//                     }
//                 }
//             })
//             .state('tab.login', {
//                 url: '/login',
//                 views: {
//                     'tab-login': {
//                         templateUrl: 'templates/tab-login.html',
//                         controller: 'LoginCtrl as login'
//                     }
//                 }
//             });

//         $urlRouterProvider.otherwise('/tabs/dashboard');

//         $httpProvider.interceptors.push('APIInterceptor');
//     })
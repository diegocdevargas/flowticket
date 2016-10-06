angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
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

$urlRouterProvider.otherwise('/login')

  

});
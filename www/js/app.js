// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  });
  
  
  //Ribbons animation loop
  //   var ribbon = document.getElementById("flow-ticket");

  // var xCenter = 20;
  // var yCenter = 20; 
  // var poolRadius = 50;

  //   var tl2 = new TimelineMax({onComplete: reverse, repeat:-1, yoyo:true});
  //   function tweenRibbon() {
  //     var angle = Math.random() * Math.PI * 2; //random angle in radians
  //     var radius = Math.random() * poolRadius;
  //     tl2.to(ribbon, 13, {scale:1.1, skewY:Math.cos(angle) + 1, skewX:8, rotation:1, rotationY: 15, rotationX: 15, x:Math.cos(angle) * radius + xCenter, y:Math.sin(angle) * radius + yCenter, ease:Quad.easeInOut, onComplete:tweenRibbon, delay: 0.0000001});
  //     tl2.to(ribbon, 13, {scale: 1, skewY:0, skewX:0, rotation:0, rotationY: 0, rotationX: 0, x:Math.cos(angle) * radius + xCenter, y:Math.sin(angle) * radius + yCenter, ease:Quad.easeInOut, onComplete:tweenRibbon, delay: 0.0000001});
  // }
  // tweenRibbon();


  //   function reverse(){
  //     tl1.reverse();
  //   }
})
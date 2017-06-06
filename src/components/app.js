var app = angular.module('video-player');

app.component('app', {
  templateUrl: 'src/templates/app.html'
  // bindings
  // controller
  // template
})

// app.controller('searchResults', function($scope, $http) { 
//   $http.get('src/data/exampleVideoData.js').success(function(data) { 
//     $scope.videos = data;
//     console.log($scope.videos);
//   });
// });

.controller('searchResults', function($scope, $http) { 
  $scope.videos = window.exampleVideoData;
  // $http.get('src/data/exampleVideoData.js').then(function(data) { 
  //   $scope.videos = data;
  //   console.log($scope.videos);
  // });


  $scope.currentVideo = {};
  //$scope.searchResults = function() {};
  $scope.selectVideo = function() {};
  // console.log($scope.videos);
});


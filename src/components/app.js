angular.module('video-player')

.component('app', {
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
  this.videos = exampleVideoData;
  // $http.get('src/data/exampleVideoData.js').then(function(data) { 
  //   $scope.videos = data;
  //   console.log($scope.videos);
  // });


  $scope.currentVideo = {};
  //$scope.searchResults = function() {};
  $scope.selectVideo = function() {};
  // console.log($scope.videos);
});


angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html'
})
.controller('videoListEntry', function($scope, videoList) { 
  $scope.videos = 'src/data/exampleVideoData.js';
});
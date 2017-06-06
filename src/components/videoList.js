angular.module('video-player')
// pass in the data from exampleVideoData
// refactor the videoList component to dynamically 
  //render one videoListEntry component for each video object in exampleVideoData

// the exampleVideoData.js is our model (an ordinary JS obj)
// we'll use the controller to build the logic for the video list view
  // .controller('') scope glues the view with controller, 
  // they hold the model data that we need to pass to view
// binding, data binding
.component('videoList', {
  templateUrl: 'src/templates/videoList.html'
});

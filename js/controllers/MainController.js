var app = angular.module('parseQueue');

app.controller('MainController', function($scope, parseService) {
  
  $scope.postData = function(question) {
  	parseService.dataPost(question).then(function(){
  		$scope.question = " ";
  	})
 	$scope.getParseData();
  }

	$scope.getParseData = function() {
  	parseService.getData().then(function(response) {
  		console.log(response.data.results)
  		$scope.questions = response.data.results;

  	})
  } 
});
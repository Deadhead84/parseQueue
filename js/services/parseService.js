var app = angular.module('parseQueue');

app.service('parseService', function($http) {
	
  this.dataPost = function(question) {
	return $http ({
		method: 'POST',
		url: 'https://api.parse.com/1/classes/question',
		data: {
			text: question
		} 

	});
  }

  this.getData = function() {
  	return $http.get('https://api.parse.com/1/classes/question?order=-createdAt');
  }
});

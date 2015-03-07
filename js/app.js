var app = angular.module('fitstantly', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '/js/home/homeTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/userId', {
			templateUrl: '/js/userInfo/userInfoTemplate.html',
			controller: 'UserCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})




});




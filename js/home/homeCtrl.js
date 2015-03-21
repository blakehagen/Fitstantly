var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope, homeService, $location) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw')
	
	$scope.authorize = function() {
		homeService.authenticate().then(function(data){
			$location.path('/user');
				console.log(data);
			homeService.setSteps(data[0].summary.steps); // ---> current day steps

			homeService.setActive(data[0].summary.veryActiveMinutes); // ---> current day active minutes

			homeService.setBestSteps(data[5].best.total.steps.value); // ---> best steps all-time
			
			homeService.setMostStepsWeek(data[1]["activities-steps"]); // ---> best steps last 7 days
			
			homeService.setAvgStepsWeek(data[1]["activities-steps"]); // ---> average steps/day last 7 days
			
			homeService.setMostMinutesWeek(data[2]["activities-minutesVeryActive"]); // ---> best active minutes last 7 days
			
			homeService.setAvgActiveWeek(data[2]["activities-minutesVeryActive"]); // ---> average active mins/day last 7 days

			homeService.setMostStepsMonth(data[3]["activities-steps"]); // ---> best steps current month
			
			homeService.setMostMinutesMonth(data[4]["activities-minutesVeryActive"]); // ---> best active minutes current month

		})
	}



		





});
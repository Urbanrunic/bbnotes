/**
 * Home page functionality (currently there is none)
 */
angular.module("ang-bbnotes").controller("HomeController", ["$state", function ($state) {
	this.$state = $state;

	// bind the controller to vm (view-model)
	var vm = this;

	// create a new time variable with the current date
	vm.time = new Date();
}]);

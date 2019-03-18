angular.module('medicationControl').config(function ($routeProvider) {
    $routeProvider.when("/", {
		templateUrl: "views/medicationList.html",
		controller: "medicationListController"
	});
    $routeProvider.when("/create", {
		templateUrl: "views/medicationCreate.html",
		controller: "medicationCreateController"
	});
    $routeProvider.otherwise({ redirectTo: "/" });
});
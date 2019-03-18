angular.module('medicationControl').service('medicationService', function ($http, env) {
	this.list = function () {
        return $http.get(env.url + '/medications');
    };
    
    this.create = function (medication) {
        return $http.post(env.url + '/medications', medication);
	};
});
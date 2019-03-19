angular.module('medicationControl').service('medicationService', function ($http, env) {
	this.list = function () {
        return $http.get(env.url + '/medications');
    };

    this.find = function (medicationId) {
        return $http.get(env.url + '/medications/' + medicationId);
    };
    
    this.create = function (medication) {
        return $http.post(env.url + '/medications', medication);
    };

    this.edit = function (medication) {
        return $http.put(env.url + '/medications/' + medication.id, medication);
    };
    
    this.delete = function (medicationId) {
        return $http.delete(env.url + '/medications/' + medicationId);
	};
});
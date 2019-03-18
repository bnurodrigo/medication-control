angular.module('medicationControl').controller('medicationCreateController', function ($scope, $location, measurementUnit, medicationService) {
    $scope.measurementUnits = measurementUnit.units;

    $scope.createMedication = function (medication) {
        medicationService.create(medication);
        $location.path('/');
    };
});
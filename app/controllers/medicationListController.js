angular.module('medicationControl').controller('medicationListController', function ($scope, medicationService) {
    $scope.medications = [];

    var init = function () {
        medicationService.list().then(function (response) {
            $scope.medications = response.data;
        });
    }

    init();
});
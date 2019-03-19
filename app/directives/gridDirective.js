angular.module('medicationControl').directive('grid', function () {
    return {
        templateUrl: 'views/grid.html',
        replace: true,
        restrict: 'E',
        scope: {
            options: '='
        }
    };
});
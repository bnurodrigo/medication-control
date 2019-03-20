angular.module('medicationControl').directive('formSelect', function () {
    return {
        templateUrl: 'views/formSelect.html',
        replace: true,
        restrict: 'E',
        scope: {
            options: '=',
            empty: '@'
        }
    };
});
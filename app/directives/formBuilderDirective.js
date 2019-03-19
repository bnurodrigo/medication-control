angular.module('medicationControl').directive('formBuilder', function () {
    return {
        templateUrl: 'views/formBuilder.html',
        replace: true,
        transclude: true,
        restrict: 'E',
        scope: {
            options: '='
        },
        link: function (scope, element, attrs, ctrl) {
            scope.data = scope.options.data || {};

            scope.validation = function (field, validation) {
                if (!field.validations.hasOwnProperty(validation)) return false;
                if (!field.validations[validation].hasOwnProperty('value')) return true;
                return field.validations[validation].value;
            }

            scope.onSubmit = function (data) {
                scope.options.events.submit(data);
            };
        }
    };
});
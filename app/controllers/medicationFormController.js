angular.module('medicationControl').controller('medicationFormController', function ($scope, $location, measurementUnit, medicationService, medication) {
    $scope.formBuilderOptions = {
        data: null === medication ? null : medication.data,
        events: {
            submit: function (medication) {
                if (medication.id) {
                    medicationService.edit(medication).then(function () {
                        $location.path('/');
                    });
                } else {
                    medicationService.create(medication).then(function () {
                        $location.path('/');
                    });
                }
            }
        },
        fields: [
            {
                name: 'name',
                type: 'text',
                label: 'Name',
                validations: {
                    required: { message: 'Please provide a valid name.' }
                }
            },
            {
                name: 'measurementUnit',
                type: 'choice',
                label: 'Measurement Unit',
                choices: measurementUnit.units,
                validations: {
                    required: { message: 'Please provide a valid measurement unit.' }
                }
            },
            {
                name: 'orientation',
                type: 'text',
                label: 'Orientation',
                validations: {
                    required: { message: 'Please provide a valid orientation.' }
                }
            },
            {
                name: 'stock',
                type: 'number',
                label: 'Stock',
                validations: {
                    required: { message: 'Please provide a valid stock.' },
                    min: { value: 0, message: 'Stock can not be negative.' }
                }
            }
        ]
    };
});
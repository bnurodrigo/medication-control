angular.module('medicationControl').controller('medicationListController', function ($scope, medicationService, medications) {
    $scope.gridOptions = {
        data: medications.data,
        columns: [
            {
                type: 'default',
                label: 'Name',
                value: 'name'
            },
            {
                type: 'default',
                label: 'Measurement Unit',
                value: 'measurementUnit'
            },
            {
                type: 'default',
                label: 'Orientation',
                value: 'orientation'
            },
            {
                type: 'button',
                buttons: [{
                    style: 'link',
                    icon: 'plus',
                    events: {
                        click: function (medication) {
                            medication.stock += 1;
                            medicationService.edit(medication);
                        }
                    }
                }]
            },
            {
                type: 'default',
                label: 'Stock',
                value: 'stock'
            },
            {
                type: 'button',
                buttons: [{
                    style: 'link',
                    icon: 'minus',
                    events: {
                        click: function (medication) {
                            if (medication.stock > 0) {
                                medication.stock -= 1;
                                medicationService.edit(medication);
                            }
                        }
                    }
                }]
            },
            {
                type: 'button',
                buttons: [
                    {
                        style: 'primary',
                        icon: 'edit',
                        path: '#!/edit/:id'
                    },
                    {
                        style: 'danger',
                        icon: 'trash-alt',
                        events: {
                            click: function (medication, medications) {
                                medicationService.delete(medication.id).then(function () {
                                    var index = medications.indexOf(medication);
                                    medications.splice(index, 1);
                                });
                            }
                        }
                    }
                ]
            }
        ]
    };
});
angular.module('medicationControl').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/medicationList.html',
        controller: 'medicationListController',
        resolve: {
            medications: function (medicationService) {
                return medicationService.list();
            }
        }
    });
    $routeProvider.when('/create', {
        templateUrl: 'views/medicationForm.html',
        controller: 'medicationFormController',
        resolve: {
            medication: function () { return null; }
        }
    });
    $routeProvider.when('/edit/:id', {
        templateUrl: 'views/medicationForm.html',
        controller: 'medicationFormController',
        resolve: {
            medication: function (medicationService, $route) {
                return medicationService.find($route.current.params.id);
            }
        }
    });
    $routeProvider.otherwise({ redirectTo: '/' });
});
angular.module('medicationControl').config(function ($httpProvider) {
    $httpProvider.interceptors.push('loadingInterceptor');
});
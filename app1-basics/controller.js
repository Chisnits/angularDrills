angular.module('app').controller('mainCtrl', function($scope, mainService) {
$scope.test = 'controller is working';
$scope.test1 = mainService.test1;
$scope.inputText = 'input'
})
angular.module('app').controller('mainCtrl', function($scope, mainService){
    // $scope.test = 'controller working';
    // $scope.test1 = mainService.test1;
    $scope.employees = mainService.getData();

})
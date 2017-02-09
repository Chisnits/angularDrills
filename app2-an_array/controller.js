angular.module('arrayApp').controller('arrayController', function($scope,mainService){
    // $scope.test = 'this controller is working';
    // $scope.test1 = mainService.test1
    $scope.employees = mainService.getData();

})
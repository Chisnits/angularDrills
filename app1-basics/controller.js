angular.module('app').controller('mainCtrl', function($scope, mainService){
    $scope.test = 'this controller is working'
    $scope.test1 = mainService.test1
    
     

});
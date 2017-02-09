angular.module('apiApp').controller('mainCtrl',function($scope, mainService){
    // $scope.test = 'controller works';
    // $scope.test1 = mainService.test1;

        mainService.getData().then(function(characters){
            $scope.characters = characters;
            console.log('got to here')
        })
    })

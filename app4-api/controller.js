angular.module('apiApp').controller('mainCtrl',function($scope, mainService){
    mainService.getData().then(function(info){
        $scope.characters = mainService.getData();
        mainService.getData().then(function(characters){
            $scope.characters = characters;

        })
    }) 


})
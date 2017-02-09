angular.module('apiApp').service('mainService',function($http){
    // this.test1 = 'service works'
    var baseUrl = "http://swapi.co/api";
    this.getData = function(character){
        return $http({
            method: 'GET',
            url: baseUrl + '/people'
    }).then(function(response){
        console.log(response.data.results)
        if(response.status === 200){
            return response.data.results
        }
            return "Something Went Wrong"
        })
    }
})
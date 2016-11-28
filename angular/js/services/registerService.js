var app = angular.module('main');

app.service("registerService", function($http){
    console.log("Register Service Worked!");
    this.register = function(studentid,authcode){
        console.log("register inside service");
        console.log(studentid);
        console.log(authcode);
        
        var req = {
            method: 'POST',
            url: 'https://edenzproj.herokuapp.com/authreg',
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json'
        },
            
            data: {
                studentid: studentid,
                authcode: authcode
            }
        }
        return $http(req)
        .then(function(result){
            console.log("service " + result.data);
            return result.data;
            
        }, function(error){
            console.log(error);
            return false;
        });
    }
})
            
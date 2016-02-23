var app = angular.module('DonationWebApp');

app.controller('donationsController', ['$scope','$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Donations Page!';

    findAll();

        function findAll() {
            $http.get('/donations')
                .success(function (data) {
                    $scope.donations = data;
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }


    $scope.delete = function(id) {
            if(confirm("Are you sure you want to delete this donation?")){
                console.log('Deleting id : ' + id);
                  $http.delete('/donations/' + id)
                    .success(function(data){
                        console.log(data);
                        findAll();
                    })
                    .error(function(data){
                        console.log('Error : ' + data);
                    });
            }

    };


    $scope.incrementUpvotes = function(id){
       $http.put('/donations/' + id + '/votes')
           .success(function(data){
               console.log(data);
               findAll();
           })
           .error(function(data){
               console.log('Error : ' + data);
           });
    }


  }
  ]);

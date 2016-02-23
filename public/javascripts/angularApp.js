var app = angular.module('DonationWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            .when('/about', {
                templateUrl : 'pages/about.ejs',
                controller  : 'aboutController'
            })

            .when('/contact', {
                templateUrl : 'pages/contact.ejs',
                controller  : 'contactController'
            })
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'mainController'
            })

             // route for the donate page
            .when('/donate', {
                templateUrl : 'pages/donate.ejs',
                controller  : 'donateController'
            })

             // route for the donations page
            .when('/donations', {
                templateUrl : 'pages/donations.ejs',
                controller  : 'donationsController'
            });
    });


  
  



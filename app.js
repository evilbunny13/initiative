var initApp = angular.module('initApp', ['ngRoute']);

//ROUTES
initApp.config(function($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'pages/setup.html',
        controller: 'setupController'
    })

        .when('/play', {
        templateUrl: 'pages/play.html',
        controller: 'playController'
    });

});


//CONTROLLERS
initApp.controller('setupController', ['$scope', function($scope) {
    
    $scope.sliderActive = true; 
    
    $scope.inits = [
        { initname: "Cruster", initnum: $scope.crusterInit},
        { initname: "Vorr", initnum: $scope.vorrInit},
        { initname: "Enemies", initnum: $scope.enemiesInit}
    ];
    
}]);

initApp.controller('playController', ['$scope', function($scope) {


}]);
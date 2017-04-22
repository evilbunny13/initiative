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


//SERVICES
initApp.service('rollService', function() {
    this.order = [
        { name:'Vesker', roll:'', upPic:'img/vesker-alt1.jpg' },
        { name:'Luna', roll:'', upPic:'img/luna1.jpg' },
        { name:'Wolf', roll:'', upPic:'img/wolf1.jpg' },
        { name:'Cruster', roll:'', upPic:'img/cruster1.jpg' },
        { name:'Grim', roll:'', upPic:'img/grim1.jpg' },
        { name:'Iris', roll:'', upPic:'img/iris1.jpg' },
        { name:'Vorr', roll:'', upPic:'img/spenkimbo1.jpg' },
        { name:'Enemies', roll:'', upPic:'img/enemies1.jpg' }
    ];
});

initApp.service('ehpService', function() {
    this.ehp = [];
});

//CONTROLLERS
initApp.controller('setupController', ['$scope', 'rollService', 'ehpService', function($scope, rollService, ehpService) {
    
    $scope.order = rollService.order;
    $scope.ehp = ehpService.ehp;
    
    $scope.playerAdd = function() {
        $scope.order.push({name:$scope.playerInput, roll:'0', upPic:'img/Silhouette-question-mark.jpeg'});
        $scope.playerInput = "";
    };
    
    $scope.enemyAdd = function() {
        $scope.ehp.push({name:$scope.enemyInput, hp:'', ac:''});
        $scope.enemyInput = "";
    };
}]);


initApp.controller('playController', ['$scope', 'rollService', 'ehpService', function($scope, rollService, ehpService) {
    $scope.order = rollService.order;
    $scope.ehp = ehpService.ehp;
    
    $scope.curr = 0;
    
    $scope.nextPlayer = function() {
        if ($scope.curr < $scope.order.length - 1) {
            $scope.curr = $scope.curr + 1;
        } else {
            $scope.curr = 0;
        }
         
    };
}]);


//FILTERS
initApp.filter('orderObjectBy', function() {
   return function(items, field, reverse) {
       var filtered = [];
       angular.forEach(items, function(item) {
           filtered.push(item);
       });
       filtered.sort(function(a,b) {
          return (a[field] > b[field] ? 1 : -1); 
       });
       if(reverse) filtered.reverse();
       return filtered;
   };
});

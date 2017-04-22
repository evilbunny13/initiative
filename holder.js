//angular.module('myApp', []).controller('namesCtrl', function($scope) {

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


// SERVICES
initApp.service('rollsService', function() {
    var rolls = [
        { name:'Vesker', roll:'' },
        { name:'Cruster', roll:'' },
        { name:'Vorr', roll:'' }
    ];

    return rolls;
});

//CONTROLLERS
initApp.controller('setupController', 'rollsService', function($scope, rollsService) {

    /*$scope.list = [
        { name:'Vesker', roll:'' },
        { name:'Cruster', roll:'' },
        { name:'Vorr', roll:'' }
    ];*/

    $scope.rolls = rollsService;

    $scope.itemsToAdd = [{
        name: '',
        roll: ''
    }];

    $scope.add = function(itemToAdd) {

        var index = $scope.itemsToAdd.indexOf(itemToAdd);

        $scope.itemsToAdd.splice(index, 1);

        $scope.rolls.push(angular.copy(itemToAdd));
    };

    $scope.addNew = function() {

        $scope.itemsToAdd.push({
            name: '',
            roll: ''
        });
    };

    $scope.go = function() {
        document.getElementById("finalOrder").style.display = 'block';
    };

    /*$scope.itemsToAdd = [{
        name: '',
        roll: ''
    }];

    $scope.add = function(itemToAdd) {

        var index = $scope.itemsToAdd.indexOf(itemToAdd);

        $scope.itemsToAdd.splice(index, 1);

        $scope.items.push(angular.copy(itemToAdd));
    };

    $scope.addNew = function() {

        $scope.itemsToAdd.push({
            name: '',
            roll: ''
        });
    };

    $scope.go = function() {
        $scope.order.push({'name':$scope.item.name, 'roll':$scope.item.roll});
        rollService.order = $scope.order;
    };*/
    
});


initApp.controller('playController', 'rollsService', function($scope, rollsService) {

});


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

/*$scope.names = [
        {name:'Cruster',initiative:17,uppic:'',downpic:''},
        {name:'Vorr', initiative:12,uppic:'',downpic:''},
        {name:'Enemies', initiative:5,uppic:'',downpic:''},
    ];*/
//});




/*$scope.order = [
        { name:'Vesker', roll:'' },
        { name:'Cruster', roll:'' },
        { name:'Vorr', roll:'' }
    ];*/



/*$scope.save = function(order) {
        //$scope.order.push({'name':$scope.item.name, 'roll':$scope.item.roll});
        rollService.order = order;
    };*/

<!--<div ng-repeat="itemToAdd in itemsToAdd">
    <input type="text" ng-model="itemToAdd.name" />
        <input type="number" ng-model="itemToAdd.roll" />
            <button class="btn btn-primary" ng-click="addNew()">Add</button>
</div>
<div>
                <button class="btn btn-primary" ng-click="add()">Add new</button>
</div>-->
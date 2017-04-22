angular
	.module('myApp', [])
	.controller('enemiesController', ['$scope', function($scope) {
		
		$scope.skills = [];
		
		$scope.addEnemies = function() {
			$scope.enemies.push(['name': $scope.newEnemy, 'done':false])
			$scope.newEnemy = ''
		}
		
		$scope.deleteEnemy = function(index) {
			$scope.enemies.splice(index,1);
		}
	}])
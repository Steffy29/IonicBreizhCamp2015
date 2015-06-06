angular.module('app')

.controller('ListCtrl', function($scope, Items){
	$scope.items = Items;
	
	$scope.addItem = function() {
		var name = prompt("Que faut-il acheter?");
		if (name) {
			$scope.items.$add({
				"name" : name
			});
		}
	};
});
angular.module('app')

.factory('Items', function($firebaseArray) {
	var itemsRef = new Firebase("https://brilliant-inferno-1525.firebaseio.com/grocery/items");
	return $firebaseArray(itemsRef);
});
angular.module('app')

.factory('Items', function($firebaseArray) {
	var itemsRef = new Firebase("https://brilliant-inferno-1525.firebaseio.com/grocery/items");
	return $firebaseArray(itemsRef);
})
.factory('Camera', ['$q', function($q){
	return {
		getPicture: function(options) {
			var q = $q.defer();

			navigator.camera.getPicture(function(result) {
				q.resolve(result);
			}, function(err) {
				q.reject(err);
			}, options); 

			return q.promise;
		}
		
	};
}]);
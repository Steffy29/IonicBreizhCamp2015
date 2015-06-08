angular.module('app')

.controller('ListCtrl', function($scope, $ionicListDelegate, Items){
	$scope.items = Items;
	
	$scope.addItem = function() {
		var name = prompt('Que faut-il acheter?');
		if (name) {
			$scope.items.$add({
				'name' : name
			});
		}
	};

	$scope.purchaseItem = function(item) {
		var itemRef = new Firebase('https://brilliant-inferno-1525.firebaseio.com/grocery/items/' + item.$id);
		itemRef.child('status').set('purchased');
		$ionicListDelegate.closeOptionButtons();
	};
})
/*.controller('CameraCtrl', function($scope, Camera){
	$scope.getPhoto = function() {
		Camera.getPicture().then(function(imageURI) {
			console.log(imageURI);
			$scope.lastPhoto = imageURI;
		}, function (err) {
			console.err(err);
		}, {
			quality: 75,
			targetWidth: 320,
			targetHeight: 320,
			saveToPhotoAlbum: false
		});
	};
})
*/
.controller('CameraCtrl', function($scope, $ionicPlatform, $cordovaCamera){
	$ionicPlatform.ready(function() {
		var options = {
			quality: 75,
			targetWidth: 320,
			targetHeight: 320,
			saveToPhotoAlbum: false
		};
		$scope.getPhoto = function() {
			$cordovaCamera.getPicture(options).then(function(imageURI) {
				console.log(imageURI);
				$scope.lastPhoto = imageURI;
			}, function(err) {
				console.error(err);
			})
		}
	});
})
.controller('GeolocCtrl', function($cordovaGeolocation){
	
});
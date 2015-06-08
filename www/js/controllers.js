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
.controller('CameraCtrl', function($scope, $ionicPlatform, $cordovaCamera){
	var options = {
		quality: 50,
		targetWidth: 320,
		targetHeight: 320,
		saveToPhotoAlbum: false
	};
	$ionicPlatform.ready(function() {
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
.controller('GeolocCtrl', function($scope, $cordovaGeolocation){
	var posOptions = {
		timeout: 10000,
		enableHightAccuracy: false
	};
	$cordovaGeolocation.getCurrentPosition(posOptions).then(function(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		var latLng = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
			center: latLng,
			zoom: 16,
          	mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

		var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: "Vous êtes ici!"
        });
		$scope.map = map;
	}, function(err) {
		console.error(err);
	})
});
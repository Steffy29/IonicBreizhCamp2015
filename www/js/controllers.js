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
		enableHighAccuracy: false
	};
	$cordovaGeolocation.getCurrentPosition(posOptions).then(function(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		alert("Votre position : " + latitude + ", " + longitude);
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
})
.controller('DeviceCtrl', function($scope, $ionicPlatform, $cordovaDevice){
	$ionicPlatform.ready(function() {
		$scope.model = $cordovaDevice.getModel();
		$scope.platform = $cordovaDevice.getPlatform();
		$scope.version = $cordovaDevice.getVersion();
		$scope.uuid = $cordovaDevice.getUUID();
		$scope.cordova = $cordovaDevice.getCordova();
	});
})
.controller('SmsCtrl', function($scope, $ionicPlatform, $cordovaSms){
	$ionicPlatform.ready(function() {
		$scope.sendSmsAppNative = function(phoneNumber, msg) {
			console.log(phoneNumber + ", " + msg);

			var options = {
				replaceLineBreaks: false,
				android: {
					intent: 'INTENT'
				}
			};
			$cordovaSms.send(phoneNumber, msg, options).then(function() {
				alert('Message sent successfully!');
			}, function(err) {
				console.error(err);
			});
		}
		$scope.sendSmsWithoutApp = function(phoneNumber, msg) {
			console.log(phoneNumber + ", " + msg);

			var options = {
				replaceLineBreaks: false,
				android: {
					intent: ''
				}
			};
			$cordovaSms.send(phoneNumber, msg, options).then(function() {
				alert('Message sent successfully!');
			}, function(err) {
				console.error(err);
			});
		}
	});
});
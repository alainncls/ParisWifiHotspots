'use strict';

angular.module('projetAngularJsApp')
.controller('MainCtrl', function ($scope, $http, $location) {
	var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
	urlJSON += 'dataset=liste_des_sites_des_hotspots_paris_wifi';

	$scope.map = {
		center: {
			latitude: 48.853,
			longitude: 2.35
		},
		zoom: 12,
		options: {
			disableDoubleClickZoom:true,
			draggableCursor:'move',
			draggingCursor:'auto',
			keyboardShortcuts:false,
			streetViewControl:false
		}
	};

	$scope.hotels = [];

	$http.get(urlJSON + '&rows=300&start=0').success( function (data) {
		$scope.hotels = data.records;
		$scope.hotels.forEach( format, $scope.hotels);
	});
	
	function format(element,index){
		this[index] = element.fields;
		this[index].recordid = element.recordid;
		this[index].geometry = element.geometry;
	}

	$scope.goTo = function (id) {
		$location.path('/hotel/' + id);
	};
});
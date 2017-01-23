var myApp = angular.module('myApp' , []);
	
	myApp.controller('AppCtrl' , ['$scope' , '$http' , function($scope , $http){
		console.log("Hello from the controller");

		var refresh = function(){
		$http.get('/contactlist').then(function(response){
			console.log("I got the data i requested");
			console.log(response);
			$scope.contactlist = response.data;
			$scope.contact = {};
		});};  

		refresh();

		$scope.addContact = function(){
			console.log($scope.contact);
			$http.post('/contactlist' , $scope.contact).then(function(response){
				console.log(response);
				refresh();
			});
		};

		$scope.remove = function(id){
			console.log('remove..', id);
			$http.delete('/contactlist/' + id).then(function(response){
				refresh();
			});
		};

		$scope.edit = function(id){
			console.log('edit..',id);
			$http.get('/contactlist/' + id).then(function(response){
				$scope.contact=response.data;

			}); 
		};

		$scope.update = function(id){
			console.log('update..' , id);
			$http.put('/contactlist/' + id ,$scope.contact).then(function(response){
				refresh();
			});
		};

		$scope.deselect = function(){
			$scope.contact={};
		};

	}]); 
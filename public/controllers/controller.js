
var app = angular.module('myApp', ["ngRoute"]);

app.controller('AppCtrl', function($scope, $http, $sce) {
		
		//To get the raw data
		$scope.$sce = $sce;

		$http.get('/usecases').success(function(response){
			$scope.cases = response;
		});
	
		$scope.addUseCase = function() {
			$http.post('/usecases', $scope.case).success(function(response){
			});
		};

		//Triggers when a usecase is being clicked
		$scope.showMilestone = function(milestone, id){
			
			//Usecases created through UI have undefined milestones
			if(milestone == undefined){
				return false;
			}
			//Usecases from the db that have defined milestones object that is empty
			else if(milestone.length == 0){
				return false;
			}
			//Uscases that have milestones
			else{

				var dates = [];
				var i = 0; 

				//Get data from milestones
				for(let n of milestone) {
					i++
				    dates.push({id: i, content: n.name_de, start: n.start_date});
				}

				var items = new vis.DataSet(dates);

				// Configuration for the Timeline
				var options = {
				  width: '100%',
				  height: '100%',

				};

				//Quick & dirty - Needs refactoring: This code should be in a new directive 
				//preferably in a seperate file.

				var card = document.getElementById(id);

				//Remove the usecase 
				while (card.firstChild) {
				    card.removeChild(card.firstChild);
				}

				//Display the timeline
				var timeFrame = document.createElement('div');
				timeFrame.setAttribute("id", id+"vis");
				card.appendChild(timeFrame);


				var container = document.getElementById(id+'vis');

				// Create a Timeline
				var timeline = new vis.Timeline(container, items, options);

			}

		}

});


app.config(function($routeProvider){
	
	$routeProvider
		.when('/', {
			templateUrl: "listCases.html",
			
		})
		.when('/listCases', {
			templateUrl: "listCases.html",
			
		})
		.when('/addCases', {
			templateUrl: "addCases.html",
			
		});		

}); 

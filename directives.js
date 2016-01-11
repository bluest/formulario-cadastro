(function(){
	var app = angular.module("directives", []);

	app.directive("formulario", function(){
		return{
			restrict: 'E',
			templateUrl: 'formulario.html'
		};
	});
})();
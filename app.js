(function(){
	var app = angular.module("cadastro", ['directives']);

	app.controller("ValidationController", function($scope){
		$scope.originForm = {};

		$scope.submitForm = function(isValid){
			if(isValid){
				alert('Formulário enviado com sucesso');
			}
			else{
				alert('Por favor, preencha o formulário corretamente');
			}
		};

		$scope.resetForm = function(){
			$scope.aluno = angular.copy($scope.originForm);
			$scope.cadastro.$setPristine();
		}
	});
})();
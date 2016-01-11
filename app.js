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

	    $.fn.maskbrphone = function() {

	        var plugin = this;

	        var init = function() {

	            return plugin.each( function() {
	                $(this).val(applyMask($(this).val()));

	                $(this).keyup(function() {
	                    $(this).val(applyMask($(this).val()));
	                });
	            });
	        };

	        var applyMask = function(input) {

	            var fone = input
	                    .replace(/\D/g, '') // Remove tudo o que não for dígito
	                    .substring(0, 11); // Limita em 11 caracteres;

	            var maskedPhone;

	            if (fone.length <= 10) {
	                // Coloca hífen entre o quarto e o quinto dígito
	                maskedPhone = fone.replace(/(\d{1,2})(\d{1,4})(\d{1,4})/, '($1) $2-$3');
	            } else {
	                // Coloca hífen entre o quinto e o sexto dígito
	                maskedPhone = fone.replace(/(\d{1,2})(\d{1,5})(\d{1,4})/, '($1) $2-$3');
	            }

	            return maskedPhone;
	        };

	        init();

	    };
	    
	}); //fim ValidationController

})();
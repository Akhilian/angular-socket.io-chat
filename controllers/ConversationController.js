'use strict';

angular
	.module('Mailbox.ConversationManager', ['ngRoute'])
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/create', {
					templateUrl: 'views/manager.html',
					controller: 'ConversationManagerCtrl'
				})
			}
		])
	.controller('ConversationManagerCtrl',function($scope) {
		$scope.text = "Creation d'une conversation ...";
	});
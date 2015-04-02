'use strict';

angular
	.module('Mailbox.ChatManager', ['ngRoute'])
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/:id', {
					templateUrl: 'views/chat.html',
					controller: 'ChatCtrl'
				})
			}
		])
	.controller('ChatCtrl',function($scope, $routeParams, mySocket) {
		$scope.text = "Ici on affiche le texte ..." + $routeParams.id;

		$scope.create = function(message) {
			message.conversationID = $routeParams.id;
			mySocket.emit('send', message);
		}
	});
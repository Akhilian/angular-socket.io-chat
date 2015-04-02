'use strict';

// Je crée une application Mailbox
var mailbox = angular.module('Mailbox', [
	'ngRoute',
	'btford.socket-io',
	'Mailbox.ConversationManager',
	'Mailbox.ChatManager'
]);

mailbox.factory('mySocket', function (socketFactory) {
	var myIoSocket = io.connect('http://localhost:3000');

  	return socketFactory({ ioSocket: myIoSocket });
});

mailbox.config(function($routeProvider) {
 	$routeProvider.otherwise({redirectTo: '/chat'});
});

mailbox.controller('MainCtrl', function($scope, mySocket) {
	$scope.common = "Common message";
	$scope.conversations = [{id:1, sender: 'Adrien', nbMessage: 0},{id:3 ,sender: 'Geneanet', nbMessage: 0}];

	$scope.conversations.forEach(function(element) {
		mySocket.emit('subscribe', element.id);
	});

	mySocket.on('message', function(data) {
		console.log(data);
	});
});
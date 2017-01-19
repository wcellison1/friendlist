var $friends = $('#friends');
var $name = $('#name');
var $occupation =$('#occupation');
var $age = $('#age');

var friendTemplate = "" +
	"<li>" +
	"<p><stong>Name:</strong>{{name}}</p>" +
	"<p><stong>Occupation:</strong>{{occupation}}</p>" +
	"<p><stong>Age:</strong>{{age}}</p>" +
	"</li>";

//add a friend 
function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
}



$(document).ready(function(){
	//alert("jquery is working");
//GET data request
$.ajax({
	type : 'GET',
	url : 'http://rest.learncode.academy/api/learncode/friends',

success: function(friends){
	$.each(friends, function(i, friend){
		addFriend(friend);
	});
},
error : function(){
	alert('Error loading friends');
}

});
//POST TO ADD FRIEND
$('#add-friend').on('click', function(){
	var friend = {
		name: $name.val(),
		occupation: $occupation.val(),
		age: $age.val(),
	};

//ajax post function 
$.ajax({
	type : 'POST',
	url : 'http://rest.learncode.academy/api/learncode/friends',
	data : friend,

success: function(newFriend){
	//$.each(newFriends, function(i, Friend){
		addFriend(newFriend);
	},
error: function(){
	alert('Error');
}
});
});
});
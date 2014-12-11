define(['zepto', 'underscore','backbone'], function($, _, Backbone ){
	var object = {};
	_.extend(object, Backbone.Events);
	object.on("alert", function(msg) {
	  alert("Triggered " + msg);
	});
	var index = {
		init: function(){			
			object.trigger("alert", "an event");
		}
	}
	return index;
});
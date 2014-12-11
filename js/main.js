require.config({
	paths: {
		'zepto': '/requirejs/lib/zepto.min',
		'underscore': '/requirejs/lib/underscore',
		'backbone': '/requirejs/lib/backbone'
	},
	shim: {
		'zepto': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone':{
			deps: ['underscore'],
			exports: 'Backbone'
		}
	}
});

require(['index'], function(index){
	index.init();
});

app.directive('showTime', function () {
	return {
		restrict: 'E',
		template: '<div> The current time is {{time | date: format}}</div> <div> The gmt time is {{ gmtTime }}</div>',
		scope: {
			format: '='
		},
		link: function (scope, element, attrs) {
			var currentTime = new Date();
			
			element.css({
				fontWeight: 'bold',
				background: 'red',
				color: 'pink'
			})
			
			element.on('mousedown', function(){
				scope.time = new Date();
				scope.$apply();
			})
			
			scope.time = currentTime;
			scope.gmtTime = currentTime.toGMTString();

		}
	}
});
app.component("myBlock", {
	templateUrl: "/app/block/my-block.component.html",

	bindings: {
		block: '<',
		onDelete: '&'
	},

	controller: function($timeout) {
		var ctrl = this;

		var timerPromise,
			clickDelay = 300,
			prevent = false;

		ctrl.changeState = function(item) {
			timerPromise = $timeout(function() {
				if (!prevent)
					item.selected = !item.selected;
				else 
					prevent = false;
			}, clickDelay);
			
		};

		ctrl.changeColor = function(item) {
			$timeout.cancel(timerPromise);
			prevent = true;
			if (item.complicated) {
				item.color = item.color == "red" ? "green": "red";
			}
		};

		ctrl.delete = function(event) {
			event.stopPropagation();
			if (ctrl.block.complicated && !confirm("Вы уверены, что хотите удалить этот блок?"))
				return;

			ctrl.onDelete({block: ctrl.block});
		};
	}
});
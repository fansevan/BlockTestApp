app.component("myStatus", {
	templateUrl: "/app/status/my-status.component.html",

	bindings: {
		blocks: "<"
	},

	controller: function() {
		var ctrl = this;

		ctrl.getSelectedCount = function(color) {
			var redItems = 0;
			var greenItems = 0;
			var all = 0;

			ctrl.blocks.forEach(function(item) {
				if (item.selected) {
					if (item.color == 'red')
						redItems++;
					if (item.color == 'green')
						greenItems++;
					all++;
				}
			});

			ctrl.redCount = redItems;
			ctrl.greenCount = greenItems;

			return all;
		};
	}
});
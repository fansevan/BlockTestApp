app.component("myApp", {
	templateUrl: "/app/my-app.component.html",

	controller: function() {
		var ctrl = this;

	    ctrl.blocks = [
			{
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quia iste, sed officiis suscipit quaerat aliquam, laudantium tempora in architecto iure sunt. Accusamus et tempore error ducimus consequuntur tenetur beatae.",
				complicated: false,
				selected: false
			},
			{
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam maiores eveniet odio inventore, distinctio aliquam, libero, dolorum hic consequuntur nulla blanditiis sapiente accusantium officiis voluptate. Itaque consectetur tempora ipsam quis!",
				complicated: true,
				selected: false,
				color: "red"
			}
		];

		ctrl.addBlock = function(block) {
			ctrl.blocks.push(block);
		};

		ctrl.deleteBlock = function(block) {
		    var blockIndex = ctrl.blocks.indexOf(block);
		    if (blockIndex != -1) {
		      ctrl.blocks.splice(blockIndex, 1);
		    }
		};
	}
});
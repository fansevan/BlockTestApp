app.component("myControls", {
	templateUrl: "/app/controls/my-controls.component.html",

	bindings: {
		onAdd: "&"
	},

	controller: function() {
		var ctrl = this;

		ctrl.isComplicated = "false";

		ctrl.add = function() {
			var complicated = ctrl.isComplicated == "true";

			var newBlock = {
				text: makeRandomString(randomOptions),
				complicated: complicated,
				selected: false,
			};

			if (complicated)
				newBlock.color = "red";

			ctrl.onAdd({block: newBlock});
		};

		ctrl.deleteBlock = function(block) {
		    var blockIndex = ctrl.blocks.indexOf(block);
		    if (blockIndex != -1) {
		      ctrl.blocks.splice(blockIndex, 1);
		    }
		};

		var randomSource = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя";

		var randomOptions = {
			minPos: 0,
			maxPos: randomSource.length - 1,
			minNewStringLength: 200,
			maxNewStringLength: 300,
			minWordLength: 1,
			maxWordLength: 20,
		};

		function getRandomInteger(min, max) {
		    return Math.floor(min + Math.random() * (max + 1 - min));
		}

		function makeRandomString(options) {
			var sumString = "";
			var stringLength = getRandomInteger(options.minNewStringLength, options.maxNewStringLength);
			var min = options.minPos;
			var max = options.maxPos;
			var minWord = options.minWordLength;
			var maxWord = options.maxWordLength;
			var spaceInd = getRandomInteger(minWord, maxWord)

			for (var i = 0; i < stringLength; i++) {
				sumString += randomSource[getRandomInteger(min, max)];
				if (i == spaceInd) {
					sumString += " ";
					spaceInd = getRandomInteger(minWord, maxWord) + i;
					stringLength--;
				}
			}

			return sumString;
		}
	}
});
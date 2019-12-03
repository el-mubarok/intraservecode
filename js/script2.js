// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			// across
				{
					clue: "wajar dan pantas.",
					answer: "layak",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "bebas dari bahaya.",
					answer: "aman",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 6
				},

			// down
				{
					clue: "tidak segar lagi (tumbuhan bunga).",
					answer: "layu",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "antonim dari kata baru.",
					answer: "lama",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 3
				},
				{
					clue: "sapaan kepada saudara yang lebih tua.",
					answer: "kak",
					position: 5,
					orientation: "down",
					startx: 5,
					starty: 3
				},
				{
					clue: "",
					answer: "",
					position: 6,
					orientation: "down",
					startx: 1,
					starty: 1
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

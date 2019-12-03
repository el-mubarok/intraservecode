// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			// across
				{
					clue: "satu",
					answer: "musi",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "dua",
					answer: "jambi",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 7
				},

			// down
				{
					clue: "tiga",
					answer: "seguntang",
					position: 3,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "empat",
					answer: "minanga",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 6
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

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
					answer: "militer",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "dua",
					answer: "emporium",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 15
				},

			// down
				{
					clue: "tiga",
					answer: "cholamandala",
					position: 3,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "empat",
					answer: "rebut",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 15
				},
				{
					clue: "lima",
					answer: "runtuh",
					position: 5,
					orientation: "down",
					startx: 7,
					starty: 11
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

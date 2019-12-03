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
					answer: "merangin",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 8
				},
				{
					clue: "dua",
					answer: "buddha",
					position: 2,
					orientation: "across",
					startx: 3,
					starty: 10
				},

			// down
				{
					clue: "tiga",
					answer: "telagabatu",
					position: 3,
					orientation: "down",
					startx: 4,
					starty: 1
				},
				{
					clue: "empat",
					answer: "nalanda",
					position: 4,
					orientation: "down",
					startx: 8,
					starty: 4
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

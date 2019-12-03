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
					answer: "ibukota",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "dua",
					answer: "riau",
					position: 2,
					orientation: "across",
					startx: 5,
					starty: 6
				},

			// down
				{
					clue: "tiga",
					answer: "kedukanbukit",
					position: 3,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "empat",
					answer: "palembang",
					position: 4,
					orientation: "down",
					startx: 7,
					starty: 5
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

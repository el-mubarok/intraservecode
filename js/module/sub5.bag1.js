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
					answer: "politik",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "dua",
					answer: "vanua",
					position: 2,
					orientation: "across",
					startx: 4,
					starty: 2
				},

			// down
				{
					clue: "tiga",
					answer: "pemerintah",
					position: 3,
					orientation: "down",
					startx: 1,
					starty: 7
				},
				{
					clue: "empat",
					answer: "balaputradewa",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 1
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

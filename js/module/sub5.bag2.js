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
					answer: "kadatuan",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 6
				},

			// down
				{
					clue: "dua",
					answer: "mandala",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 5
				},
				{
					clue: "tiga",
					answer: "otoritas",
					position: 3,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "empat",
					answer: "wewenang",
					position: 4,
					orientation: "down",
					startx: 8,
					starty: 2
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

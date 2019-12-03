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
					answer: "operasi",
					position: 1,
					orientation: "across",
					startx: 2,
					starty: 2
				},
				{
					clue: "dua",
					answer: "wilayah",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 5
				},

			// down
				{
					clue: "tiga",
					answer: "perdagangan",
					position: 3,
					orientation: "down",
					startx: 4,
					starty: 1
				},
				{
					clue: "empat",
					answer: "armada",
					position: 4,
					orientation: "down",
					startx: 6,
					starty: 2
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

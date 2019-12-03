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
					answer: "rempah",
					position: 1,
					orientation: "across",
					startx: 3,
					starty: 2
				},
				{
					clue: "dua",
					answer: "kapal",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "tiga",
					answer: "maritim",
					position: 3,
					orientation: "across",
					startx: 2,
					starty: 7
				},

			// down
				{
					clue: "empat",
					answer: "pelayaran",
					position: 4,
					orientation: "down",
					startx: 4,
					starty: 1
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

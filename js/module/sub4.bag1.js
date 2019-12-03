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
					answer: "biaya",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "dua",
					answer: "barang",
					position: 2,
					orientation: "across",
					startx: 2,
					starty: 10
				},

			// down
				{
					clue: "tiga",
					answer: "ekonomi",
					position: 3,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "empat",
					answer: "kedaulatan",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 4
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

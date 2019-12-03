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
					answer: "sanskerta",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					clue: "dua",
					answer: "tang",
					position: 2,
					orientation: "across",
					startx: 6,
					starty: 11
				},

			// down
				{
					clue: "tiga",
					answer: "kedukanbukit",
					position: 3,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "empat",
					answer: "sriwijaya",
					position: 4,
					orientation: "down",
					startx: 7,
					starty: 5
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

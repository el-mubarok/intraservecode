// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			// across
				{
					clue: "empat",
					answer: "pallawa",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					clue: "empat",
					answer: "palembang",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 2
				},
				{
					clue: "empat",
					answer: "dapuntahyang",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 9
				},
				{
					clue: "empat",
					answer: "sriwijaya",
					position: 1,
					orientation: "across",
					startx: 3,
					starty: 11
				},

			// down
				{
					clue: "satu",
					answer: "kedukanbukit",
					position: 1,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "satu",
					answer: "itsing",
					position: 1,
					orientation: "down",
					startx: 4,
					starty: 11
				},
				{
					clue: "satu",
					answer: "sanskerta",
					position: 1,
					orientation: "down",
					startx: 10,
					starty: 1
				},
				{
					clue: "satu",
					answer: "tang",
					position: 1,
					orientation: "down",
					startx: 15,
					starty: 6
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

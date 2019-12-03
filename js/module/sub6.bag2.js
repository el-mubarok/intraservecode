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
					answer: "kotakapur",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "dua",
					answer: "ligor",
					position: 2,
					orientation: "across",
					startx: 5,
					starty: 13
				},

			// down
				{
					clue: "tiga",
					answer: "muaratakus",
					position: 3,
					orientation: "down",
					startx: 4,
					starty: 1
				},
				{
					clue: "empat",
					answer: "srikserta",
					position: 4,
					orientation: "down",
					startx: 9,
					starty: 6
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

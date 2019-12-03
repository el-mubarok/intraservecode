// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			// across
			 	{
					clue: "Sebutan untuk orang barat atau turis",
					answer: "bule",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "Jalan kecil yang biasanya hanya muat kendaraan roda dua",
					answer: "gang",
					position: 3,
					orientation: "across",
					startx: 3,
					starty: 3
				},
				{
					clue: "Baju perempuan bagain bawah (bawahan)",
					answer: "rok",
					position: 5,
					orientation: "across",
					startx: 6,
					starty: 5
				},

			// down
				{
					clue: "Tempat nongkrong yang menyajikan kopi dan makanan ringan",
					answer: "kafe",
					position: 2,
					orientation: "down",
					startx: 4,
					starty: 2
				},
				{
					clue: "Mati dalam pertempuran",
					answer: "gugur",
					position: 4,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "",
					answer: "",
					position: 7,
					orientation: "down",
					startx: 1,
					starty: 1
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

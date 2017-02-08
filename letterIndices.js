function letterIndices(string){
	var breakdown = {};

	for (currentLetterIndex in string){
		var letter = string[currentLetterIndex];
		if (!breakdown[letter]){
			breakdown[letter] = [];
		}
		breakdown[letter].push(currentLetterIndex);
	}
	return breakdown;
}

var input = String(process.argv.slice(2));
var noComma = input.replace(/\,/g, '');

if (!noComma) {
  console.log("Please provide input following your command.");
} else {
  console.log(letterIndices(noComma));
}

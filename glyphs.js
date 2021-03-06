var glyphs = {
	'A': 'ɅȺⱭⱯⱰѦ',
	'B': 'Ƀß',
	'C': 'ȻƆ꒝꒟',
	'D': 'ÐƉƋ',
	'E': 'ƎɆƐƏЗ',
	'F': 'ƑϜ',
	'G': 'ƓǤ',
	'H': 'ĦⱧǶ',
	'I': 'ỊİƖ',
	'J': 'ɈЈ',
	'K': 'ƘӃ',
	'L': 'ȽⱠⱢГ',
	'M': 'ⱮƜ',
	'N': 'ŊƝȠИ',
	'O': 'ƟØʘꙨꙪ꒨꒩',
	'P': 'ⱣǷ',
	'Q': 'ɊϘ',
	'R': 'ɌⱤ',
	'S': 'ƧʃꚂ',
	'T': 'ƬƮŦȾ',
	'U': 'ɄЦ',
	'V': 'ƲѴ꒤꒥',
	'W': 'ⱲѠ',
	'X': 'Ж꒼꒽ㄨ',
	'Y': 'ɎƳƔУ',
	'Z': 'ⱿⱫ',
	'a': 'ⱥɑɐɒᴀѧ',
	'b': 'Ƃƅʙɓᴃ',
	'c': 'ɔɕᴄᴒ',
	'd': 'đƌȡɖᴅᴆ꒬꒯',
	'e': 'ɇɛǝⱸⱻⱷɜɘɚᴇ',
	'f': 'ƒſɟϝ',
	'g': 'ɠɢ',
	'h': 'ħƕɦħɧɥ',
	'i': 'ıịɪɨᴉ',
	'j': 'ȷɉʝ',
	'k': 'ƙĸʞ',
	'l': 'ƚȴʟɬɭɫ',
	'm': 'ɱɯᴍᴟʍ',
	'n': 'ŋɲƞȵɴ',
	'o': 'ɵøⱺᴑꙩꙫ',
	'p': 'ƥᴘ',
	'q': 'ɋϙ',
	'r': 'ɍⱹɹʀʁɾɽᴚ',
	's': 'ƨᴤꚃς',
	't': 'ƭʈŧⱦȶʈᴛⱡ',
	'u': 'ʉʊᴝ',
	'v': 'ⱱⱴʌʋѵ',
	'w': 'ⱳω',
	'x': 'ɤχж',
	'y': 'ƴɏɣʎʏλγ',
	'z': 'ƶɀⱬʑ',
	'?': 'Ɂɂʡʕ¿',
	'!': '¡',
	':': 'ː',
	"'": 'ˑ',
	'.': '',
	',': ''
}

function mutate(s) {
	var o = '';
	for (var i = 0; i < s.length; ++i) {
		var c = s.charAt(i);
		if (glyphs[c] && glyphs[c].length) {
			o += glyphs[c].charAt(Math.floor(Math.random() * glyphs[c].length));
		} else {
			o += c;
		}
	}
	return o;
}

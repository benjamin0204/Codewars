const decode = (morseCode) => {
  let morse = "";
  morseCode
    .trim()
    .toLowerCase()
    .split(" ")
    .map((char) => {
      switch (char) {
        case ".-":
          morse += "a";
          break;
        case "-...":
          morse += "b";
          break;
        case "-.-.":
          morse += "c";
          break;
        case "-..":
          morse += "d";
          break;
        case ".":
          morse += "e";
          break;
        case "..-.":
          morse += "f";
          break;
        case "--.":
          morse += "g";
          break;
        case "....":
          morse += "h";
          break;
        case "..":
          morse += "i";
          break;
        case ".---":
          morse += "j";
          break;
        case "-.-":
          morse += "k";
          break;
        case ".-..":
          morse += "l";
          break;
        case "--":
          morse += "m";
          break;
        case "-.":
          morse += "n";
          break;
        case "---":
          morse += "o";
          break;
        case ".--.":
          morse += "p";
          break;
        case "--.-":
          morse += "q";
          break;
        case ".-.":
          morse += "r";
          break;
        case "...":
          morse += "s";
          break;
        case "-":
          morse += "t";
          break;
        case "..-":
          morse += "u";
          break;
        case "...-":
          morse += "v";
          break;
        case ".--":
          morse += "w";
          break;
        case "-..-":
          morse += "x";
          break;
        case "-.--":
          morse += "y";
          break;
        case "--..":
          morse += "z";
          break;
        case ".----":
          morse += "1";
          break;
        case "..---":
          morse += "2";
          break;
        case "...--":
          morse += "3";
          break;
        case "....-":
          morse += "4";
          break;
        case ".....":
          morse += "5";
          break;
        case "-....":
          morse += "6";
          break;
        case "--...":
          morse += "7";
          break;
        case "---..":
          morse += "8";
          break;
        case "----.":
          morse += "9";
          break;
        case "-----":
          morse += "0";
          break;
        case ".-.-.-":
          morse += ".";
          break;
        case "--..--":
          morse += ",";
          break;
        case "..--..":
          morse += "?";
          break;
        case "-.-.--":
          morse += "!";
          break;
        case "---...":
          morse += ":";
          break;
        case ".-..-.":
          morse += `"`;
          break;
        case ".----.":
          morse += "`";
          break;
        case "-...-":
          morse += "=";
          break;
        case "...---...":
          morse += "SOS";
          break;
      }
    });
  return morse.toUpperCase();
};

decodeMorse = function (morseCode) {
  let sentance = "";
  const words = morseCode.trim().toLowerCase().split("   ");

  console.log(words);

  words.map((word) => {
    sentance += decode(word) + " ";
  });

  return sentance.trim();
};

console.log(
  decodeMorse(
    "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
  )
);

function pigIt(str) {
  //Code here
  return (
    str
      .split(" ")
      .map((word) => {
        let firstChar = word.split("").shift();

        _word = word.split("").slice(1, word.length);
        _word.push(firstChar);
        return _word.join("");
      })
      .join("ay ") + "ay"
  );
}

console.log(pigIt("pig latin"));

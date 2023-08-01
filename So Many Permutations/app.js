function permutations(string) {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  }
  if (string.length < 2) {
    return new Array(string);
  }

  let answers = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) continue;

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of permutations(remainingChars)) {
      answers.push(char + permutation);
    }
  }
  return answers;
}

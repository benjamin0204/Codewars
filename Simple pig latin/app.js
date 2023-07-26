function driver(data) {
  let driverNumber = "";

  // 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
  data[2].length >= 5
    ? (driverNumber += data[2].slice(0, 5))
    : (driverNumber += data[2].padEnd(5, 9));

  // 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
  driverNumber += data[3].slice(data[3].length - 2, data[3].length - 1);

  // 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
  let monthDigits = data[3].slice(3, data[3].length - 5); // grab month string from data
  monthAsNumber = new Date(Date.parse(monthDigits + " 1, 2012")).getMonth() + 1; // Convert date string to number
  monthDigits = monthAsNumber.toString().padStart(2, 0); // add 0 to start if number is single digit

  // Adding 5 to the first digit if female
  if (data[4] === "F") {
    monthDigits = monthDigits.split("");
    monthDigits[0] = (Number(monthDigits[0]) + 5).toString();
    monthDigits = monthDigits.join("");
  }

  driverNumber += monthDigits;

  // 9–10: The date within the month of birth
  driverNumber += data[3].slice(data[3], 2);

  // 11: The year digit from the year of birth (e.g. for 1987 it would be 7)
  driverNumber += data[3].slice(data[3].length - 1, data[3].length);

  // 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
  driverNumber += data[0].slice(0, 1);
  driverNumber += data[1].length > 0 ? data[1].slice(0, 1) : "9";

  // 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
  driverNumber += "9";

  // 15–16: Two computer check digits. We will always use "AA"
  driverNumber += "AA";

  return driverNumber.toUpperCase();
}

// data = ["John", "James", "Smith", "01-Jan-2000", "M"];
data = ["Andrew", "Robert", "Lee", "02-September-1981", "M"];
// data = ["Johanna", "", "Gibbs", "13-Dec-1981", "F"];
console.log(driver(data));
// GIBBS 8 62 131J99AA // Expected
// GIBBS 8 62 131J99AA // ACtual

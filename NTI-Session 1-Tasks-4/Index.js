function isValid(text) {
  // This array will act as our "pile" (stack) of open brackets
  let pile = [];
 
  // Go through the text one character at a time
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
 
    // If it's an OPEN bracket, add it to the pile
    if (char === "(" || char === "{" || char === "[") {
      pile.push(char);
    }
 
    // If it's a CLOSE bracket, check the top of the pile
    else if (char === ")" || char === "}" || char === "]") {
      // Take the last item off the pile (the most recent open bracket)
      let lastOpenBracket = pile[pile.length - 1];
      pile.pop(); // remove it from the pile
 
      // Check if it matches the closing bracket we found
      if (char === ")" && lastOpenBracket !== "(") {
        return false;
      }
      if (char === "}" && lastOpenBracket !== "{") {
        return false;
      }
      if (char === "]" && lastOpenBracket !== "[") {
        return false;
      }
    }
  }
 
  // If the pile is empty, every bracket was matched correctly
  if (pile.length === 0) {
    return true;
  } else {
    return false;
  }
}
 
// ---------- Let's test it ----------
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true
console.log(isValid(""));         // true
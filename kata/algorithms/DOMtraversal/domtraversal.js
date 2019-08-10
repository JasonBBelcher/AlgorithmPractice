// Walk the DOM and find number of occurences of a word or phrase mentioned on a web page.

function search(wordToMatch) {
  // drop this function in the chrome console and watch the debugger run.
  let walkedDOM = [];
  const results = [];
  function walk(node, callback) {
    callback(node);

    node = node.firstChild;
    // base case
    while (node != null) {
      // if base case is not reached then we recurse
      walk(node, callback);

      node = node.nextSibling;
    }
    return node;
  }

  walk(document.body, node => {
    // set a break point here to see how it recurses and pay special attention to the call stack
    if (node.nodeType === 3) {
      walkedDOM.push(node.nodeValue);
    }
  });

  // RECURSION DONE
  const wordRegex = wordToMatch ? new RegExp(wordToMatch, "ig") : false;
  /*
   we simply iterate over the array,
  lowercase each fragment, by this time
   all recursion is done do a simple regex
   match against it and if a fragment returns
   true we push to a results array
  */

  walkedDOM.forEach(textFragment => {
    textFragment = textFragment.toLowerCase();
    if (textFragment.match(wordRegex)) {
      results.push(wordRegex.exec(textFragment));
    }
  });

  /* return number of matches we got on the webpage
   here we are using a computed key name based on
  the original word we passed in at the beginning.
  */

  return { [wordToMatch]: results.length };
}

console.log(search("Spiderman"));

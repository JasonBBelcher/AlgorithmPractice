// Walk the DOM and find number of occurences of a word or phrase mentioned on a web page.

function walk(node, callback) {
  if (callback(node) === false) return false;
  node = node.firstChild;
  while (node != null) {
    if (walk(node, callback) === false) return false;
    node = node.nextSibling;
  }
}

let walkedDOM = [];

walk(document.body, node => {
  if (node.nodeType === 3) {
    walkedDOM.push(node.nodeValue);
  }
});

function search(arr, wordToMatch) {
  const results = [];
  const wordRegex = wordToMatch ? new RegExp(wordToMatch, "ig") : false;
  if (wordRegex) {
    arr.forEach(textFragment => {
      textFragment = textFragment.toLowerCase();
      if (textFragment.match(wordRegex)) {
        results.push(wordRegex.exec(textFragment));
      }
    });

    return { [wordToMatch]: results.length };
  } else {
    return console.error(
      "Please supply some text to the second parameter to search"
    );
  }
}

console.log(search(walkedDOM, "1"));

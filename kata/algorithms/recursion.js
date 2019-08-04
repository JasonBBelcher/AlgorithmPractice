// Simple recursion example that walks down an object tree.

const testObj = {
  value: {
    node: {
      value: {
        node: {
          value: {
            node: {
              value: {
                node: {
                  value: {
                    node: {
                      value: {
                        node: {
                          value: {
                            node: {
                              value: {
                                node: {
                                  value: function() {
                                    return "You found me!";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

function walkitDown(node) {
  let value = node.value;
  if (typeof value === "object" && value !== null) {
    walkitDown(value.node);
  } else if (typeof value === "function") {
    console.log(value());
    return;
  }
}

console.log(walkitDown(testObj));

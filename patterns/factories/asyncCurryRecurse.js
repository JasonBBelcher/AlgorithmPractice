// Async currying factory to get all paginated results
const fetch = require("node-fetch");

function searchAndGetPaginated(baseUrl) {
  return function(resource, searchQuery) {
    return new Promise((resolve, reject) => {
      search(`${baseUrl}/${resource}/${searchQuery ? searchQuery : ""}`);
      const allPages = [];
      function search(url) {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data.results)) {
              data.results.forEach(object => {
                allPages.push(object);
              });

              getAllPages(data);
            }
          })
          .catch(reject);

        function getAllPages(data) {
          if (data.next) {
            search(data.next);
          } else if (!data.next) {
            resolve(allPages);
          }
        }
      }
    });
  };
}

const swapi = searchAndGetPaginated(`http://swapi.co/api`);
swapi("people").then(results => {
  const females = results.filter(obj => obj.gender === "female");
  const regex = new RegExp("Leia" + ".*");
  const Leia = females.filter(female => female.name.match(regex));

  console.log(Leia);
});

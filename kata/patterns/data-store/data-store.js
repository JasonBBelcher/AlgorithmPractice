// create a dataStore lib in JavaScript using a factory

function dataStore(dataset, interface) {
  /* ***********************
  PRIVATE FIELDS & METHODS
  **************************/

  // create a random id for lookup
  function createId() {
    return Math.random()
      .toString(10)
      .substr(2);
  }

  // enforce the shape of the data when creating records
  function dataInterface(props, record) {
    if (typeof record === "object" && record !== null) {
      let bool = true;

      props.forEach(prop => {
        if (!record.hasOwnProperty(prop)) {
          bool = false;
        }
      });
      if (!bool) {
        console.error("data must conform to this interface");
      }
      return bool;
    }
  }

  // allow only properties to be updated that exist on the interface
  // used on updates so that partial updates (patches) can be made

  function conformToInterface(props, record) {
    if (typeof record === "object" && record !== null) {
      let checkedRecord = {};
      const keysInRecord = Object.keys(record);
      props.forEach(prop => {
        console.log(prop);
        if (keysInRecord.includes(prop)) {
          checkedRecord[prop] = record[prop];
        }
      });

      return checkedRecord;
    }
  }

  // sorting

  let sortDirection = "ASC";
  let sortProp = interface[0];

  function setSortProp(prop) {
    sortProp = prop;
  }

  function setSortDirection(direction) {
    if (direction === "DESC") {
      sortDirection = direction;
      console.log("direction set to :", direction);
    }
    if (direction === "ASC") {
      sortDirection = direction;
      console.log("direction set to :", direction);
    } else {
      console.error("direction should be DESC or ASC");
    }
  }

  function sortDataset() {
    if (sortDirection === "ASC") {
      dataset.sort((a, b) => {
        if (a[sortProp] < b[sortProp]) {
          return -1;
        }

        if (a[sortProp] > b[sortProp]) {
          return 1;
        }
      });
    }
    if (sortDirection === "DESC") {
      dataset.sort((a, b) => {
        if (a[sortProp] > b[sortProp]) {
          return -1;
        }

        if (a[sortProp] < b[sortProp]) {
          return 1;
        }
      });
    }
    return dataset;
  }
  // ************************* END PRIVATE STUFF

  /****************************
        CRUD OPERATIONS
  *****************************/

  // CREATE

  function createRecord(record) {
    record.id = createId();
    if (dataInterface(interface, record)) {
      dataset.push(record);
      return dataset[dataset.length - 1];
    } else {
      return { error: "error creating record" };
    }
  }

  // READ

  function findRecordById(id) {
    let foundRecord = null;
    if (id) {
      dataset.forEach(r => {
        if (r.id === id) {
          foundRecord = r;
        }
      });

      return foundRecord;
    } else {
      return { error: "please provide an id." };
    }
  }
  // This method can change the shape of the dataset.
  // useful for reporting on only the properties you want to see
  function getRecordsByPropertyFilter(propArgs) {
    let foundRecords = [];
    let transformerObject = {};
    // check if it exists as an argument at all
    if (propArgs) {
      // check if it is an array
      if (Array.isArray(propArgs)) {
        dataset.forEach((r, i) => {
          Object.keys(r).forEach(key => {
            if (propArgs[i] === key) transformerObject[key] = r[key];
          });
          foundRecords.push(transformerObject);
        });

        return foundRecords;
        // just use a string passed in as argument
      } else {
        dataset.forEach(r => {
          foundRecords.push({ [propArgs]: r[propArgs] });
        });
        return foundRecords;
      }
    } else {
      return {
        error: "no arguments supplied. Please provide one or more properties."
      };
    }
  }

  function findRecordsByName(prop, name) {
    const foundRecords = [];
    if (prop && name) {
      dataset.forEach(r => {
        if (r[prop] === name) {
          foundRecords.push(r);
        }
      });
      return foundRecords;
    }
  }

  // simply returns the dataset
  // useful for the view layer

  function getAllRecords() {
    return dataset;
  }

  // Print records with

  function printAllRecords(direction, prop) {
    if (!prop) {
      setSortDirection(direction);
    } else if (!prop || !direction) {
    } else {
      setSortDirection(direction);
      setSortProp(prop);
    }

    console.table(sortDataset());
  }

  // UPDATE

  function findByIdAndUpdate(id, updatedRecord) {
    let updatedR = null;
    if (id) {
      if (updatedRecord) {
        dataset.forEach(r => {
          if (r.id == id) {
            updatedR = conformToInterface(
              interfaceProps,
              Object.assign({}, r, updatedRecord)
            );
          }
        });

        return updatedR;
      } else {
        return { error: "no data provided to update record." };
      }
    } else {
      return { error: "no id provided for lookup" };
    }
  }

  // DELETE

  function deleteById(id) {
    let record = null;
    if (id) {
      dataset.forEach((r, i) => {
        if (r.id == id) {
          dataset.splice(i, 1);
          record = r;
        }
      });
      return record;
    } else {
      return { error: "please provide an id." };
    }
  }

  function save(name) {
    console.log("dataset to be saved: ", dataset);
    console.log("saving dataset to name: ", name);
    localStorage.setItem(name, JSON.stringify(dataset));
  }

  function load(name) {
    console.log(
      "dataset to be loaded: ",
      JSON.parse(localStorage.getItem(name))
    );
    console.log("loading... ", name);
    dataset = JSON.parse(localStorage.getItem(name));
  }

  /****************************
   *
   * PUBLIC METHODS
   ****************************/

  return {
    createRecord,
    findRecordById,
    findRecordsByName,
    getRecordsByPropertyFilter,
    findByIdAndUpdate,
    deleteById,
    save,
    load,
    printAllRecords,
    getAllRecords
  };
}

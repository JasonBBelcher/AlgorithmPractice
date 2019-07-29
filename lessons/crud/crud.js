let data = require("./data/MOCK_DATA.json");

// create a dataStore in JavaScript

// shape of the data set
// id
// first_name
// last_name
// email
// gender
const interfaceProps = ["first_name", "last_name", "email", "gender"];

function dataStore(dataset, interface) {
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
        if (!record.hasOwnProperty(prop) || typeof prop !== "string") {
          bool = false;
        }
      });
      if (!bool) {
        console.error("data must conform to this interface");
      }
      return bool;
    }
  }

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

  // create

  function createRecord(record) {
    record.id = createId();
    if (dataInterface(interfaceProps, record)) {
      dataset.push(record);
      return dataset[dataset.length - 1];
    } else {
      console.error("error creating record.");
      return null;
    }
  }

  // read

  function findRecordById(id) {
    let foundRecord = null;
    dataset.forEach(r => {
      if (r.id === id) {
        foundRecord = r;
      }
    });

    return foundRecord;
  }

  function getRecordsByPropertyFilter(propArg) {
    let foundRecords = [];
    let transformerObject = {};
    if (Array.isArray(propArg)) {
      dataset.forEach((r, i) => {
        Object.keys(r).forEach(key => {
          if (propArg[i] === key) transformerObject[key] = r[key];
        });
        foundRecords.push(transformerObject);
      });

      return foundRecords;
    } else {
      dataset.forEach(r => {
        foundRecords.push({ [propArg]: r[propArg] });
      });
      return foundRecords;
    }
  }

  function findRecordsByName(prop, name) {
    const foundRecords = [];

    dataset.forEach(r => {
      if (r[prop] === name) {
        foundRecords.push(r);
      }
    });
    return foundRecords;
  }

  // update

  function findByIdAndUpdate(id, updatedRecord) {
    let updatedR = null;
    if (dataset) {
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
    } else {
      return { error: "dataset not provided" };
    }
  }

  // delete

  function deleteById(id) {
    dataset.forEach((record, i) => {
      if (record.id == id) {
        console.log(dataset.splice(i, 1), " deleted");
        return record;
      }
    });
  }

  function save() {
    // save to localStorage
    console.log("save to localStorage or json file");
  }

  return {
    createRecord,
    findRecordById,
    findRecordsByName,
    getRecordsByPropertyFilter,
    findByIdAndUpdate,
    deleteById,
    save
  };
}

const dbCollection = dataStore(data, interfaceProps);

console.log(
  dbCollection.createRecord({
    first_name: "Jason",
    last_name: "Belcher",
    gender: "Male",
    email: "belcher.jason@gmail.com"
  })
);

console.log(dbCollection.getRecordsByPropertyFilter(["email", "gender"]));
console.log(dbCollection.getRecordsByPropertyFilter(["email", "first_name"]));
console.log(dbCollection.getRecordsByPropertyFilter("email"));
console.log(dbCollection.getRecordsByPropertyFilter("id"));
console.log(dbCollection.findByIdAndUpdate(1, { first_name: "Jason" }));
console.log(
  dbCollection.findByIdAndUpdate(1, { last_name: "Belcher", age: 45 })
);
console.log(dbCollection.findByIdAndUpdate());
console.log(dbCollection.findByIdAndUpdate(1));
console.log(
  dbCollection.findByIdAndUpdate(1, { last_name: "Bell", test: "blah" })
);

console.log(dbCollection.save());

let data = require("./data/MOCK_DATA.json");

// create a dataStore in JavaScript

// shape of the data set
// id
// first_name
// last_name
// email
// gender

const interfaceProps = ["first_name", "last_name", "email", "gender"];

function createUUID() {
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

function createRecord(dataset, record) {
  record.id = createUUID();
  if (dataInterface(interfaceProps, record)) {
    dataset.push(record);
    return dataset[dataset.length - 1];
  } else {
    console.error("error creating record.");
    return null;
  }
}

// read

function findRecordById(dataset, id) {
  let foundRecord = null;
  dataset.forEach(r => {
    if (r.id === id) {
      foundRecord = r;
    }
  });

  return foundRecord;
}

function getRecordsByPropertyFilter(dataset, propArg) {
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

function findRecordsByName(dataset, prop, name) {
  const foundRecords = [];

  dataset.forEach(r => {
    if (r[prop] === name) {
      foundRecords.push(r);
    }
  });
  return foundRecords;
}

// update

function findByIdAndUpdate(dataset, id, updatedRecord) {
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
console.log(
  createRecord(data, {
    first_name: "Jason",
    last_name: "Belcher",
    gender: "Male",
    email: "belcher.jason@gmail.com"
  })
);
// console.log(getRecordsByPropertyFilter(data, ["email", "gender"]));
// console.log(getRecordsByPropertyFilter(data, ["email", "first_name"]));
// console.log(getRecordsByPropertyFilter(data, "email"));
// console.log(getRecordsByPropertyFilter(data, "id"));
// console.log(findByIdAndUpdate(data, 1, { first_name: "Jason" }));
// console.log(findByIdAndUpdate(data, 1, { last_name: "Belcher", age: 45 }));
// console.log(findByIdAndUpdate());
// console.log(findByIdAndUpdate(data, 1));
// console.log(findByIdAndUpdate(data, 1, { last_name: "Bell", test: "blah" }));

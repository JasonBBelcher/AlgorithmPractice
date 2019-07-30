// shape of the data set
// id
// first_name
// last_name
// email
// gender

/***************************************
 *
 * SIMPLE VIEW TO RENDER DATASTORE MODEL
 */

const container = document.querySelector("#container");
const output = document.querySelector("#output");
const form = document.forms[0];
const addbtn = document.querySelector("#addbtn");
let formData = {};
const interfaceProps = ["first_name", "last_name", "email", "gender", "age"];
const db = dataStore([], interfaceProps);
loadPeople();

// initializes localStorage data if exists

function loadPeople() {
  console.log(db.load("people"));
  if (db.load("people") !== null) {
    db.load("people");
    output.innerHTML = printToView();
  }

  // when user clicks on item the datastore record is deleted and then
  // & removed from the UI view.

  output.addEventListener("click", function(e) {
    [].forEach.call(e.path, prop => {
      if (prop.dataset) {
        console.log(prop.dataset.id);
        db.deleteById(prop.dataset.id);
      }
    });
    output.innerHTML = printToView();
    db.save("people");
  });
}

// adds new record to datastore and adds new record to view

addbtn.addEventListener("click", function(e) {
  e.preventDefault();
  Object.keys(form).forEach(prop => {
    if (prop !== "add") {
      if (form[prop].value) {
        formData[form[prop].name] = form[prop].value;
      }
    }
  });

  db.createRecord(formData);

  output.innerHTML = printToView();
  db.save("people");

  formData = {};
  Object.keys(form).forEach(prop => {
    form[prop].value = "";
  });
});

savebtn.addEventListener("click", function(e) {
  db.save("people");
});

// append html to view

function printToView() {
  let mappedHTML = "";
  db.getAllRecords().forEach(record => {
    mappedHTML += `  <ul data-id="${record.id}">
    <li>${record.first_name}</li>
    <li>${record.last_name}</li>
    <li>${record.email}</li>
    <li>${record.gender}</li>
    <li>${record.age}</li>
    </ul>`;
  });
  db.save("people");
  return mappedHTML;
}

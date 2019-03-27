var fs = require('fs');

var output = fs
  .readFileSync('americold_WESTGATE.csv', 'utf8')
  .trim() // trim whitespace
  .split('\n') // split into array for each line which will contain all fields
  .map(fields => fields.split(',')) // map through each index and split on commas

  .reduce((devices, field) => {
    // take each line returned from map and
    // transform arrays into an array of objects
    devices.push({
      CG_Id: field[0],
      GID: field[1],
      CODE: field[2],
      MAC: field[3]
    });
    return devices;
  }, []);

var makeJSONFile = fs.writeFileSync(
  'Gateways.json',
  JSON.stringify(output),
  'utf8'
);

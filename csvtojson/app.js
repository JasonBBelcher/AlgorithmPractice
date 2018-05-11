window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                
                
                console.log(csv2JSON(reader.result));
            }

            reader.readAsText(file);	
        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}

//var csv is the CSV file with headers
function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
    
    //return result; //JavaScript object
    return result; //JSON
  }

  function csv2JSON(csv) {
      
      var jsonObj = csv
      .trim() // trim whitespace
    .split('\n') // split into array for each line which will contain all fields
    .map(line => line.split(',')) // map through each index and split on commas 
    
    .reduce((people, line) => {
        
        // take each line returned from map and 
        // transform arrays into an array of objects        
        people.push({
            id: line[0],
            firstName: line[1],
            lastName: line[2],
            email: line[3],
            gender: line[4]
        })
        return people;
    }, [])
    return jsonObj;
  }
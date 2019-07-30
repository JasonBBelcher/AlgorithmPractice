// csv fields =  id,first_name,last_name,email,gender
// this is just some practice with functional methods: map, reduce, filter


const fs = require('fs');

var output = fs.readFileSync('Mockdata.csv', 'utf8')
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
        return people
    }, [])
    
    // filter all males out of list

    const filterFemales = output.filter((el) => {
        return el.gender === 'Female';
    })
    // create a simple object with less fields with map
    const nameObjs = output.map((el) => {
        return {
            name: el.firstName + " " + el.lastName,
            id: el.id
        }
    })

    // console.log(nameObjs)
    
    // filter a range of ids 

    const filteredIds = nameObjs.filter((el) => {
        return el.id >= 500
    })

    // console.log(filteredIds);


 

    // console.log('output', JSON.stringify(output, null, 2));

    const data = [
        {
            firstName: 'Jason',
            lastName: 'Belcher',
            gender: 'Male'
        },
        {
            firstName: 'Alison',
            lastName: 'Belcher',
            gender: 'Female'
        },
        {
            firstName: 'Ben',
            lastName: 'Belcher',
            gender: 'Male'
        }
    ];

    const filtered = data.filter((el) => {
        return el.lastName === 'Belcher' && el.gender === 'Female';
    });
        
    console.log(filtered);
    
    
    const heroes = [
        'Spiderman',
        'Wolverine',
        'Hulk',
        'Beast',
        'Storm',
        'Gambit',
        'Jubilee',
        'Archangel',
        'Cyclops',
        'Professor X'
    ];

    // console.log(heroes.join(","));

    const wHeroes = heroes.filter(hero => hero[0] === "W");

    // console.log(wHeroes);


     const cutHero = (cut, list) => list.filter(hero => hero !== cut)

    //  console.log(cutHero("Hulk", heroes));



    
    

   
    


    
    
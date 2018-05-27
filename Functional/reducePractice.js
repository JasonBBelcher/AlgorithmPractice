var MOCK_DATA;

fetch('http://localhost:3000/MOCK_DATA.json').then((res) => {
    return res.json();
}).then(data => {
    // using filter and map 
    const giveMeSomeDomains1 = data.filter(user => user.email.endsWith('@google.com')
        || user.email.endsWith('@comcast.net'))
        .map(user => `${user.firstName} ${user.lastName} email: ${user.email}`);


    const someDomains = user => {
        return user.email.endsWith('@google.com')
            || user.email.endsWith('@comcast.net')
            || user.email.endsWith('@facebook.com')
    };

    const makeFullNameAndEmail = user => {
        return `${user.firstName} ${user.lastName} email: ${user.email}`
    }
    // using reduce 
    const giveMeSomeDomains2 = data.reduce((acc, user) => {
        const nameAndEmail = makeFullNameAndEmail(user);
        if (someDomains(user)) {
            acc.push(nameAndEmail);
        }
        return acc;
    }, []);

    const returnUserInfo = giveMeSomeDomains2.map((user) => {
        return user + "<br>";
    });

    document.querySelector('#info').innerHTML = returnUserInfo;

}).catch(err => console.log(err.message));


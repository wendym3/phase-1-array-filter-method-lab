function findMatching(names, query) {

    const lowerCaseQuery = query.toLowerCase();
    
    return names.filter(name => name.toLowerCase() === lowerCaseQuery);
}


const names = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

const result = findMatching(names, "bobby");

console.log(result); 

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
}

function matchName(drivers, query) {

    return drivers.filter(driver => driver.name === query);

}


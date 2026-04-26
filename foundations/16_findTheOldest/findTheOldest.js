const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();

    function sortPeople(a, b) {
        const aAge = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const bAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;

        return bAge - aAge;
    }
    
    const sortedPeople = people.sort(sortPeople);
    console.table(sortedPeople);
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;

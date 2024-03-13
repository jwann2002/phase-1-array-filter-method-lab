const drivers = [
    { name: 'John', hometown: 'New York' },
    { name: 'Alice', hometown: 'Los Angeles' },
    { name: 'Bob', hometown: 'Chicago' }
  ];
  
  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  module.exports = { findMatching, fuzzyMatch, matchName };
  
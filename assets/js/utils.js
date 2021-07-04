function getDataFromLocalStorage (database) {
    let data = localStorage.getItem(database)
    return JSON.parse(data) || []
}

function insertIntoLocalStorage (data, database) {
    let savedData = getDataFromLocalStorage(database)
  
    savedData.push(data)
    
    localStorage.setItem(database, JSON.stringify(savedData))
}

function dropLocalStorage() {
    localStorage.clear()
    showAds()
}

function totalOfDaysFromRange (start, end) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
  
    let startDate = new Date(start);
    let endDate = new Date(end);
    let rangeMS = Math.abs(startDate - endDate);
    let totalOfDays = Math.ceil(rangeMS / MS_PER_DAY);
  
    return totalOfDays;
}
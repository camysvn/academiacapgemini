function addNewAds (e) {
    e.preventDefault()
  
    let { adsName, client, startDate, endDate, investmentPerDay } = getAdsFormFields()
  
    let totalOfDays = totalOfDaysFromRange(startDate.value, endDate.value)
    let reachReport = calculateReach(investmentPerDay.value * totalOfDays)
    
    let adsData = {
        nome: adsName.value,
        client: client.value,
        startDate: startDate.value,
        endDate: endDate.value,
        investmentPerDay: investmentPerDay.value,
        investmentAmount: reachReport.investmentAmount,
        maxOfViews: reachReport.maxOfViews,
        maxOfClicks: reachReport.maxOfClicks,
        maxOfShares: reachReport.maxOfShares,
    }
  
    insertIntoLocalStorage(adsData, 'ads')
  
    alert('Ads added to database')
    e.target.reset()
}
  
const getAdsFormFields = () => {
    const adsForm = document.getElementById('ads')
    const { adsName, client, startDate, endDate, investmentPerDay } = adsForm.elements
  
    return { adsName, client, startDate, endDate, investmentPerDay }
}
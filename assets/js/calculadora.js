function reportByViews (views) {
    let totalOfClicks = views/(100/12)
    let totalOfShares = totalOfClicks/(20/3)
    let totalOfViews = views + 40 * totalOfShares

    return {
        totalOfViews,
        totalOfClicks,
        totalOfShares
    }
}

function calculateReach (investmentAmount) {
    let investmentReport = reportByViews(investmentAmount*30)
    let sharesReport = 
        reportByViews(
            40 * Math.min(investmentReport.totalOfShares, 4)
        )

    let maxOfViews = 
        Math.round(investmentReport.totalOfViews + sharesReport.totalOfViews)
    let maxOfClicks = 
        Math.round(investmentReport.totalOfClicks + sharesReport.totalOfClicks)
    let maxOfShares = 
        Math.round(investmentReport.totalOfShares + sharesReport.totalOfShares)
       

  return {
    investmentAmount,
    maxOfViews,
    maxOfClicks,
    maxOfShares,
  }
}

console.assert(
    JSON.stringify(reportByViews(1985)) === "{\"totalOfViews\":3414.2,\"totalOfClicks\":238.2,\"totalOfShares\":35.73}",
    "it should return a report with total of views, clicks and shares based on an amount of views"
);

console.assert(
    calculateReach(85).maxOfViews === 4661,
    "it should return the maximum of views based on an investiment amount"
);

console.assert(
    calculateReach(100).maxOfClicks === 379,
    "it should return the maximum of clicks based on an investiment amount"
);

console.assert(
    calculateReach(50).maxOfShares === 30,
    "it should return the maximum of shares based on an investiment amount"
);

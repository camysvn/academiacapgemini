function showAds (filter) {
    let ads = getDataFromLocalStorage('ads')
  
    if(filter) {
        ads = ads.filter(
            (ad) => 
            ad.startDate.includes(filter)
            || ad.endDate.includes(filter)
            || ad.client.includes(filter)
        )
    }
  
    const adsList = ads.map((ad, id) => `
        <tr>
            <th scope="row">${ad.nome}</th>
            <td>${ad.client}</td>
            <td>${ad.startDate}</td>
            <td>${ad.endDate}</td>
            <td>R$ ${ad.investmentPerDay}</td>
            <td>
            <ul>
                <li>Investiment Amount: R$ ${ad.investmentAmount}
                <li>Maximum of Views: ${ad.maxOfViews}
                <li>Maximum of Clicks: ${ad.maxOfClicks}
                <li>Maximum of Shares: ${ad.maxOfShares}
            </ul>
        </tr>
    `).join('')
  
    document.getElementById('adsManager').innerHTML = adsList
}
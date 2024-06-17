
export const fetchStockData = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=L62A1ZQT0N9J583G`)
    const data = await response.json()
    return data
}
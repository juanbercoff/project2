export default APICall = async (searchValue) => {
    const APIKEY = '356f4fb5'
    const formattedSearchValue = searchValue.replace(" ", "+")
    const response = await fetch('http://www.omdbapi.com/?s=' + formattedSearchValue + '&apikey=' + APIKEY)
    const results = await response.json()
    return results
  }
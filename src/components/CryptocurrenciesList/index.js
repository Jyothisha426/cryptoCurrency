import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/crypto-currency-converter',
      )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()

      const formattedData = data.map(eachItem => ({
        currencyName: eachItem.currency_name,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
        id: eachItem.id,
        currencyLogo: eachItem.currency_logo,
      }))
      console.log(formattedData)
      this.setState({cryptoCurrencyList: formattedData, isLoading: false})
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  render() {
    const {cryptoCurrencyList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="currencies-list-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="main-image"
              alt="cryptocurrency"
            />
            <ul className="crypto-item-container">
              <div className="headers">
                <h1 className="col-names">Coin Type</h1>
                <div className="coin-type-container">
                  <h1 className="col-names">USD</h1>
                  <h1 className="col-names">EURO</h1>
                </div>
              </div>
              {cryptoCurrencyList.map(item => (
                <CryptocurrencyItem currencyData={item} key={item.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList

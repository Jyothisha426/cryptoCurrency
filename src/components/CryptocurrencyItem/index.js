import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyData

  return (
    <li className="each-item">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="item-data">{currencyName}</p>
      </div>
      <div className="coin-types-data">
        <p className="item-data">{usdValue}</p>
        <p className="item-data">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

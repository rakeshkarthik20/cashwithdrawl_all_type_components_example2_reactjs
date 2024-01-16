import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  changeAmount = value => {
    const {balance} = this.state

    this.setState({balance: balance - value})
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    // console.log(denominationsList)
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <div className="userDetails">
            <div className="logo">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balanceContainer">
            <p className="balanceHeading">Your Balance</p>
            <div className="balanceSubContainer">
              <p className="balance">{balance}</p>
              <p className="currencyType">In Rupees</p>
            </div>
          </div>
          <div className="denominationContainer">
            <p className="withdraw">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="buttons">
            {denominationsList.map(eachItem => (
              <DenominationItem
                item={eachItem}
                key={eachItem.id}
                withdrawal={this.changeAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

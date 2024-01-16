import './index.css'

const DenominationItem = props => {
  const {item, withdrawal} = props
  const {value} = item
  const changeAmount = () => {
    withdrawal(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={changeAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

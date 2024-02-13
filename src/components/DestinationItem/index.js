// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {id, name, imgUrl} = item

  return (
    <li className="item-cont">
      <div>
        <img className="imgg" src={imgUrl} alt={name} />
      </div>
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem

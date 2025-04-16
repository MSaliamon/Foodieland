import './Card.scss';
import heart from '../../../../assets/homepage/svg/heart.svg'
import timer from '../../../../assets/homepage/svg/Timer.svg'
import ForkKnife from '../../../../assets/homepage/svg/ForkKnife.svg'

function Card(props) {
  return (
    <div className="card">
        <img src={heart} alt="heart" className="card__heart" />
        <img src={props.img} alt={props.name} className="card__img" />
        <p className="card__text">{props.text}</p>
        <div className="card-container">
            <div className="card-box">
                <img src={timer} alt="timer" className="card-box__img" />
                <p className="card-box__text">30 Minutes</p>
            </div>
            <div className="card-box">
                <img src={ForkKnife} alt="fork-knife" className="card-box__img" />
                <p className="card-box__text">{props.type}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
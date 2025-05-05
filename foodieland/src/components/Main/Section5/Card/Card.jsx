import './Card.scss'
import miniLogo from '../../../../assets/homepage/svg/miniLogo.svg'
import Shape from '../../../../assets/homepage/svg/Shape.svg'
import heart from '../../../../assets/homepage/svg/heart2.svg'
import message from '../../../../assets/homepage/svg/message.svg'
import Messanger from '../../../../assets/homepage/svg/Messanger.svg'
import Save from '../../../../assets/homepage/svg/Save.svg'
import avatar from '../../../../assets/homepage/png/avatar.png'

function Card(props) {
  return (
    <div className="section5-card">
      <div className="section5-card__cont">
        <img src={miniLogo} alt="miniLogo" className="section5-card__cont-img" />
        <div className="section5-card__cont-textbox">
          <p className="section5-card__cont-textbox-text1">Foodieland.</p>
          <p className="section5-card__cont-textbox-text2">Tokyo, Japan</p>
        </div>
        <img src={Shape} alt="Shape" className="section5-card__cont-img" />
      </div>
      <img src={props.img} alt={props.name} className="section5-card__img" />
      <div className="section5-card__cont2">
        <div className="section5-card__cont2-wrap">
          <img src={heart} alt="heart" className="section5-card__cont2-img" />
          <img src={message} alt="message" className="section5-card__cont2-img" />
          <img src={Messanger} alt="Messanger" className="section5-card__cont2-img" />
        </div>
        <img src={Save} alt="save" className="section5-card__cont2-img" />
      </div>
      <div className="section5-card__cont3">
        <img src={avatar} alt="avatar" className="section5-card__cont3-img" />
        <p className="section5-card__cont3-text">Liked by craig_love and 44,686 others</p>
      </div>
    </div>
  )
}

export default Card
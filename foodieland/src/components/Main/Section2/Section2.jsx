import './Section2.scss'
import breakfast from '../../../assets/homepage/png/breakfast.png'
import vegan from '../../../assets/homepage/png/vegan.png'
import meat from '../../../assets/homepage/png/meat.png'
import dessert from '../../../assets/homepage/png/dessert.png'
import lunch from '../../../assets/homepage/png/lunch.png'
import chocolate from '../../../assets/homepage/png/chocolate.png'

function Section2() {
  return (
    <section className="section2">
        <div className="section2-container1">
            <h2 className="section2-container1__title">Categories</h2>
            <button className="section2-container1__btn">View All Categories</button>
        </div>
        <div className="section2-container2">
            <div className="section2-box">
                <img src={breakfast} alt="breakfast" className="section2-box__img" />
                <p className="section2-box__text">Breakfast</p>
            </div>
            <div className="section2-box">
                <img src={vegan} alt="vegan" className="section2-box__img" />
                <p className="section2-box__text">Vegan</p>
            </div>
            <div className="section2-box">
                <img src={meat} alt="meat" className="section2-box__img" />
                <p className="section2-box__text">Meat</p>
            </div>
            <div className="section2-box">
                <img src={dessert} alt="dessert" className="section2-box__img" />
                <p className="section2-box__text">Dessert</p>
            </div>
            <div className="section2-box">
                <img src={lunch} alt="lunch" className="section2-box__img" />
                <p className="section2-box__text">Lunch</p>
            </div>
            <div className="section2-box">
                <img src={chocolate} alt="chocolate" className="section2-box__img" />
                <p className="section2-box__text">Chocolate</p>
            </div>
        </div>
    </section>
  )
}

export default Section2
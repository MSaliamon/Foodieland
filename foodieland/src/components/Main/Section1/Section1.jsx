import './Section1.scss';
import bakedchicken from '../../../assets/homepage/png/bakedchicken.png';
import pakage from '../../../assets/homepage/png/pakage.png';
import timer from '../../../assets/homepage/svg/Timer.svg';
import ForkKnife from '../../../assets/homepage/svg/ForkKnife.svg';
import John from '../../../assets/homepage/png/John.png';
import PlayCircle from '../../../assets/homepage/svg/PlayCircle.svg';
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
            <div className="section1-box1">
                <img src={pakage} alt="pakage" className="section1-box1__img" />
                <p className="section1-box1__text">Hot Recipes</p>
            </div>
            <div className="section1-box2">
                <h1 className="section1-box2__title">Spicy delicious chicken wings</h1>
                <p className="section1-box2__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className="section1-box2__content">
                    <div className="section1-box2__content-cont">
                        <img src={timer} alt="timer" className="section1-box2__content-cont-img" />
                        <p className="section1-box2__content-cont-text">30 Minutes</p>
                    </div>
                    <div className="section1-box2__content-cont">
                        <img src={ForkKnife} alt="fork-knife" className="section1-box2__content-cont-img" />
                        <p className="section1-box2__content-cont-text">Chicken</p>
                    </div>
                </div>
            </div>
            <div className="section1-box3">
                <div className="section1-cont">
                    <img src={John} alt="John" className="section1-cont__img" />
                    <div className="section1-cont__box">
                        <p className="section1-cont__box-text1">John Smith</p>
                        <p className="section1-cont__box-text2">15 March 2022</p>
                    </div>
                </div>
                <button className="section1-box3__btn">View Recipes <img src={PlayCircle} alt="PlayCircle" className="section1-box3__btn-img" /></button>
            </div>
        </div>
        <img src={bakedchicken} alt="baked-chicken" className="section1__img" />
    </section>
  )
}

export default Section1
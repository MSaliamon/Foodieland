import './Section4.scss';
import chief from '../../../assets/homepage/png/chief.png';

function Section4() {
  return (
    <section className="section4">
        <div className="section4-container">
            <div className="section4-container__textbox">
                <h2 className="section4-container__textbox-title">Everyone can be a chef in their own kitchen</h2>
                <p className="section4-container__textbox-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <button className="section4-container__btn">Learn More</button>
        </div>
        <img src={chief} alt="chief" className="section4-img" />
    </section>
  )
}

export default Section4
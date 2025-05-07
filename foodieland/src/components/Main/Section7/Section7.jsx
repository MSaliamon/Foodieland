import './Section7.scss';


function Section7() {
  return (
    <section className="section7">
        <div className="section7-textbox">
            <h2 className="section7-textbox__title">Deliciousness to your inbox</h2>
            <p className="section7-textbox__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <label className="section7-container">
            <input type="text" className="section7-container__input" placeholder='Your email address...' />
            <button className="section7-container__btn">Subscribe</button>
        </label>
    </section>
  )
}

export default Section7
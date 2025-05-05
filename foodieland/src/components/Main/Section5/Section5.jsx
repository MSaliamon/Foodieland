import Card from './Card/Card'
import './Section5.scss'
import salad2 from '../../../assets/homepage/png/salad2.png'
import pancake2 from '../../../assets/homepage/png/pancake2.png'
import ingredients from '../../../assets/homepage/png/ingredients.png'
import steak2 from '../../../assets/homepage/png/steak2.png'

function Section5() {
  return (
    <section className="section5">
      <div className="section5-textbox">
        <h2 className="section5-textbox__title">Check out @foodieland on Instagram</h2>
        <p className="section5-textbox__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div className="section5-container">
        <Card img={salad2} name="salad2" />
        <Card img={pancake2} name="pancake2"/>
        <Card img={ingredients} name="ingredients"/>
        <Card img={steak2} name="steak2"/>
      </div>
    </section>
  )
}

export default Section5
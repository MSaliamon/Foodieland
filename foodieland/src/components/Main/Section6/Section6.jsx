import Card from '../Section3/Card/Card';
import './Section6.scss';
import tropical from '../../../assets/homepage/png/tropical.png';
import wagyu3 from '../../../assets/homepage/png/wagyu3.png';
import fried from '../../../assets/homepage/png/fried.png';
import taco from '../../../assets/homepage/png/taco.png';
import salad3 from '../../../assets/homepage/png/salad3.png';
import sandwiches from '../../../assets/homepage/png/sandwiches.png';
import lettuce from '../../../assets/homepage/png/lettuce.png';
import ramen from '../../../assets/homepage/png/ramen.png';


function Section6() {
  return (
    <section className="section6">
        <div className="section6-textbox">
            <h2 className="section6-textbox__title">Try this delicious recipe to make your day</h2>
            <p className="section6-textbox__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className="section6-container">
            <Card img={tropical} name="tropical" text="Mixed Tropical Fruit Salad with Superfood Boosts " type="Healthy" />
            <Card img={wagyu3} name="wagyu3" text="Big and Juicy Wagyu Beef Cheeseburger " type="Western"/>
            <Card img={fried} name="fried" text="Healthy Japanese Fried Rice with Asparagus " type="Healthy"/>
            <Card img={taco} name="taco" text="Cauliflower Walnut Vegetarian Taco Meat" type="Eastern"/>
            <Card img={salad3} name="salad3" text="Rainbow Chicken Salad with Almond Honey Mustard Dressing" type="Healthy"/>
            <Card img={sandwiches} name="sandwiches" text="Barbeque Spicy Sandwiches with Chips " type="Snack"/>
            <Card img={lettuce} name="lettuce" text="Firecracker Vegan Lettuce Wraps - Spicy! " type="Seafood"/>
            <Card img={ramen} name="ramen" text="Chicken Ramen Soup with Mushroom " type="Japanese"/>
        </div>
    </section>
  )
}

export default Section6
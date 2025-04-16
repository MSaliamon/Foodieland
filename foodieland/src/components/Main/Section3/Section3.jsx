import Card from './Card/Card';
import './Section3.scss';
import wagyu from '../../../assets/homepage/png/wagyu.png';
import roasted from '../../../assets/homepage/png/roasted.png';
import pancake from '../../../assets/homepage/png/pancake.png';
import salad from '../../../assets/homepage/png/salad.png';
import meatballs from '../../../assets/homepage/png/meatballs.png';
import pancakeOrange from '../../../assets/homepage/png/pancakeOrange.png';
import chicken from '../../../assets/homepage/png/chicken.png';
import pasta from '../../../assets/homepage/png/pasta.png';

function Section3() {
  return (
    <section className="section3">
        <div className="section3-textbox">
            <h2 className="section3-textbox__title">Simple and tasty recipes</h2>
            <p className="section3-textbox__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className="section3-container">
            <Card img={wagyu} name="wagyu" text="Big and Juicy Wagyu Beef Cheeseburger" type="Snack" />
            <Card img={roasted} name="roasted" text="Fresh Lime Roasted Salmon with Ginger Sauce" type="Fish" />
            <Card img={pancake} name="pancake" text="Strawberry Oatmeal Pancake with Honey Syrup" type="Breakfast" />
            <Card img={salad} name="salad" text="Fresh and Healthy Mixed Mayonnaise Salad" type="Healthy" />
            <Card img={meatballs} name="meatballs" text="Chicken Meatballs with Cream Cheese" type="Meat"/>
            <Card img={pancakeOrange} name="pancakeOrange" text="Fruity Pancake with Orange & Blueberry" type="Sweet"/>
            <Card img={chicken} name="chicken" text="The Best Easy One Pot Chicken and Rice" type="Snack"/>
            <Card img={pasta} name="pasta" text="The Creamiest Creamy Chicken and Bacon Pasta" type="Noodles"/>
        </div>
    </section>
  )
}

export default Section3
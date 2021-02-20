import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/TMYS_S1_02478_GWBleedingHero_3000x1200_POST_Final_noLocale_PVD6512._CB661005760_.jpg"
          alt="homeImage"
        />

        <div className="home__row">
          <Product
            id={1}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51X6o6WBRWL._SX327_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="The lean startup item 2"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51X6o6WBRWL._SX327_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="The lean startup item 3"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51X6o6WBRWL._SX327_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={4}
            title="The lean startup item 4  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51X6o6WBRWL._SX327_BO1,204,203,200_.jpg"
            rating={1}
          />
          <Product
            id={5}
            title="The lean startup item 5"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51X6o6WBRWL._SX327_BO1,204,203,200_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="The lean startup item 6  blah  blah blah blah blah blah blah blah blah blah blah blah blah blah"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51X6o6WBRWL._SX327_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

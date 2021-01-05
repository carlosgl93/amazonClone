import React from 'react'
import Product from "../Components/Product"
import "../Css/Home.css"

function Homepage() {
    return (
        <div className="home">
            <img
            className="home__image" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-ZWRlOTVmNzAt-w3000._CB404326840_.jpg" 
            alt="home banner"/>

        <div className="home__row">
        <Product 
            id="12341234"
            title="The Only Plane In the Sky"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41QDwBXvrUL._SX327_BO1,204,203,200_.jpg"
        />
        <Product 
            id="1234"
            title="The Infinite Game"
            price={19.93}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41xC6fNkf2L._SX294_BO1,204,203,200_.jpg"
            />
            
        </div>
        <div className="home__row">
        <Product 
            id="12341234"
            title="CQR HOF110 - Camisa de franela para hombre, manga larga, 100% algodón, con diseño de mariposas"
            price={25.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81CjX2Mp%2BVL._AC_UX679_.jpg"/>
             <Product 
            id="12341234"
            title="Legendary Whitetails Journeyman - Chaqueta de franela para hombre"
            price={79.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81XjvzOHbUL._AC_UX679_.jpg"/>
             <Product 
            id="12341234"
            title="Orvis - Abrigo clásico para hombre"
            price={169.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41BWdS-2BsL._AC_.jpg"/>
        </div>
        <div className="home__row">
        <Product 
            id="54513451"
            title="All-New Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
            price={179.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61x0OuU9XtL._AC_SX679_.jpg"
            />
            
        </div>
            
            {/* Prode, price, rating, image*/}
            {/* Product */}
        </div>
    )
}

export default Homepage

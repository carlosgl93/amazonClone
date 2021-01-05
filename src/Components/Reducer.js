// all the state logic goes here

export const initialState = {
  basket: [
    {
      id: "1234",
      title: "The Infinite Game",
      price: 19.93,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41xC6fNkf2L._SX294_BO1,204,203,200_.jpg",
    },
    {
        
            id: "12341234",
            title: "Legendary Whitetails Journeyman - Chaqueta de franela para hombre",
            price: 79.99,
            rating: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/81XjvzOHbUL._AC_UX679_.jpg"
           
    }
  ],
  user: null,
};


export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  console.log("show me the action", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC TO ADD TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // LOGIC TO REMOVE FROM BASKET

      // Cloned the basket
      let newBasket = [...state.basket];

      // check to see if the product is in the basket
      const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
      )

      if (index >= 0 ) {
          // item exists in basket, remove it...
          newBasket.splice(index, 1);
      } else {
          console.warn(
              `Cant  remove product (id: ${action.id}) as it its not in the basket`
          )
      }
      // return the new basket
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;

const data = require("../products.json")

const addProducts = (state = [], action) => {
    switch(action.type){
        case "ADD_PRODUCTS":
            return state=data;
        default:
            return state;

    }
}

export default addProducts;
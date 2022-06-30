import {GET_PRODUCTS,EDIT_PRODUCT} from '../types/productTypes'

const initState={
    products:[],
    product:null,
    loading:true,
}
function ProductReducer(state=initState,action){
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,products:action.payload,loading:false
            }
        case EDIT_PRODUCT:
            return{
            ...state,products:action.payload
            }   
    
        default:return state;
           
    }
}
export default ProductReducer;
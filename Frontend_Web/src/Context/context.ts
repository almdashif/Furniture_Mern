// Load initial state from localStorage
const loadInitialState = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedUser = localStorage.getItem('user');
    
    return {
      cart: savedCart ? JSON.parse(savedCart) : [],
      wishlist: savedWishlist ? JSON.parse(savedWishlist) : [],
      user: savedUser ? JSON.parse(savedUser) : null,
    };
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return {
      cart: [],
      wishlist: [],
      user: null,
    };
  }
};

export interface IState {
    cart: any[];
    wishlist: any[];
    user: any;
}

export const initialState: IState = loadInitialState();

export interface Action {
    type: string;
    payload: any;
}

export const reducer = (state: IState = initialState, action: Action): IState => {
    let newState: IState;
    
    switch (action.type) {
        case "cart":
            newState = {
                ...state,
                cart: action.payload,
            };
            break;
        case "wishlist":
            newState = {
                ...state,
                wishlist: action.payload,
            };
            break;
        case "user":
            newState = {
                ...state,
                user: action.payload,
            };
            break;
        default:
            return state;
    }
    
    // Save to localStorage
    try {
        localStorage.setItem('cart', JSON.stringify(newState.cart));
        localStorage.setItem('wishlist', JSON.stringify(newState.wishlist));
        localStorage.setItem('user', JSON.stringify(newState.user));
    } catch (error) {
        console.error('Error saving state to localStorage:', error);
    }
    
    return newState;
}
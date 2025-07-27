import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App.jsx';
import './wishlist.scss';

const WishlistPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GlobalContext);
  const wishlist = state.wishlist || [];
  const cart = state.cart || [];

  const handleRemove = (id: number) => {
    dispatch({
      type: 'wishlist',
      payload: wishlist.filter((item: any) => item.id !== id),
    });
  };

  const handleAddToCart = (item: any) => {
    const existingProduct = cart.find((cartItem: any) => cartItem.id === item.id);
    if (existingProduct) {
      dispatch({
        type: 'cart',
        payload: cart.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
            : cartItem
        ),
      });
    } else {
      dispatch({
        type: 'cart',
        payload: [...cart, { ...item, cartQuantity: 1 }],
      });
    }
    handleRemove(item.id);
  };

  if (!wishlist.length) {
    return (
      <section id="WishlistPage">
        <div className="wishlist-empty">
          <h2>Your Wishlist is empty</h2>
          <p>Looks like you haven't added anything to your wishlist yet.</p>
          <button onClick={() => navigate('/shop')}>Continue Shopping</button>
        </div>
      </section>
    );
  }

  return (
    <section id="WishlistPage">
      <div className="wishlist-container">
        <h2>My Wishlist</h2>
        <div className="wishlist-grid">
          {wishlist.map((item: any, idx: number) => {
            const inCart = cart.some((cartItem: any) => cartItem.id === item.id);
            return (
              <div className="wishlist-item" key={item.id}>
                <div className="wishlist-img" onClick={() => navigate(`/${item.id}`)}>
                  <img src={item.productImage} alt={item.name} />
                </div>
                <div className="wishlist-info">
                  <h4 onClick={() => navigate(`/${item.id}`)}>{item.name}</h4>
                  {item.brand && <div className="wishlist-brand">by {item.brand}</div>}
                  <p className="wishlist-price">${item.currentprice}</p>
                  <div className="wishlist-actions">
                    <button
                      className="add-to-cart"
                      onClick={() => handleAddToCart(item)}
                      disabled={inCart}
                      style={inCart ? { background: '#eee', color: '#888', cursor: 'not-allowed' } : {}}
                    >
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                    <button className="remove-link" onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                {/* Divider for mobile */}
                <div className="wishlist-divider" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage; 
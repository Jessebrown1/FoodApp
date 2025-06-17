        import React, { useContext } from 'react'
        import './Cart.css'
    import { StoreContext } from '../../Components/Context/storeContext'
    import { useNavigate } from 'react-router-dom'

        const Cart = () => {


            const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)
            const navigate = useNavigate();


        return (
            <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr /> 
                {food_list.map((item,index)=>{
                    if(cartItems[item.id]>0){
                        return(
                            <div>
                            <div className='cart-items-title cart-items-item'>
                                <img src={item.image} alt="" />
                                <p>{item.name }</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item.id]}</p>
                                <p>${item.price * cartItems[item.id]}</p>
                                <p onClick={() => removeFromCart(item.id)} className='cross'>x </p>
                            </div>
                            <hr />

                            </div>

                        )
                    }
                })}  
            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <hr />

                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()+2}</b>
                        </div>
                    </div>

                    


                
    <button class="Btn">
    PROCEED TO CHECKOUT
    <svg viewBox="0 0 576 512" class="svgIcon"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
    </button>





                </div>
                <div className="cart-promocode">
                    <div>
                        <p> If You Have A Promo code, Enter It Here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promo code' />
                            <button role="button" class="golden-button">
    <span class="golden-text">Submit</span>
    </button>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        )
        }

        export default Cart

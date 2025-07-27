import React, { useContext, useEffect, useState } from 'react';
import { CiBellOn } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaGooglePay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from '../../App.jsx';
import { processPayment, validateGooglePayData, createOrderSummary } from '../../services/paymentService.ts';
import '../Checkout/checkout.scss';

// Google Pay type declarations
declare global {
  interface Window {
    google: {
      payments: {
        api: {
          PaymentsClient: any;
        };
      };
    };
  }
}

// Google Pay types
interface GooglePayPaymentDataRequest {
  apiVersion: number;
  apiVersionMinor: number;
  allowedPaymentMethods: any[];
  transactionInfo: {
    totalPriceStatus: string;
    totalPrice: string;
    currencyCode: string;
    countryCode: string;
  };
  merchantInfo: {
    merchantName: string;
    merchantId: string;
  };
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  pincode: string;
  notes: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  pincode?: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext) as any;
  const [total, setTotal] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'googlepay' | 'cod'>('googlepay');
  const [googlePayReady, setGooglePayReady] = useState(false);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Define a type for cart items
  type CartItem = {
    id: string | number;
    name: string;
    productImage?: string;
    currentprice: number;
    cartQuantity: number;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    initializeGooglePay();
  }, []);

  useEffect(() => {
    if (context.state.cart && Array.isArray(context.state.cart)) {
      const total = context.state.cart.reduce((totalPrice: number, item: CartItem) => {
        return totalPrice + item.currentprice * item.cartQuantity;
      }, 0);
      setTotal(Number(total));
    }
  }, [context.state.cart]);

  // Google Pay initialization
  const initializeGooglePay = () => {
    if (typeof window !== 'undefined' && window.google && window.google.payments) {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: 'TEST' // Change to 'PRODUCTION' for live payments
      });

      const isReadyToPayRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA']
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            }
          }
        }]
      };

      paymentsClient.isReadyToPay(isReadyToPayRequest)
        .then((response: any) => {
          if (response.result) {
            setGooglePayReady(true);
            console.log('Google Pay is ready to use');
          }
        })
        .catch((err: any) => {
          console.error('Google Pay not available:', err);
          setGooglePayReady(false);
        });
    } else {
      console.log('Google Pay API not loaded');
      setGooglePayReady(false);
    }
  };

  // Create Google Pay payment request
  const createGooglePayPaymentRequest = (): GooglePayPaymentDataRequest => {
    return {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'stripe', // You can change this to your payment gateway
            gatewayMerchantId: 'your_gateway_merchant_id'
          }
        }
      }],
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: total.toString(),
        currencyCode: 'USD',
        countryCode: 'US'
      },
      merchantInfo: {
        merchantName: 'Furniture Store',
        merchantId: 'your_merchant_id'
      }
    };
  };

  // Input validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validatePincode = (pincode: string): boolean => {
    const pincodeRegex = /^\d{5,6}$/;
    return pincodeRegex.test(pincode);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Address must be at least 10 characters';
    }

    // Pincode validation
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!validatePincode(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Google Pay payment function
  const handleGooglePayPayment = async () => {
    if (!validateForm()) {
      alert('Please fix the errors in the form before proceeding.');
      return;
    }

    if (!googlePayReady) {
      alert('Google Pay is not available. Please try a different payment method.');
      return;
    }

    setIsProcessing(true);

    try {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: 'TEST'
      });

      const paymentDataRequest = createGooglePayPaymentRequest();

      const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
      
      // Validate Google Pay payment data
      if (!validateGooglePayData(paymentData)) {
        throw new Error('Invalid Google Pay payment data');
      }
      
      // Process the payment with your backend
      const paymentResult = await processPaymentWithBackend(paymentData, formData);
      
      if (paymentResult.success) {
        alert('Payment successful! Your order has been placed.');
        
        // Clear cart after successful payment
        context.dispatch({
          type: "cart",
          payload: []
        });
        
        // Navigate to success page or home
        navigate('/');
      } else {
        throw new Error(paymentResult.error || 'Payment failed');
      }
      
    } catch (error: any) {
      console.error('Google Pay payment failed:', error);
      
      if (error.statusCode === 'CANCELED') {
        alert('Payment was cancelled.');
      } else {
        alert('Payment failed. Please try again or choose a different payment method.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Process payment with backend
  const processPaymentWithBackend = async (paymentData: any, formData: FormData) => {
    try {
      // Create order summary
      const orderSummary = createOrderSummary(context.state.cart, formData, total);
      
      // Prepare payment data for processing
      const paymentRequestData = {
        paymentData,
        formData,
        cart: context.state.cart,
        total,
        orderId: orderSummary.orderId,
        timestamp: orderSummary.timestamp
      };

      console.log('Processing order:', orderSummary);

      // Process payment using the service
      const result = await processPayment(paymentRequestData);
      return result;
      
    } catch (error) {
      console.error('Backend payment processing failed:', error);
      return { success: false, error: 'Payment processing failed' };
    }
  };

  // Cash on Delivery function
  const handleCODPayment = () => {
    if (!validateForm()) {
      alert('Please fix the errors in the form before proceeding.');
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate order placement
      console.log('Placing order with Cash on Delivery...');
      
      // Simulate order processing
      setTimeout(() => {
        alert('Order placed successfully! You will pay on delivery.');
        
        // Clear cart after successful order
        context.dispatch({
          type: "cart",
          payload: []
        });
        
        // Navigate to success page or home
        navigate('/');
        setIsProcessing(false);
      }, 1000);
      
    } catch (error) {
      console.error('Order placement failed:', error);
      alert('Order placement failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const updateCartProductQuantity = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: CartItem, type: number) => {
    e.preventDefault();

    if (type === 0) {
      const filteredProduct = context.state.cart.find(item => item.id === data.id);
      if (!filteredProduct) return;
      if (filteredProduct.cartQuantity === 1) {
        context.dispatch({
          type: "cart",
          payload: context.state.cart.filter((item: CartItem) => item.id !== data.id),
        });
      } else {
        context.dispatch({
          type: "cart",
          payload: context.state.cart.map((item: CartItem) =>
            item.id === data.id
              ? { ...item, cartQuantity: item.cartQuantity - 1 }
              : item
          ),
        });
      }
    } else if (type == 1) {
      context.dispatch({
        type: "cart",
        payload: context.state.cart.map((item: CartItem) =>
          item.id === data.id
            ? { ...item, cartQuantity: item.cartQuantity + type }
            : item
        ),
      });
    } else {
      context.dispatch({
        type: "cart",
        payload: context.state.cart.filter((item: CartItem) => item.id !== data.id),
      });
    }
  };

  return (
    <>
      <section id="Checkout">
        <div className="checkoutHeading">
          <h4>Checkout</h4>
        </div>
        <div className="mainContainer">
          <div className="leftContainer">
            <div className="billingHeading">
              <p>Billing details</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="formGroup firstName">
                <label htmlFor="firstName">First Name <span>*</span></label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="formGroup lastName">
                <label htmlFor="lastName">Last Name <span>*</span></label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
              
              <div className="formGroup">
                <label htmlFor="email">Email <span>*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="formGroup">
                <label htmlFor="phone">Phone <span>*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="formGroup">
                <label htmlFor="address">Address <span>*</span></label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? 'error' : ''}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>
              
              <div className="formGroup">
                <label htmlFor="pincode">Pincode <span>*</span></label>
                <input 
                  type="text" 
                  id="pincode" 
                  name="pincode" 
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className={errors.pincode ? 'error' : ''}
                />
                {errors.pincode && <span className="error-message">{errors.pincode}</span>}
              </div>
              
              <p className='addInfo'>Additional Information</p>
              <div className="formGroup">
                <label htmlFor="notes">Order notes(optional)</label>
                <textarea 
                  placeholder='Notes about your order, e.g. special notes for delivery.' 
                  id="notes" 
                  name="notes" 
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>

          <div className="rightContainer">
            <h5>Your order</h5>

            <div className="headingContainer">
              <h5>Product</h5>
              <h5>Subtotal</h5>
            </div>
            <div className="divider"></div>

            <div className="productsList">
              {context.state.cart.map((val: CartItem, i: number) => {
                return (
                  <div key={i} className="product">
                    <div className="productDetails">
                      <div className="productImg">
                        <img src={val.productImage ? val.productImage : "https://img.freepik.com/free-psd/slipper-chair-isolated-transparent-background_191095-13677.jpg?t=st=1740894955~exp=1740898555~hmac=51d9ef249a11662e76fd8be1f59bc9d4f1861d00772ef9a44859c9706df9ddb0&w=1480"} alt="productImg" />
                      </div>
                      <div className="productName">
                        <p>{val.name}</p>
                        <div className="quantityContainer">
                          <a href="#" onClick={e => updateCartProductQuantity(e, val, 0)}>
                            <FiMinus />
                          </a>
                          <span>{val.cartQuantity}</span>
                          <a href="#" onClick={e => updateCartProductQuantity(e, val, 1)}>
                            <GoPlus />
                          </a>
                        </div>
                      </div>
                    </div>

                    <a className="subtotalContainer">
                      <span className="productItemPrice">${val.currentprice}</span>
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="subTotal">
              <p>Subtotal</p>
              <span>${total}</span>
            </div>
            <div className="divider"></div>
            <div className="total">
              <p>Total</p>
              <span>${total}</span>
            </div>

            <div className="freeShippingContainer">
              {total <= 2000 ? <p>Add ${2000 - total} more to get free shipping!</p>
                :
                <p>Hooray! you availed free shipping 🎉.</p>
              }
              <progress value={total} max={2000} color='pink' className='progressBar' />
            </div>

            <div className="paymentOptions">
              <h6>Payment Method</h6>
              <div className="paymentMethods">
                <div 
                  className={`paymentMethod ${paymentMethod === 'googlepay' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('googlepay')}
                >
                  <FaGooglePay />
                  <span>Google Pay {!googlePayReady && '(Not Available)'}</span>
                </div>
                <div 
                  className={`paymentMethod ${paymentMethod === 'cod' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('cod')}
                >
                  <CiBellOn />
                  <span>Cash on Delivery</span>
                </div>
              </div>
            </div>

            <div className="privacyDesc">
              <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                <a href="">privacy policy</a>.
              </p>
            </div>

            <button 
              className="checkoutBtn"
              onClick={paymentMethod === 'googlepay' ? handleGooglePayPayment : handleCODPayment}
              disabled={isProcessing || (paymentMethod === 'googlepay' && !googlePayReady)}
            >
              {isProcessing ? 'Processing...' : 
               paymentMethod === 'googlepay' ? 
                 (googlePayReady ? 'Pay with Google Pay' : 'Google Pay Not Available') : 
                 'Place Order (COD)'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

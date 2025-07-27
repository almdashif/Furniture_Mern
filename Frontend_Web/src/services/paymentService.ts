// Payment Service for Google Pay Integration

export interface PaymentData {
  paymentData: any;
  formData: any;
  cart: any[];
  total: number;
  orderId: string;
  timestamp: string;
}

export interface PaymentResult {
  success: boolean;
  orderId?: string;
  error?: string;
  transactionId?: string;
}

// Simulate payment processing with backend
export const processPayment = async (paymentData: PaymentData): Promise<PaymentResult> => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real implementation, you would make an API call like:
    // const response = await fetch('/api/process-payment', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${yourAuthToken}`
    //   },
    //   body: JSON.stringify(paymentData)
    // });
    
    // const result = await response.json();
    // return result;

    // For demo purposes, simulate successful payment
    console.log('Processing payment:', paymentData);
    
    // Simulate 90% success rate
    const isSuccess = Math.random() > 0.1;
    
    if (isSuccess) {
      return {
        success: true,
        orderId: paymentData.orderId,
        transactionId: `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      };
    } else {
      throw new Error('Payment processing failed');
    }
    
  } catch (error) {
    console.error('Payment processing error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Payment processing failed'
    };
  }
};

// Validate Google Pay payment data
export const validateGooglePayData = (paymentData: any): boolean => {
  try {
    // Basic validation of Google Pay response
    return !!(
      paymentData &&
      paymentData.paymentMethodData &&
      paymentData.paymentMethodData.tokenizationData &&
      paymentData.paymentMethodData.tokenizationData.token
    );
  } catch (error) {
    console.error('Google Pay data validation failed:', error);
    return false;
  }
};

// Create order summary for backend
export const createOrderSummary = (cart: any[], formData: any, total: number) => {
  return {
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.currentprice,
      quantity: item.cartQuantity,
      subtotal: item.currentprice * item.cartQuantity
    })),
    customer: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      pincode: formData.pincode,
      notes: formData.notes
    },
    total: total,
    orderId: `ORDER_${Date.now()}`,
    timestamp: new Date().toISOString()
  };
}; 
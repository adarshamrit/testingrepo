import React, { useState } from 'react';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    // Handle payment logic here (e.g., send payment details to a server)
    // You can implement your payment processing logic here.
    // For now, we'll just simulate a successful payment.
    setPaymentSuccessful(true);
    alert('Payment Successful!');
  };

  const handleSendOTP = () => {
    // Simulate sending an OTP (e.g., via SMS)
    // You can implement your OTP sending logic here.
    // For now, we'll just set `otpSent` to true.
    setOtpSent(true);
  };
 
  

  return (
    <div>
      <h2>Payment Gateway</h2>
      <form>
        <div id='option'>
          <label>Select Payment Method:</label>
          <select onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="netbanking">Net Banking</option>
            <option value="upi">UPI</option>
            <option value="creditcard">Credit Card</option>
            <option value="debitcard">Debit Card</option>
          </select>
        </div>
        {paymentMethod && (
          <div id='phone'>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        )}
        {['creditcard', 'debitcard'].includes(paymentMethod) && (
          <div id='card'>
            <label>Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <label>Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
        )}
        {paymentMethod && !otpSent && (
          <button onClick={handleSendOTP}>Send OTP</button>
        )}
        {otpSent && (
          <div>
            <label>Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handlePayment}>Submit Payment</button>
          </div>
        )}
        {paymentSuccessful && <p>Payment Successful!</p>}
      </form>
    </div>
  );
}

export default Payment;

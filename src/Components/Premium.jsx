import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Premium() {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Individual Plan",
      price: "$9.99/month",
      desc: "Ad-free music listening, offline playback, and on-demand playback."
    },
    {
      name: "Family Plan",
      price: "$15.99/month",
      desc: "Up to 6 Premium accounts for family members living under one roof."
    },
    {
      name: "Student Plan",
      price: "$4.99/month",
      desc: "Special discount for eligible students in higher education."
    }
  ];

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePay = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: '#fff', padding: '40px 24px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <h1 style={{ fontSize: 40, fontWeight: 900, margin: 0 }}>Get Premium</h1>
          <button 
            onClick={() => navigate('/')} 
            style={{ padding: '10px 24px', borderRadius: 24, border: '1px solid #727272', background: 'transparent', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
          >
            Back to Home
          </button>
        </div>

        {paymentSuccess ? (
          <div style={{ textAlign: 'center', padding: '64px 24px', backgroundColor: '#181818', borderRadius: 8 }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontSize: 32, marginBottom: 16, color: '#1db954' }}>Payment Successful!</h2>
            <p style={{ fontSize: 16, color: '#b3b3b3', marginBottom: 32 }}>Welcome to Spotify Premium {selectedPlan?.name}.</p>
            <button 
              onClick={() => navigate('/')} 
              style={{ padding: '14px 32px', borderRadius: 32, border: 'none', background: '#1db954', color: '#000', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
            >
              Start Listening
            </button>
          </div>
        ) : showPayment ? (
          <div style={{ backgroundColor: '#181818', padding: 32, borderRadius: 8, maxWidth: 500, margin: '0 auto' }}>
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Checkout</h2>
            <p style={{ color: '#b3b3b3', marginBottom: 24 }}>You selected: {selectedPlan?.name} ({selectedPlan?.price})</p>
            
            <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Name on Card</label>
                <input required type="text" placeholder="John Doe" style={{ width: '100%', padding: 12, borderRadius: 4, border: '1px solid #727272', background: '#282828', color: '#fff', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Card Number</label>
                <input required type="text" placeholder="0000 0000 0000 0000" style={{ width: '100%', padding: 12, borderRadius: 4, border: '1px solid #727272', background: '#282828', color: '#fff', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Expiry Date</label>
                  <input required type="text" placeholder="MM/YY" style={{ width: '100%', padding: 12, borderRadius: 4, border: '1px solid #727272', background: '#282828', color: '#fff', outline: 'none' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>CVV</label>
                  <input required type="text" placeholder="123" style={{ width: '100%', padding: 12, borderRadius: 4, border: '1px solid #727272', background: '#282828', color: '#fff', outline: 'none' }} />
                </div>
              </div>
              
              <button type="submit" style={{ marginTop: 16, padding: '14px', borderRadius: 32, border: 'none', background: '#1db954', color: '#000', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
                Pay {selectedPlan?.price.split('/')[0]}
              </button>
              
              <button type="button" onClick={() => setShowPayment(false)} style={{ padding: '14px', borderRadius: 32, border: 'none', background: 'transparent', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {plans.map((plan, i) => (
              <div key={i} style={{ backgroundColor: '#181818', padding: 24, borderRadius: 8, display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: 24, marginBottom: 8 }}>{plan.name}</h2>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#1db954', marginBottom: 16 }}>{plan.price}</p>
                <p style={{ color: '#b3b3b3', fontSize: 14, lineHeight: 1.5, marginBottom: 32, flex: 1 }}>{plan.desc}</p>
                <button 
                  onClick={() => handleGetStarted(plan)} 
                  style={{ width: '100%', padding: '14px', borderRadius: 32, border: 'none', background: '#fff', color: '#000', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Premium;

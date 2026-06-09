// pay.js — Razorpay Payment Integration
// Replace 'rzp_test_XXXXXXXXX' with your actual Razorpay API key

document.addEventListener('DOMContentLoaded', function () {

  // === INDEX PAGE: Pay Me Section ===
  const payBtn = document.getElementById('pay-btn');
  if (payBtn) {
    payBtn.addEventListener('click', function () {
      const amount = document.getElementById('pay-amount').value;
      const note = document.getElementById('pay-note').value || 'Payment to Irfan Habeeb K';

      if (!amount || amount <= 0) {
        showToast('Please enter a valid amount', 'error');
        return;
      }

      initiatePayment(amount, '', '', note);
    });
  }

  // === PAY PAGE: Full Payment Form ===
  const payPageBtn = document.getElementById('pay-page-btn');
  if (payPageBtn) {
    payPageBtn.addEventListener('click', function () {
      const amount = document.getElementById('pay-page-amount').value;
      const name = document.getElementById('pay-page-name').value;
      const email = document.getElementById('pay-page-email').value;
      const note = document.getElementById('pay-page-note').value || 'Payment to Irfan Habeeb K';

      if (!amount || amount <= 0) {
        showToast('Please enter a valid amount', 'error');
        return;
      }
      if (!name.trim()) {
        showToast('Please enter your name', 'error');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        showToast('Please enter a valid email', 'error');
        return;
      }

      initiatePayment(amount, name, email, note);
    });
  }

  /**
   * Initiate Razorpay checkout
   */
  function initiatePayment(amount, name, email, note) {
    const options = {
      key: 'rzp_live_SzZbeftXq72aJv',
      amount: Math.round(amount * 100), // Razorpay uses paise
      currency: 'INR',
      name: 'Irfan Habeeb K',
      description: note,
      image: 'https://i.postimg.cc/MGmqptq3/Whats-App-Image-2026-06-09-at-11-01-25-AM.jpg',
      prefill: {
        name: name,
        email: email
      },
      theme: {
        color: '#667eea'
      },
      handler: function (response) {
        showPaymentSuccess(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          showToast('Payment cancelled', 'error');
        }
      }
    };

    try {
      const rzp = new Razorpay(options);
      rzp.on('payment.failed', function (response) {
        showToast('Payment failed: ' + response.error.description, 'error');
      });
      rzp.open();
    } catch (e) {
      showToast('Unable to initialize payment. Please try again.', 'error');
    }
  }

  /**
   * Show payment success overlay with animation
   */
  function showPaymentSuccess(paymentId) {
    const overlay = document.createElement('div');
    overlay.className = 'payment-overlay';
    overlay.innerHTML = `
      <div class="payment-success-card glass-card">
        <div class="success-checkmark">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your payment.</p>
        <p class="payment-id">Payment ID: ${paymentId}</p>
        <button class="btn-primary btn-gradient" onclick="this.closest('.payment-overlay').remove()">Done</button>
      </div>
    `;
    document.body.appendChild(overlay);
    // Animate in
    requestAnimationFrame(() => overlay.classList.add('active'));
  }

  /**
   * Show a toast notification
   */
  function showToast(message, type) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('active'));
    setTimeout(() => {
      toast.classList.remove('active');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

});

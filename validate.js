document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("regForm");
    const errorMsg = document.getElementById("errorMsg");
  
    form.addEventListener("submit", (e) => {
      errorMsg.textContent = "";
  
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmpassword = document.getElementById("confirmpassword").value;
      const phone = document.getElementById("phone").value.trim();
  
      // Name validation
      if (fullname.length < 3) {
        e.preventDefault();
        errorMsg.textContent = "⚠️ Full name must be at least 3 characters.";
        return;
      }
  
      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        e.preventDefault();
        errorMsg.textContent = "⚠️ Please enter a valid email.";
        return;
      }
  
      // Password validation
      if (password.length < 6) {
        e.preventDefault();
        errorMsg.textContent = "⚠️ Password must be at least 6 characters.";
        return;
      }
  
      // Confirm password
      if (password !== confirmpassword) {
        e.preventDefault();
        errorMsg.textContent = "⚠️ Passwords do not match.";
        return;
      }
  
      // Phone validation
      if (!/^[0-9]{10}$/.test(phone)) {
        e.preventDefault();
        errorMsg.textContent = "⚠️ Enter a valid 10-digit phone number.";
        return;
      }
    });
  });
  
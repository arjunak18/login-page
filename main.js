document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[placeholder="email address"]');
    const usernameInput = document.querySelector('input[placeholder="username"]');
    const passwordInput = document.querySelector('input[placeholder="password"]');
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting immediately
  
      const email = emailInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Basic validation
      if (!email || !username || !password) {
        alert("All fields are required!");
        return;
      }
  
      // Email validation using a simple regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // All validations passed
      alert("Form submitted successfully!");
  
      // You can now proceed with form submission, API call, or other actions
      form.submit();
    });
  });
  
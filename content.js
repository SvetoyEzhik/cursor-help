// Function to generate card details
function generateCard() {
  const prefix = "446334140629";
  const random3 = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  const s = prefix + random3;
  const digits = [...s.split("").map(Number)].reverse();
  let sum = 0;
  digits.forEach((d, i) => {
    let val = d;
    if (i % 2 === 0) {
      val *= 2;
      if (val > 9) val -= 9;
    }
    sum += val;
  });
  const check = (10 - (sum % 10)) % 10;
  const fullNumber = s + check;
  const formattedNumber = fullNumber.replace(/(\d{4})/g, "$1 ").trim();
  const cvv = Math.floor(Math.random() * 900) + 100;
  return {
    number: formattedNumber,
    expiryMonth: "12",
    expiryYear: "27",
    cvv: cvv.toString()
  };
}

// Function to fill the form
function fillForm() {
  // Adjust these selectors based on actual Stripe form structure
  const cardNumberInput = document.querySelector("input[placeholder*='4463']") || document.querySelector("input[name='cardNumber']");
  const expiryInput = document.querySelector("input[placeholder*='MM/YY']") || document.querySelector("input[name='cardExpiry']");
  const cvvInput = document.querySelector("input[placeholder*='CVV']") || document.querySelector("input[name='cardCvc']");
  const nameInput = document.querySelector("input[name='billingName']") || document.querySelector("input[placeholder*='Имя']");
  const addressLine1Input = document.querySelector("input[name='billingAddressLine1']") || document.querySelector("input[placeholder*='Адрес']");
  const cityInput = document.querySelector("input[name='billingAddressCity']") || document.querySelector("input[placeholder*='Город']");
  const stateInput = document.querySelector("input[name='billingAddressState']") || document.querySelector("input[placeholder*='Штат']");
  const zipInput = document.querySelector("input[name='billingAddressZip']") || document.querySelector("input[placeholder*='Индекс']");
  const countrySelect = document.querySelector("select[name='billingAddressCountry']") || document.querySelector("select[aria-label*='Страна']");

  if (cardNumberInput && cvvInput && expiryInput) {
    const card = generateCard();

    // Fill card number
    cardNumberInput.value = card.number;
    cardNumberInput.dispatchEvent(new Event("input", { bubbles: true }));
    cardNumberInput.dispatchEvent(new Event("change", { bubbles: true }));

    // Fill expiry (assuming single field MM/YY)
    expiryInput.value = `${card.expiryMonth}/${card.expiryYear.slice(-2)}`;
    expiryInput.dispatchEvent(new Event("input", { bubbles: true }));
    expiryInput.dispatchEvent(new Event("change", { bubbles: true }));

    // Fill CVV
    cvvInput.value = card.cvv;
    cvvInput.dispatchEvent(new Event("input", { bubbles: true }));
    cvvInput.dispatchEvent(new Event("change", { bubbles: true }));

    // Fill name
    if (nameInput) {
      nameInput.value = "Julia Sex";
      nameInput.dispatchEvent(new Event("input", { bubbles: true }));
      nameInput.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Fill address
    if (addressLine1Input) {
      addressLine1Input.value = "123 South Figueroa Street";
      addressLine1Input.dispatchEvent(new Event("input", { bubbles: true }));
      addressLine1Input.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (cityInput) {
      cityInput.value = "Los Angeles";
      cityInput.dispatchEvent(new Event("input", { bubbles: true }));
      cityInput.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (stateInput) {
      stateInput.value = "California";
      stateInput.dispatchEvent(new Event("input", { bubbles: true }));
      stateInput.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (zipInput) {
      zipInput.value = "90012";
      zipInput.dispatchEvent(new Event("input", { bubbles: true }));
      zipInput.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Select country United States
    if (countrySelect) {
      countrySelect.value = "US"; // Assuming value for United States is "US"
      countrySelect.dispatchEvent(new Event("change", { bubbles: true }));
    }

    console.log("Form auto-filled");
  }
}

// Use MutationObserver to detect when the form appears
const observer = new MutationObserver((mutations) => {
  // Check if the card number input is now present
  if (document.querySelector("input[placeholder*='4463']") || document.querySelector("input[name='cardNumber']")) {
    fillForm();
    observer.disconnect(); // Stop observing once filled
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also try filling immediately in case form is already loaded
fillForm();

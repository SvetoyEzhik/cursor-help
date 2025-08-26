# sh: Card Generator For Stripe

## Overview
This Chrome extension, developed as part of an educational project for studying white-hat hacking, automatically generates and fills card details into Stripe payment forms for testing purposes. It is intended **solely for educational use** in controlled environments to demonstrate vulnerabilities in payment form handling.

> **⚠️ WARNING: This software is for educational purposes only. Unauthorized use, distribution, or modification of this code is strictly prohibited and may violate applicable laws, including those related to intellectual property and financial regulations. Use responsibly and only in environments where you have explicit permission.**

## Features
- Generates valid card numbers with a Luhn algorithm check digit.
- Automatically fills Stripe payment forms with card details, CVV, and billing information.
- Uses a `MutationObserver` to detect dynamically loaded forms.
- Supports specific Stripe checkout URLs (`https://checkout.stripe.com/*` and `https://*.stripe.com/*`).

## Installation
To install the extension for testing in a development environment:
1. Download and unzip the extension archive.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** in the top-right corner.
4. Click **Load unpacked** and select the folder containing the unzipped extension files.
5. The extension will appear in your Chrome browser and activate on matching Stripe URLs.

## Usage
- The extension automatically activates on Stripe payment pages.
- It generates a random card number starting with the prefix `446334140629`, a valid CVV, and fills in predefined billing details (e.g., name: "Julia Sex", address: "123 South Figueroa Street, Los Angeles, CA 90012").
- No user interaction is required; the form is filled as soon as it is detected.

## Copyright and Licensing
© 2025 shneural. All rights reserved.

This software is licensed for **educational use only**. Unauthorized copying, modification, distribution, or use of this software, in whole or in part, is strictly prohibited without explicit permission from the author. Violators may be subject to legal action under applicable copyright and intellectual property laws.

For inquiries regarding usage or licensing, contact the author via Telegram: `@shneural`.

## Disclaimer
This project was created as part of a university course on ethical hacking to demonstrate vulnerabilities in payment systems. **It must not be used for any illegal activities, including unauthorized testing of live payment systems or services like Cursor Free Trial.** The author is not responsible for any misuse of this software. Always obtain explicit permission from system owners before conducting security testing.

## Development Notes
- The extension uses a content script (`content.js`) to handle form detection and filling.
- The `manifest.json` specifies the extension's permissions and target URLs.
- Ensure all form selectors match the target Stripe form structure for reliable operation.

## Contact
For questions or feedback, contact the author via Telegram: `@shneural`.
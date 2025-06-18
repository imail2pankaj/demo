# Front-End Developer Test - Sign Up & Sign In Modal Pages

## Overview
Create two modal dialogs for user authentication:
- **Sign Up** modal
- **Sign In** modal

These modals should be accessible from your main page and should allow users to sign up or sign in without navigating away.

## Requirements

### 1. Sign Up Modal
- Fields:
  - Name
  - Email
  - Password
  - Terms & Conditions Acceptance (checkbox)
- Submit button
- Validation:
  - All fields are required
  - Email format validation
  - Password strength validation (optional)
  - Terms acceptance must be checked
- On successful submission:
  - Show a success message or redirect as needed

### 2. Sign In Modal
- Fields:
  - Email
  - Password
- Submit button
- Validation:
  - All fields are required
  - Email format validation
- On successful submission:
  - Show a success message or proceed to authenticated area

## Design & Style
- Use your preferred CSS framework (Bootstrap, Tailwind, etc.) or custom styles
- Modals should be responsive and accessible
- Clear and user-friendly UI

## Functionality
- Clicking on "Sign Up" or "Sign In" buttons opens the respective modal
- Modal can be closed by clicking outside or on a close button
- Implement basic client-side validation
- (Optional) Connect to API endpoints for sign-up/sign-in actions

## Additional Notes
- Focus on clean, maintainable code
- Use semantic HTML
- Ensure accessibility considerations (ARIA labels, focus management, etc.)

## Submission
- Include all HTML, CSS, and JavaScript files
- Demonstrate the modals working as described
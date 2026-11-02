# React Contact Form with Zod Validation

Companion repository for the Dev.to article: [Building an Enterprise-Grade Contact Form in React with Zod and CSS Modules](https://dev.to/ekosarya/building-an-enterprise-grade-contact-form-in-react-with-zod-and-css-modules-bi4)

A clean, modular, and accessible Contact Form built using React, Zod, React Hook Form, and CSS Modules. Designed with maintainability and reliable client-side validation in mind, without unnecessary complexity or external UI libraries.

## Features

- 🛡️ **Schema-Based Validation:** Uses Zod to define structured validation rules for name, email, phone number, and message fields.
- ⚓ **Efficient Form Management:** Powered by React Hook Form to handle form state, field registration, validation errors, and form submission.
- ♿ **User-Friendly Validation Feedback:** Displays field-specific error messages and visual indicators to help users correct invalid inputs.
- 📱 **Responsive Layout:** Clean and adaptable form interface with internal scrolling for smaller screens.
- 💡 **Submission States:** Includes loading feedback, disabled submit button, success notification, and automatic form reset after successful submission.
- 🧩 **Modular Styling:** Uses CSS Modules to keep component styles scoped and prevent unintended style conflicts.

## Tech Stack

- **React:** v19.x
- **Vite:** v8.x
- **Zod:** v4.6.x
- **React Hook Form:** v7.91.x
- **@hookform/resolvers:** v6.0.x
- **CSS Modules:** Component-scoped styling

## Project Structure

```text
src
├── App.jsx
├── components
│   ├── ContactForm.jsx
│   └── ContactForm.module.css
├── main.css
├── main.jsx
└── schemas
    └── contactSchema.js
```

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js v22.0 or later
- npm

Basic knowledge of React, JavaScript (ES6+), and CSS Modules is also recommended.

### 1. Clone the Repository

```bash
git clone https://github.com/ekosarya/zod-form-validation.git
cd zod-form-validation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

## Important Note

This project demonstrates client-side form validation. Client-side validation alone is not sufficient for production applications. Always implement independent validation on the server side before processing submitted data.

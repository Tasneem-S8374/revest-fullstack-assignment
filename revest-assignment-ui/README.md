# Frontend Application

This is a dynamic form-based React application.

The form fields are generated dynamically using JSON configuration.

---

## Features

Dynamic Form Rendering

The form is generated based on JSON configuration.

Supported field types:

TEXT  
LIST (Dropdown)  
RADIO (Radio buttons)

---

## Form Fields

Example fields:

Full Name  
Email  
Gender  
Love React?

---

## Validation

Form validation is implemented using:

React Hook Form

Validations include:

Required fields  
Minimum length  
Maximum length

---

## UI Library

Material UI is used for styling and responsiveness.

Components used:

TextField  
Select  
RadioGroup  
Button  
Container  
Typography

---

## Data Persistence

Form submission data is stored in:

Local Storage

Example:
localStorage.setItem("formData", JSON.stringify(data))

---

## Running the Application

Install dependencies:

npm install

Start application:

npm start

Application runs on:

## http://localhost:3000

## Technologies Used

React.js  
Material UI  
React Hook Form  
JavaScript

revest-fullstack-assignment
│
├── README.md
│
├── backend
│ ├── README.md
│ ├── product-service
│ └── order-service
│
└── frontend
└── README.md

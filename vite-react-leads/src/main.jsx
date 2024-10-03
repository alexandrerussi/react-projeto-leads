import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const leads = [
  {name: "Alexandre Russi Junior", email: "ale1@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale2@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale3@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale4@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale5@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale6@email.com", numPhone: "+55 11 98765-4321"}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App leads={leads} />
  </StrictMode>,
)

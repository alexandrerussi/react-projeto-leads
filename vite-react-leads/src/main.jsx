import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const leads = [
  {name: "Alexandre Russi Junior", email: "ale@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Alexandre Russi Junior", email: "ale@email.com", numPhone: "+55 11 98765-4321"}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App leads={leads} />
  </StrictMode>,
)

import React from "react";

const Button = ({ styles }) => (
  <button type="button" onClick={(e) => {
    e.preventDefault();
    window.location.href='https://forms.gle/uKFjDi7n8nj4Ckzw7';
    }} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Send Email
  </button>
);

export default Button;

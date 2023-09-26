import React from 'react';

type InputProps = {
  label?: string,
  className?: string,
  placeholder?: string
};

const Input: React.FC<InputProps> = ({ label, className, placeholder }) => {

  return <div>
    {label && <label>{label}</label>}
    <input placeholder={placeholder} />
  </div>
}
export default Input;
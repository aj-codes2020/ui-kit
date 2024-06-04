import React from 'react';
import './Form.css';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const Form = ({ children, onSubmit, className = '' }: FormProps) => {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

interface FieldsetProps {
  legend: string;
  children: React.ReactNode;
  className?: string;
}

const Fieldset = ({ legend, children, className = '' }: FieldsetProps) => {
  return (
    <fieldset className={`fieldset ${className}`}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const Label = ({ htmlFor, children, className = '' }: LabelProps) => {
  return (
    <label className={`label ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ id, type, value, onChange, className = '' }: InputProps) => {
  return (
    <input
      className={`input ${className}`}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export { Form, Fieldset, Label, Input };

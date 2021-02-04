import React from 'react';
import { LoginForm, Input } from '../../styles/form';
import Link from 'next/link';

type Props = {
  create: (doc: any) => void;
};

function Register({ create }: Props) {
  const formItem = (id: string, label: string, type?: string) => {
    return (
      <>
        <h5>{label}</h5>
        <Input id={id} type={type || 'text'} placeholder={label} />
      </>
    );
  };

  const onSubmit = () => {
    create({ email: 'test@nmma.co', password: 'P$1ssword', firstName: 'name' });
  };

  return (
    <LoginForm>
      {formItem('firstName', 'First name')}
      {formItem('lastName', 'Last name')}
      {formItem('email', 'Email')}
      <Link href="/">Back</Link> &nbsp;
      <button onClick={() => onSubmit()}> Register</button>
    </LoginForm>
  );
}

export default Register;

import React from 'react';
import { LoginFormWrapper, Input } from '../../styles/form';
import Link from 'next/link';
import { getValue } from '../../common/utils';

type Props = {
  create: (doc: any) => void;
};

function Register({ create }: Props) {
  const formItem = (name: string, label: string, type?: string) => {
    return (
      <>
        <h5>{label}</h5>
        <Input
          name={name}
          type={type || 'text'}
          placeholder={label}
          required={true}
        />
      </>
    );
  };

  const onSubmit = event => {
    event.preventDefault();

    create({
      email: getValue('email'),
      password: getValue('password'),
      firstName: getValue('firstName'),
      lastName: getValue('lastName')
    });
  };

  return (
    <LoginFormWrapper onSubmit={onSubmit}>
      {formItem('firstName', 'First name')}
      {formItem('lastName', 'Last name')}
      {formItem('email', 'Email', 'email')}
      {formItem('password', 'Password', 'password')}
      <Link href="/">Back</Link> &nbsp;
      <button type="submit"> Register</button>
    </LoginFormWrapper>
  );
}

export default Register;

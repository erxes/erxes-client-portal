import React from 'react';
import { LoginFormWrapper, Input } from '../../styles/form';
import Link from 'next/link';
import { getValue } from '../../common/utils';

type Props = {
  login: (doc: any) => void;
};

function Login({ login }: Props) {
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

    login({
      email: getValue('email'),
      password: getValue('password')
    });
  };

  return (
    <LoginFormWrapper id="loginForm" onSubmit={onSubmit}>
      {formItem('email', 'Email', 'email')}
      {formItem('password', 'Password', 'password')}
      <Link href="/">Back</Link> &nbsp;
      <button type="submit"> Login</button>
    </LoginFormWrapper>
  );
}

export default Login;

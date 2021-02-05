import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { mutations } from '../graphql';
import Login from '../components/Login';

type Props = {};

function LoginContainer(props: Props) {
  const [loginUser, { data, error }] = useMutation(gql(mutations.login));

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    window.location.href = '/';
  }

  const login = values => {
    loginUser({ variables: values });
  };

  const updatedProps = {
    ...props,
    login
  };

  return <Login {...updatedProps} />;
}

export default LoginContainer;

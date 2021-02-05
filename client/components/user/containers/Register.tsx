import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { mutations } from '../graphql';
import Register from '../components/Register';

type Props = {};

function RegisterContainer(props: Props) {
  const [addUser, { data, error }] = useMutation(gql(mutations.createUser));

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    window.location.href = '/';
  }

  const create = values => {
    addUser({ variables: values });
  };

  const updatedProps = {
    ...props,
    create
  };

  return <Register {...updatedProps} />;
}

export default RegisterContainer;

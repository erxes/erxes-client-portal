import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { mutations } from '../../user/graphql';
import Header from '../components/Header';
import { Config, ICustomer, Topic } from '../../types';

type Props = {
  config: Config;
  currentUser?: ICustomer;
};

function HeaderContainer(props: Props) {
  const [logout, { data, error }] = useMutation(gql(mutations.logout));

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    window.location.href = '/';
  }

  const updatedProps = {
    ...props,
    logout
  };

  return <Header {...updatedProps} />;
}

export default HeaderContainer;

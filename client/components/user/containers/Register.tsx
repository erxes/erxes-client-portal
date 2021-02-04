import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { mutations } from '../graphql';
import Register from '../components/Register';

type Props = {};

function TasksContainer(props: Props) {
  const [addUser, { data }] = useMutation(gql(mutations.createUser));

  const create = doc => {
    addUser({ variables: doc });
  };

  const updatedProps = {
    ...props,
    create
  };

  return <Register {...updatedProps} />;
}

export default TasksContainer;

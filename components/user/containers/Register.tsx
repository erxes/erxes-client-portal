import React from 'react';
import { mutations } from '../graphql';
import Register from '../components/Register';
import { IButtonMutateProps } from '../../common/types';
import ButtonMutate from '../../common/ButtonMutate';

type Props = {};

function RegisterContainer(props: Props) {
  const renderButton = ({ values, isSubmitted }: IButtonMutateProps) => {
    const callbackResponse = () => window.location.href = '/';

    values.configId = process.env.CLIENT_PORTAL_CONFIG_ID

    return (
      <ButtonMutate
        mutation={mutations.createUser}
        variables={values}
        callback={callbackResponse}
        isSubmitted={isSubmitted}
        type="submit"
        icon="none"
      >
        Register
      </ButtonMutate>
    );
  };

  const updatedProps = {
    ...props,
    renderButton
  };

  return <Register {...updatedProps} />;
}

export default RegisterContainer;
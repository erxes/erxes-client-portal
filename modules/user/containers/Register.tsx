import React from 'react';
import { mutations } from '../graphql';
import Register from '../components/Register';
import { IButtonMutateProps } from '../../common/types';
import ButtonMutate from '../../common/ButtonMutate';
import { getEnv } from '../../../utils/configs';

type Props = {};

function RegisterContainer(props: Props) {
  const { REACT_APP_HAS_COMPANY } = getEnv();

  const renderButton = ({ values, isSubmitted }: IButtonMutateProps) => {
    const callbackResponse = () => (window.location.href = '/');

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
    hasCompany: REACT_APP_HAS_COMPANY === 'true',
    renderButton
  };

  return <Register {...updatedProps} />;
}

export default RegisterContainer;

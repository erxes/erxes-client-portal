import React from 'react';
import { LoginFormWrapper } from '../../styles/form';
import FormControl from '../../common/form/Control';
import Form from '../../common/form/Form';
import FormGroup from '../../common/form/Group';
import { IButtonMutateProps } from '../../common/types';
import Button from '../../common/Button';

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
};

function Login({ renderButton }: Props) {
  const renderContent = formProps => {
    const { values, isSubmitted } = formProps;

    return (
      <>
        <FormGroup>
          <FormControl
            {...formProps}
            name="email"
            placeholder={'registered@email.com'}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="password"
            type="password"
            placeholder={'password'}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <Button href="/">Home</Button>

          {renderButton({
            values,
            isSubmitted
          })}
        </FormGroup>
      </>
    );
  };

  return (
    <LoginFormWrapper>
      <h2>{'Sign in'}</h2>
      <Form renderContent={renderContent} />
    </LoginFormWrapper>
  );
}

export default Login;

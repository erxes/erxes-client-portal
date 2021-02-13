import React from 'react';
import { LoginFormWrapper } from '../../styles/form';
import FormControl from '../../common/form/Control';
import Form from '../../common/form/Form';
import FormGroup from '../../common/form/Group';
import Button from '../../common/Button';
import { IButtonMutateProps } from '../../common/types';

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
};

function Register({ renderButton }: Props) {
  const renderContent = formProps => {
    const { values, isSubmitted } = formProps;

    return (
      <>
        <FormGroup>
          <FormControl
            {...formProps}
            name="firstName"
            placeholder={'First name'}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="lastName"
            placeholder={'Last name'}
            required={true}
          />
        </FormGroup>

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
      <h2>{'Register'}</h2>
      <Form renderContent={renderContent} />
    </LoginFormWrapper>
  );
}

export default Register;

import React, { useState } from 'react';
import { LoginFormWrapper } from '../../styles/form';
import FormControl from '../../common/form/Control';
import Form from '../../common/form/Form';
import FormGroup from '../../common/form/Group';
import { IButtonMutateProps } from '../../common/types';
import Button from '../../common/Button';
import { LOGIN_TYPES } from '../types';

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  hasCompany: boolean;
};

function Login({ renderButton, hasCompany }: Props) {
  const [type, changeType] = useState(LOGIN_TYPES.CUSTOMER);

  const onChange = e => {
    changeType(e.target.value);
    e.isDefaultPrevented();
  };

  const renderContent = formProps => {
    const { values, isSubmitted } = formProps;

    return (
      <>
        {hasCompany && (
          <FormGroup>
            <FormControl componentClass="select" onChange={onChange}>
              <option value={LOGIN_TYPES.CUSTOMER}>Customer</option>
              <option value={LOGIN_TYPES.COMPANY}>Company</option>
            </FormControl>
          </FormGroup>
        )}

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
            values: hasCompany ? { ...values, type } : values,
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

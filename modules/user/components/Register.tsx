import React, { useState } from "react";
import { LoginFormWrapper } from "../../styles/form";
import FormControl from "../../common/form/Control";
import Form from "../../common/form/Form";
import FormGroup from "../../common/form/Group";
import { IButtonMutateProps } from "../../common/types";
import { LOGIN_TYPES } from "../types";

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  hasCompany: boolean;
};

function Register({ renderButton, hasCompany }: Props) {
  const [type, changeType] = useState(LOGIN_TYPES.CUSTOMER);
  const [showlogin, setLogin] = useState(false);

  const onChange = (e) => {
    changeType(e.target.value);
    e.isDefaultPrevented();
  };

  const renderContent = (formProps) => {
    const { values, isSubmitted } = formProps;

    return (
      <>
        {hasCompany && (
          <FormGroup>
            <FormControl componentClass="select" onChange={onChange}>
              <option value={LOGIN_TYPES.CUSTOMER}>Харилцагч</option>
              <option value={LOGIN_TYPES.COMPANY}>Байгууллага</option>
            </FormControl>
          </FormGroup>
        )}

        {type === LOGIN_TYPES.CUSTOMER ? (
          <>
            <FormGroup>
              <FormControl
                {...formProps}
                name="firstName"
                placeholder={"Нэр"}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                {...formProps}
                name="lastName"
                placeholder={"Овог"}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <FormControl {...formProps} name="phone" placeholder={"Утас"} />
            </FormGroup>
          </>
        ) : (
          <>
            <FormGroup>
              <FormControl
                {...formProps}
                name="companyName"
                placeholder={"Байгууллагын нэр"}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                {...formProps}
                name="companyRegistrationNumber"
                placeholder={"Байгууллагын утас"}
                required={true}
                type="number"
              />
            </FormGroup>
          </>
        )}

        <FormGroup>
          <FormControl
            {...formProps}
            name="email"
            placeholder={"registered@email.com"}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="password"
            type="password"
            placeholder={"Нууц үг"}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          {renderButton({
            values: { ...values, type },
            isSubmitted,
          })}
        </FormGroup>
      </>
    );
  };

  return (
    <LoginFormWrapper>
      <h2>{"Бүртгүүлэх"}</h2>
      <Form renderContent={renderContent} />
    </LoginFormWrapper>
  );
}

export default Register;

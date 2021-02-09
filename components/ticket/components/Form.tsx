import React from 'react';
import Layout from '../../main/containers/Layout';
import FormControl from '../../common/form/Control';
import Form from '../../common/form/Form';
import FormGroup from '../../common/form/Group';
import { IButtonMutateProps } from '../../common/types';
import Button from '../../common/Button';

type Props = {};

export default function TicketForm({}: Props) {
  const renderContent = formProps => {
    const { values, isSubmitted } = formProps;
    console.log(values, isSubmitted);

    return (
      <>
        <FormGroup>
          <FormControl
            {...formProps}
            name="ticketNumber"
            placeholder="Ticket number"
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="requestor"
            type="email"
            placeholder="Requestor"
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            {...formProps}
            name="subject"
            placeholder="Subject"
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            type="select"
            name="pirority"
            placeholder="Pirority"
            required={true}
          >
            <option value="normal">Normal</option>
            <option value="critical">Critical</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <FormControl
            type="textarea"
            name="description"
            placeholder="Description"
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <Button href="/tickets">cancel</Button>

          {/* {renderButton({
            values,
            isSubmitted
          })} */}
        </FormGroup>
      </>
    );
  };

  return (
    <Layout>
      <h2>New ticket</h2>
      <Form renderContent={renderContent} />
    </Layout>
  );
}

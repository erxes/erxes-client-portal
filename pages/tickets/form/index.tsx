import Layout from '../../../modules/main/containers/Layout';
import TicketForm from '../../../modules/ticket/containers/Form';

function Ticket() {
  return (
    <Layout>
      {props => {
        return <TicketForm {...props} />;
      }}
    </Layout>
  );
}

export default Ticket;

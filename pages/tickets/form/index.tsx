import Layout from '../../../components/main/containers/Layout';
import TicketForm from '../../../components/ticket/containers/Form';

function Ticket() {
  return (
    <Layout>
      {(props) => {
        return <TicketForm {...props} />;
      }}
    </Layout>
  );
}

export default Ticket;
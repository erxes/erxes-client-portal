import Layout from '../../components/main/containers/Layout';
import TicketList from '../../components/ticket/containers/Ticket';

function Ticket() {
  return (
    <Layout>
      {props => {
        return <TicketList {...props} />;
      }}
    </Layout>
  );
}

export default Ticket;
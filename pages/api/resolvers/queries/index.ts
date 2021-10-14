import user from './user';
import logs from './logs';
import notifications from './notifications';
import erxes from './erxesQueries';

export default {
  ...user,
  ...logs,
  ...notifications,
  ...erxes
};

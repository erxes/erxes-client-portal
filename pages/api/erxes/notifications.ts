import { init } from '../db/connection';
import Notifications from '../db/models/Notifications';

init();

// url: /mobile/notification
export default async function handler(req, res) {
  if (req.headers['erxes-token']) {
    return res.status(200).send('success');
  }

  const { receiver, content } = req.body;

  await Notifications.createNotification({
    receiver,
    title: content
  });

  return res.status(200).send('success');
}

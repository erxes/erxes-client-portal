import { init } from '../db/connection';
import Users from '../db/models/Users';
import * as admin from 'firebase-admin';

init();

// url: /mobile/notification
export default async function handler(req, res) {
  if (req.headers['erxes-token']) {
    return res.status(200).send('success');
  }

  const { receivers, title, body, conversationId } = req.body;

  if (!admin.apps.length) {
    return;
  }

  const transporter = admin.messaging();
  const tokens: string[] = [];

  if (receivers) {
    tokens.push(
      ...(await Users.find({ _id: { $in: receivers } }).distinct(
        'deviceTokens'
      ))
    );
  }

  if (tokens.length > 0) {
    // send notification
    for (const token of tokens) {
      try {
        await transporter.send({
          token,
          notification: { title, body },
          data: { conversationId }
        });
      } catch (e) {
        throw new Error(e);
      }
    }
  }

  return res.status(200).send('success');
}

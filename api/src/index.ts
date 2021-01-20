import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { getEnv } from 'erxes-api-utils';
import * as express from 'express';
import * as helmet from 'helmet';
import { createServer } from 'http';
import * as mongoose from 'mongoose';
import apolloServer from './apolloClient';
import { connect } from './db/connection';
import { debugDb, debugInit } from './debugger';

// load config
dotenv.config();

const { NODE_ENV, JWT_TOKEN_SECRET } = process.env;

if (!JWT_TOKEN_SECRET) {
  throw new Error('Please configure JWT_TOKEN_SECRET environment variable.');
}

const PORT = getEnv({ name: 'PORT' });
const CLIENT_PORTAL_DOMAIN = getEnv({ name: 'CLIENT_PORTAL_DOMAIN' });
const MONGO_URL = getEnv({ name: 'MONGO_URL' });
const TEST_MONGO_URL = getEnv({ name: 'TEST_MONGO_URL' }); 

export const app = express();

app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));
app.use( express.json({ limit: '15mb' }));

// Cookie middleware
app.use(cookieParser());

// Enable cors
const corsOptions = {
  credentials: true,
  origin: [CLIENT_PORTAL_DOMAIN],
};

app.use(cors(corsOptions));

apolloServer.applyMiddleware({ app, path: '/graphql', cors: corsOptions });

// Secure connections
app.use(helmet({ frameguard: { action: 'sameorigin' } }));

// Error handling middleware
app.use((error, _req, res, _next) => {
  console.log(error.stack);
  res.status(500).send(error.message);
});

// Wrap express server
const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  let mongoUrl = MONGO_URL;

  if (NODE_ENV === 'test') {
    mongoUrl = TEST_MONGO_URL;
  }

  connect(mongoUrl).then(async () => {
    debugDb('Succefully connected to MongoDB');
  });

  debugInit(`GraphQL Server is now running on ${PORT}`);
});

// GRACEFULL SHUTDOWN
process.stdin.resume(); // so the program will not close instantly

// If the Node process ends, close the Mongoose connection
if (NODE_ENV === 'production') {
  (['SIGINT', 'SIGTERM'] as NodeJS.Signals[]).forEach(sig => {
    process.on(sig, () => {
      // Stops the server from accepting new connections and finishes existing connections.
      httpServer.close((error: Error | undefined) => {
        if (error) {
          console.error(error.message);
          process.exit(1);
        }

        mongoose.connection.close(() => {
          console.log('Mongoose connection disconnected');
          process.exit(0);
        });
      });
    });
  });
}
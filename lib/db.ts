import { createConnection, getConnection, Connection, getConnectionManager } from 'typeorm';

import connectionOptions from 'ormconfig';

let connectionCreated = false;

export const getOrCreateConnection = async () => {
  try {
    const currentConnection = getConnection();
    if (connectionCreated) return currentConnection;
    await currentConnection.close();
  } catch {}

  connectionCreated = true;

  return await createConnection(connectionOptions);
};


const { Client } = require('pg');

const connectionString = "postgresql://postgres.oyluzqchdffjalxchbkp:DGdanger77%40@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true";

async function testConnection() {
  const client = new Client({
    connectionString: connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log('Connecting to Supabase...');
    await client.connect();
    console.log('Connected successfully!');
    const res = await client.query('SELECT current_database(), current_user');
    console.log('Result:', res.rows[0]);
    await client.end();
  } catch (err) {
    console.error('Connection failed:', err.message);
    if (err.detail) console.error('Detail:', err.detail);
    if (err.hint) console.error('Hint:', err.hint);
  }
}

testConnection();

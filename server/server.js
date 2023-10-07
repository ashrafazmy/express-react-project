import express from 'express';
import {createClient} from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const port = 5500; // Use the environment variable if available, otherwise use 5000
const supabaseURL = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseURL, supabaseAnonKey);


//get ALL users
app.get('/users', async (req, res) => {
  const {data, error} = await supabase
      .from('users')
      .select()
  res.send(data);
});

//get users by id
app.get('/users/:id', async (req, res) => {
  const {data, error} = await supabase
      .from('users')
      .select()
      .is('id', req.params.id)
  res.send(data);
});


app.get('/', (req, res) => {
  res.send("Hello I am working my friend Supabase <3");
});

app.get('*', (req, res) => {
  res.send("Hello again I am working my friend to the moon and behind <3");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
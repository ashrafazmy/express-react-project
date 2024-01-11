// pages/api.js

import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseAnonKey);

export default async function handler(req, res) {

  if (req.method == 'POST'){
    try {
      const commentBody = req.body;

      const { data: newComment, error: insertError } = await supabase
      .from('comment')
      .insert([commentBody]);

      if (insertError) {
        throw insertError;
      }
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: 'An internal server error occurred' });
    }
  } else if(req.method == 'GET'){

    try {
      const { data: users, error: usersError } = await supabase
        .from('comment')
        .select();
  
      if (usersError) {
        throw usersError;
      }
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'An internal server error occurred' });
    }
  }
}

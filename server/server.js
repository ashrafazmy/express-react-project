import express from 'express';
import {createClient} from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const port = 5500; // Use the environment variable if available, otherwise use 5000
const supabaseURL = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseURL, supabaseAnonKey);
var data = [
  {}
]

app.get('/api', async (req, res) => {
  const {data, error} = await supabase
      .from('routes')
      .select()
  res.send(data);
});


app.get('/api/projects', async (req, res) => {
  const {data, error} = await supabase
      .from('projects')
      .select()
  res.send(data);
});

app.get('/api/educations', async (req, res) => {
  const {data, error} = await supabase
      .from('educations')
      .select()
  res.send(data);
});

app.get('/api/experiences', async (req, res) => {
  const {data, error} = await supabase
      .from('experiences')
      .select()
  res.send(data);
});

app.get('/api/contacts', async (req, res) => {
  const {data, error} = await supabase
      .from('contacts')
      .select()
  res.send(data);
});

//get users by id
app.get('/api/resume/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    //resume
    const { data: user, error: userError } = await supabase
      .from('resume')
      .select()
      .eq('id', userId);

    if (userError) {
      throw userError;
    }

    // projects
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select()
      .eq('resume_id', userId);

    if (projectsError) {
      throw projectsError;
    }

    // experiences
    const { data: experiences, error: experienceError } = await supabase
      .from('experiences')
      .select()
      .eq('resume_id', userId);

    if (experienceError) {
      throw experienceError;
    }

    //education
    const { data: educations, error: educationError } = await supabase
      .from('educations')
      .select()
      .eq('resume_id', userId);

    if (educationError) {
      throw educationError;
    }

    //contacts
    const { data: contacts, error: contactError } = await supabase
      .from('contacts')
      .select()
      .eq('resume_id', userId);

    if (contactError) {
      throw contactError;
    }

    // Combine the data into a single response object
    const responseData = {
      resume: {
        ...user[0], // Assuming you expect only one user
        projects,
        experiences,
        educations,
        contacts
      }
    };

    res.send(responseData);
  } catch (error) {
    res.status(500).send({ error: 'An internal server error occurred' });
  }
});

app.get('/api/resume', async (req, res) => {
  try {
    const { data: users, error: usersError } = await supabase
      .from('resume')
      .select();

    if (usersError) {
      throw usersError;
    }

    const responseData = [];

    for (const user of users) {
      const userId = user.id;
      // projects
      const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select()
      .eq('resume_id', userId);

      if (projectsError) {
        throw projectsError;
      }

      // experiences
      const { data: experiences, error: experienceError } = await supabase
        .from('experiences')
        .select()
        .eq('resume_id', userId);

      if (experienceError) {
        throw experienceError;
      }
      //education
      const { data: educations, error: educationError } = await supabase
        .from('educations')
        .select()
        .eq('resume_id', userId);

      if (educationError) {
        throw educationError;
      }

      //contacts
      const { data: contacts, error: contactError } = await supabase
        .from('contacts')
        .select()
        .eq('resume_id', userId);

      if (contactError) {
        throw contactError;
      }

      const userData = {
        ...user, 
        experiences,
        projects,
        educations,
        contacts,
      };

      responseData.push(userData);
    }

    res.send(responseData);
  } catch (error) {
    res.status(500).send({ error: 'An internal server error occurred' });
  }
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
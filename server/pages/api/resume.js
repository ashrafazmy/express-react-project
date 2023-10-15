// pages/api/resume.js

import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseAnonKey);

export default async function handler(req, res) {
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

      // Projects
      const { data: projects, error: projectsError } = await supabase
        .from('projects')
        .select()
        .eq('resume_id', userId);

      if (projectsError) {
        throw projectsError;
      }

      // Experiences
      const { data: experiences, error: experienceError } = await supabase
        .from('experiences')
        .select()
        .eq('resume_id', userId);

      if (experienceError) {
        throw experienceError;
      }

      // Educations
      const { data: educations, error: educationError } = await supabase
        .from('educations')
        .select()
        .eq('resume_id', userId);

      if (educationError) {
        throw educationError;
      }

      // Contacts
      const { data: contacts, error: contactError } = await supabase
        .from('contacts')
        .select()
        .eq('resume_id', userId);

      if (contactError) {
        throw contactError;
      }

       // comment
       const { data: comment, error: commentError } = await supabase
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
        comment,
      };

      responseData.push(userData);
    }

    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}

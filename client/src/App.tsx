import React, {useEffect, useState} from 'react'

interface User {
  id: number;
  name: string;
  description: string;
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
  contacts: Contacts[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  repo: string;
  live: string;
  stack: string;
  resume_id: number;
}

interface Experience {
  id: number;
  resume_id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

interface Education {
  id: number;
  resume_id: number;
  school: string;
  course: string;
  location: string;
  duration: string;
  cgpa: string;
}

interface Contacts {
  id: number;
  resume_id: number;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

function App() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => { 
    getUsers()
    }, [])

  async function getUsers(){
    try {
      const response = await fetch('/api/resume');
      const data = await response.json();
      console.log('data',users);
      if (data) {
        setUsers(data);
      } else {
        console.error('Empty response from API');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  } 

  return (
    <div>
      hellow worlds
    </div>
  )
}

export default App
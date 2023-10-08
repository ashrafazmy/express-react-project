import React, {useEffect, useState} from 'react'

function App() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => { 
    getUsers()
    }, [])

  async function getUsers(){
    try {
      const response = await fetch('/resume');
      const data = await response.json();
      console.log('data',data);
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  } 

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>: {user.description}
            <ul>
              <h2>Projects</h2>

              {user.projects.map((project) => (
                <li key={project.id}>
                  <strong>Project Name:</strong> {project.name}
                </li>
              ))}
            </ul>

            <ul>
              <h2>Experiences</h2>

              {user.experiences.map((exp) => (
                <li key={exp.id}>
                  <strong>Experience Title:</strong> {exp.title}
                  <div>{exp.responsibilities}</div>
                </li>
              ))}
            </ul>

            <ul>
              <h2>Education</h2>

              {user.educations.map((edu) => (
                <li key={edu.id}>
                  <strong>School Name:</strong> {edu.school}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
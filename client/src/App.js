import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  async function getUsers(){
    const response  = await fetch('/users');
    const data = await response.json();
    setCountries(data);

  }
  useEffect(() => {
    fetch("/users").then( //fetching the api
      response => response.json() //getting the response in json
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App
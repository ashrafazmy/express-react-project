import React from 'react'

function Navigate() {

    return (
        <div className='container'>
            <h2 id='navigate'>Navigate using Postman</h2>

            <h4>Postman is an API client that be used to view API endpoints easily.</h4>
            <ol>
                <li>Install Postman</li>
                <li>open your postman and create new workspace. </li>
                <li>select GET and enter the following request link</li>
                <li>View the JSON response in the client. To explore more endpoints, click 
                    <a href='/api'> here</a></li>
            </ol>


        </div>)
  }

  export default Navigate;

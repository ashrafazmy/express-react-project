import React from 'react'
import { copyContent } from '../../pages/index.js';

function Navigate() {

    return (
        <div className='container'>
            <h2 id='navigate'>Using Postman for CRUD API</h2>
            <div>Postman is an API platform for building and using APIs. It allows user to interact with the API using a visual interface that makes it easy to test the API endpoints. </div>

            <div className="step">
                <h3>Step 1: Download and Install Postman</h3>
                <div className="contentNav">Go to the <a href="https://www.postman.com/downloads/">Postman website</a> and download the appropriate version for your operating system (Windows, macOS, or Linux).</div>
            </div>

            <div className="step">
                <h3>Step 2: Open Postman</h3>
                <div className="contentNav">Once installed, open Postman on your computer.</div>
            </div>

            <div className="step">
                <h3>Step 3: Create a New Request</h3>
                <div className="contentNav">Click on "New" in the top left corner. Select "HTTP".</div>
            </div>

            <div className="step">
                <h3>Step 4: Create and Send Requests</h3>
                <div className="contentNav">
                    <div>Choose the HTTP method GET and enter the following in the URL bar:
                    </div>
                    <span id='myText'>https://ashrafazmy-resume-api.vercel.app/</span>
                    <button className='button' onClick={() => copyContent('myText')}>Copy</button>
                </div>
            </div>

            <div className="contentNav">
                The JSON response can now be viewed. the endpoint /api will list all the available endpoints, explore <a href='#endpoints'>here</a>.
            </div>
        
        </div>)
  }

  export default Navigate;

import React from 'react'
import { copyContent } from '../../pages/index.js';

function Navigate() {

    return (
        <div className='container'>
            <h2 id='navigate'>Using Postman</h2>
            <div>Postman is an API platform for building and using APIs. It allows user to interact with the API using a visual interface that makes it easy to test the API endpoints. </div>

            <ol>
                <div>
                    <li>Download and Install Postman</li>
                    <div className="contentNav">Go to the <a href="https://www.postman.com/downloads/">Postman website</a> and download the appropriate version for your operating system (Windows, macOS, or Linux).</div>
                </div>

                <div>
                    <li>Open Postman</li>
                    <div className="contentNav">Once installed, open Postman on your computer.</div>
                </div>

                <div>
                    <li>Create a New Request</li>
                    <div className="contentNav">Click on "New" in the top left corner. Select "HTTP".</div>
                </div>

                <div>
                    <li>Create and Send Requests</li>
                        <div className="contentNav">Choose the HTTP method GET and enter the following in the URL bar:
                        </div>
                        <div className='btn-text'>
                            <span  id='myText'>https://ashrafazmy-resume-api.vercel.app/api</span>
                            <button className='button' onClick={() => copyContent('myText')}>Copy</button>
                        </div>
                </div>
            </ol>

            <div className="contentNav">
                The JSON response can now be viewed. the endpoint /api will list all the available endpoints, explore <a href='#endpoints'>here</a>.
            </div>
        
        </div>)
  }

  export default Navigate;

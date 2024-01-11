import React from 'react'
import { copyContent } from '../../pages/index.js';

function Endpoints() {
    return (
        <div className='container'>
            <h2 id='endpoints'>Endpoints for the REST API</h2>
            <div>When everything is set up, you can navigate my API resume through the endpoints below. Endpoints are just different URLs where you can make a GET request to view different parts of my resume.</div>
            
            <ol>
                <li>Index: shows all api endpoints available</li>
                <div className='btn-text'>
                    <span id='index'>https://ashrafazmy-resume-api.vercel.app/api</span>
                    <button className='button' onClick={() => copyContent('index')}>Copy</button>
                </div>
                    
                <br/>
                <br/>

                <li>Resume: shows my full resume</li>
                <div className='btn-text'>
                    <span id='resume'>https://ashrafazmy-resume-api.vercel.app/api/resume</span>
                    <button className='button' onClick={() => copyContent('resume')}>Copy</button>
                </div>
                
                <br/>
                <br/>

                <li>Projects: displays all the projects that i've worked on</li>
                <div className='btn-text'>
                    <span id='projects'>https://ashrafazmy-resume-api.vercel.app/api/projects</span>
                    <button className='button' onClick={() => copyContent('projects')}>Copy</button>
                </div>

                <br/>
                <br/>

                <li>Experiences: displays my professional experiences</li>
                <div className='btn-text'>

                    <span id='experience'>https://ashrafazmy-resume-api.vercel.app/api/experiences</span>
                    <button className='button' onClick={() => copyContent('experience')}>Copy</button>
                </div>

                <br/>
                <br/>

                <li>Educations: displays my educations</li>
                <div className='btn-text'>
                    <span id='education'>https://ashrafazmy-resume-api.vercel.app/api/educations</span>
                    <button className='button' onClick={() => copyContent('education')}>Copy</button>
                </div>

                <br/>
                <br/>

                <li>Contact Info: shows my contact info</li>
                <div className='btn-text'>
                    <span id='contact'>https://ashrafazmy-resume-api.vercel.app/api/contacts</span>
                    <button className='button' onClick={() => copyContent('contact')}>Copy</button>
                </div>

                <br/>
                <br/>

                <li>Comment: displays comments that are left on my page</li>
                <div className='btn-text'>
                    <span id='comment'>https://ashrafazmy-resume-api.vercel.app/api/comment</span>
                    <button className='button' onClick={() => copyContent('comment')}>Copy</button>
                </div>
                <br/>

                <div class="message">
                    You can leave a comment on my page too by using a POST request to the endpoint, sending the JSON below as a format for the body of the data
                </div>

                <div className='btn-text'>
                    <span id='json'>
                    {"\{"}
                    {"\n"}
                    {"  \"name\": \"your name\",\n"}
                    {"  \"email\": \"your_email@domain.com\",\n"}
                    {"  \"message\": \"your message here! (200 character limit)\"\n"}
                    {"\}"}
                    </span>
                    <button className='button' onClick={() => copyContent('json')}>Copy</button>
                </div>
            </ol>
        </div>)
  }

  export default Endpoints;

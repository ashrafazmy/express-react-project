import React from 'react'

const email = 'ashrafazmy00@gmail.com'
const linkedin = 'https://www.linkedin.com'
function Contacts() {
    return (
        <div className='container'>
            <h2 id='contact'>Contact</h2>
            
            <p>Thanks for checking my API Resume. If you want to contact me or have any questions, please reach out to me at <a href={'mailto:'+ email}>{email}</a>. You can find me on <a href={linkedin}>LinkedIn</a> as well. </p>
        </div>)
  }

  export default Contacts;

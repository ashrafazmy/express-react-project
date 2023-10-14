import '../app/index.css'
import Title from '../app/components/Title'
import Endpoints from '../app/components/Endpoints'
import Navigate from '../app/components/Navigate'
import Contacts from '../app/components/Contacts'
import Content from '../app/components/Content'


export default function About() {

    return( 
    <div >
        <Title/>
        <br/>
        <Content/>
        <br/>
        <Navigate/>
        <br/>
        <Endpoints id='endpoints'/>
        <br/>
        <Contacts/>

    </div>
    )
  }
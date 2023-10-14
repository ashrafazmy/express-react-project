import '../app/index.css'
import Title from '../app/components/Title'
import Endpoints from '../app/components/Endpoints'
import Navigate from '../app/components/Navigate'
import Contacts from '../app/components/Contacts'
import Content from '../app/components/Content'

export const copyContent = async (elementId) => {
    const text = document?.getElementById(elementId)?.innerHTML;
    console.log('text', text);

    if (text) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

export default function About() {

    return( 
    <div >
        <Title/>
        <br/>
        <Content/>
        <br/>
        <Navigate/>
        <br/>
        <Endpoints/>
        <br/>
        <Contacts/>

    </div>
    )
  }
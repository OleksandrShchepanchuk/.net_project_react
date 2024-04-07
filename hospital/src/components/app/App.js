import { Doctor } from '../../pages/doctor/doctors';
import contents from '../../content';



export default function App() {
  return(
    
    <div className='App'>
      {contents.map(content => (
        <Doctor
        key = {content.id}
        image = {content.image}
        name = {content.name}
        location = {content.location}
        specialty = {content.specialty}
        ratings={content.ratings}
        time ={content.time}

        />
      ))}
    </div>
  )
};
import Background from '../assets/images/whisky-glass.jpg'

function About() {
    return (
        <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
          <div className='flex place-items-center h-screen'>
          </div>
      </div>
    )
  }
  
  export default About
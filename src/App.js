import './App.css';
import Testimonio  from './componentes/Testimonio';

const datos = {
  imagen: ["shawn", "sarah", "emma",],
  nombre: ["Shawn Wang", "Sarah Chima", "Emma Bostian",],
  pais: ["Singapur", "Nigeria", "Suecia",],
  cargo: ["Ingeniero de Software", "Ingeniera de Software", "Ingeniera de Software", ],
  empresa: ["Amazon", "ChatDesk", "Spotify", ]
}

function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
        <Testimonio 
          imagen={datos.imagen[0]}
          nombre={datos.nombre[0]}
          pais={datos.pais[0]}
          cargo={datos.cargo[0]}
          empresa={datos.empresa[0]}
          testimonio='Da miedo cambiar de carrera. Solo gané la 
          confianza de que podía programar trabajando a través de 
          los cientos de horas de lecciones gratuitas en freeCodeCamp. 
          Dentro de un año tuve un trabajo de seis cifras como 
          ingeniero de software. freeCodeCamp cambió mi vida.'       
        />
        <Testimonio 
          imagen={datos.imagen[1]}
          nombre={datos.nombre[1]}
          pais={datos.pais[1]}
          cargo={datos.cargo[1]}
          empresa={datos.empresa[1]}
          testimonio='freeCodeCamp fue la puerta de entrada a mi 
          carrera como desarrollador de software. El plan de estudios 
          bien estructurado llevó mis conocimientos de programación 
          de un nivel de principiante total a un nivel muy seguro. 
          Era todo lo que necesitaba para conseguir mi primer 
          trabajo de desarrollador en una empresa increíble.'       
        />
                <Testimonio 
          imagen={datos.imagen[2]}
          nombre={datos.nombre[2]}
          pais={datos.pais[2]}
          cargo={datos.cargo[2]}
          empresa={datos.empresa[2]}
          testimonio='Siempre he tenido problemas para aprender JavaScript. 
            He tomado muchos cursos, pero el curso de freeCodeCamp 
            fue el que se quedó. Estudiar JavaScript, así como estructuras 
            de datos y algoritmos en freeCodeCamp me dio las habilidades 
            y la confianza que necesitaba para conseguir el trabajo
            de mis sueños como ingeniero de software en Spotify.'
        />
      </div>
    </div>
  );
}

export default App;

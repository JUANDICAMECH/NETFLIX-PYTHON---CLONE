import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/* Interfaz del loguin */ }
import ContentLogin from './components/ComponentsLogin/ContentLogin/ContentLogin';

{/* Interfaz del registro */ }
import ContentRegistro from './components/ComponentsRegistro/ContentRegistro/ContentRegistro';

{/* Interfaz del usuario */ }
import ContentPeliculas from './components/ComponentsUsuario/ContentPeliculas/ContentPeliculas';

import ComponentsLogin from './components/ComponentsLogin/ComponentsLogin';

function App() {


  return (
    <> 

    <ComponentsLogin/>
      {/* <ContentLogin/> */}

      {/* <ContentRegistro /> */}

      {/* <ContentPeliculas/> */}


    </>
  )
}

export default App

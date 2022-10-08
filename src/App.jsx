import { useState, useEffect } from 'react'
import { Heading, Image} from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItems';
import logo from './assets/spacex-logo.png'
import * as API from "./services/launches"


export function App() { //exportar individualmente
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getALLLaunches().then(data => setLaunches(data))
  }, []);

  return (
    <>
      <Image m={4} src={logo} alt="" width={300} />
      <Heading as="h1" size="lg">SpaceX Lauches</Heading>
      <section>
        {launches.map(e => (
          <LaunchItem key={e.flight_number} {...e}/>
        ))}
      </section>
    </>
  )
}

// export default App

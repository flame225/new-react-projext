import React , {Fragment, useState} from 'react'
//import {Button} from 'semantic-ui-react'
import EventDashboard from '../../features/events/eventDashboard.jsx/EventDashboard'
import NavBar from '../../features/nav/NavBar'
import { Container } from 'semantic-ui-react'
import './styles.css'
 
export default function App() {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <Fragment>
  <NavBar setFormOpen={setFormOpen}/>
  <Container className='main'>
  <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>

  </Container>
    </Fragment>
  )
}

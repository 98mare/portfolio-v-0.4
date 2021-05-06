import React, { useEffect } from 'react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import { NavLink } from 'react-router-dom'
import './Work.css'
import WorkCard from '../../Components/WorkCard'
import WorkData from '../Data/WorkData.json'



function Work(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (

    <>
      <NavBar />
      <div className='work-container'>
        <h2>Some of my Creations:</h2>

        <div className="works">
          {
            WorkData.data.map((e) => {
              console.log(e.id)
              return (
                <NavLink to={`/work/${e.id}`} exact>
                  <WorkCard logo={e.logo} workDone={e.workDone} clientName={e.clientName} />
                </NavLink>
              )
            })

          }
          < hr />

        </div>
      </div>
      <Footer />
    </>

  )
}

export default Work

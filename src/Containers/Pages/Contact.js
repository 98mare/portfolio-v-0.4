import React, { useEffect } from 'react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import './Contact.css'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-detail">
          <div className="col-1-contact">
            <h5>Address</h5>
            <hr className='hrTwo' />
            <h3>Devithan line, Dharam-18, Nepal</h3>
          </div>
          <div className="col-2-contact">
            <h5>Phone-number</h5>
            <hr className='hrTwo' />
            <h3>+977-9804018915</h3>
          </div>
          <div className="col-3-contact">
            <h5>E-mail</h5>
            <hr className='hrTwo' />
            <h3>sumansunuwar5@gmail.com</h3>
          </div>
        </div>
        <div className="contact-input-section">
          <h5>Feel Free to leave a message</h5>
          <div className="name-email">
            <input type="text" placeholder='name' />
            <input type="text" placeholder='email' />
            <textarea name="mesage" id="" cols="30" rows="10" placeholder='message'></textarea>
            <button>Submit</button>
          </div>
          {/* <textarea name="mesage" id="" cols="30" rows="10" placeholder='message'></textarea>
          <button>Submit</button> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact

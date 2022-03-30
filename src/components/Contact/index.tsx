import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_f84o4ne',
        'template_yvaiagr',
        refForm.current!,
        'ZLsE3jW2q1HDgh_Oc'
      )
      .then(() => {
        alert('Message successfully sent!')
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)

        alert('Failed to send the message, please try again')
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance and job opportunities - especially
            ambitious or large projects. However, if you have other request or
            question, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Name"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="email"
                    id=""
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    id=""
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Victor Azevedo,
          <br />
          Brazil,
          <br />
          Rio de Janerio, RJ
          <br />
          <span>victorsilvadeazevedoj@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-22.925025, -43.4062854]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-22.925025, -43.4062854]}>
              <Popup>
                Victor lives around here, come over for a cup of coffe :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  )
}

export default Contact

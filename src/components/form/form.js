import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import './form.css'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors'
import Box from '@mui/material/Box'
import TabPanel from './TabPanel'
import Dropdown from 'react-bootstrap/Dropdown'

const Form = () => {
  const [autre, setAutre] = useState(false)
  const onClickAutre = () => {
    setAutre(!autre)
  }
  const onClickAutreReset = () => {
    paraMedicalRef.current.checked = false
    medecinRef.current.checked = false
  }
  const onClickMedecin = () => {
    autreRef.current.checked = false
    setAutre(false)
  }
  const onClickParaMedical = () => {
    autreRef.current.checked = false
    setAutre(false)
  }
  const medecinRef = useRef('medecin')
  const paraMedicalRef = useRef('Para Medical')
  const autreRef = useRef('autre')

  //   const { register, handleSubmit } = useForm({
  //     shouldUseNativeValidation: true,
  //   })

  //   const onSubmit = async (data) => {
  //     console.log(data)
  //   }

  useEffect(() => {
    setAutre(false)
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [personnel, setPersonnel] = useState('')
  const [combienInvestir, setCombienInvestir] = useState('')
  const [contribuer, setContribuer] = useState('')
  const [publication, setPublication] = useState('')

  const formSendMessage = useRef()
  // const sendMessage = (e) => {
  //   e.preventDefault()
  //   console.log(formSendMessage.current)
  // }

  // const test = useRef()

  const testMessage = (e) => {
    e.preventDefault()
    // const mm = {
    //   name,
    //   email,
    //   phone,
    //   personnel,
    //   combienInvestir,
    //   contribuer,
    //   publication,
    // }

    // console.log(mm)
    

    emailjs.sendForm('service_lp7lntt', 'template_l2q6v9n', e.target, 'KSBGXwysGF7hhmlJa')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  const [teste, setTeste] = useState('')

  const [userName, setUserName] = useState('')
  const [userLname, setUserLname] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  const [userPhone, setUserPhone] = useState()
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    const m = { userName, userLname, teste, userEmail, message, userPhone }

    console.log(form.current)
    console.log(m)
  }

  return (
    <div>
      {/* <section className="section contact">
        <div className="bg-overlay"></div>
        <div className="container" id="Contact">
          <div className="row justify-content-center">
            <form ref={form} onSubmit={testMessage} className="contact-form">
              <div className="col-xl-12">
                <div className="row align-items-center gy-3">
                  <div className="col-lg-3"></div>

                  <div className="col-lg-6">
                    <span id="error-msg"></span>
                    <div className="row rounded-3 py-3">
                      <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text">
                            <i className="mdi mdi-account-outline"></i>
                          </span>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter your name*"
                            onChange={(e) => {
                              setName(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-lg-8"></div>
                        <div className="col-lg-3 mt-3">
                          <button
                            type="submit"
                            id="btn_sent"
                            className="btn btn-primary btn-arrow"
                          >
                            Envoyer
                          </button>
                        </div>
                        <div className="col-lg-1"></div>
                      </div>
                    </div>
                    <div className="col-lg-5"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      <section className="section contact" >
        <div className="bg-overlay" ></div>
        <div className="container"  id="Contact">
          <div className="row justify-content-center">
            <form ref={form} onSubmit={testMessage} className="contact-form">
              <div className="col-xl-12">
                <div className="row align-items-center gy-3">
                  <div className="col-lg-3"></div>

                  <div className="col-lg-6">
                    <span id="error-msg"></span>
                    <div className="row rounded-3 py-3">
                      <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text">
                            <i className="mdi mdi-account-outline"></i>
                          </span>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter your name*"
                            onChange={(e) => {
                              setName(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text">
                            <i className="mdi mdi-email-outline"></i>
                          </span>
                          <input
                            name="email"
                            id="Email"
                            type="email"
                            className="form-control"
                            placeholder="Enter your email*"
                            onChange={(e) => {
                              setEmail(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="position-relative mb-3">
                          <span className="input-group-text">
                            <i className="mdi mdi-file-document-outline"></i>
                          </span>
                          <input
                            name="phone"
                            id="phone"
                            type="text"
                            className="form-control"
                            placeholder="Phone Number *"
                            onChange={(e) => {
                              setPhone(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <label
                        className="form-check-label pb-3"
                        style={{ color: 'white' }}
                      >
                        Etes vous personnel de la santé *
                      </label>
                      <div className="checkStyle">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="personnel"
                            id="exampleRadios1"
                            value="Medecin"
                            onChange={(e) => {
                              setPersonnel(e.target.value)
                              onClickParaMedical()
                            }}
                            ref={medecinRef}
                          />
                          <label
                            className="form-check-label"
                            style={{ color: 'white' }}
                            for="exampleRadios1"
                          >
                            Medecin
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="personnel"
                            id="exampleRadios2"
                            value=" para medical"
                            onChange={(e) => {
                              onClickMedecin()
                              setPersonnel(e.target.value)
                            }}
                            ref={paraMedicalRef}
                          />
                          <label
                            className="form-check-label"
                            style={{ color: 'white' }}
                            for="exampleRadios2"
                          >
                            Para Medical
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="exampleRadios"
                            id="exampleRadios3"
                            value="option3"
                            ref={autreRef}
                            onChange={() => {
                              onClickAutre()
                              onClickAutreReset()
                              console.log(autre)
                            }}
                          />
                          <label
                            className="form-check-label mb-3"
                            style={{ color: 'white' }}
                            for="exampleRadios3"
                          >
                            Autre
                          </label>
                        </div>
                      </div>
                      {autre && (
                        <div className="position-relative ">
                          <span className="input-group-text">
                            <i className="mdi mdi-file-document-outline"></i>
                          </span>
                          <input
                            name="personnel"
                            id="phone"
                            type="text"
                            className="form-control"
                            placeholder="Votre réponse"
                            onChange={(e) => {
                              setPersonnel(e.target.value)
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <label
                      className="form-check-label mb-3"
                      style={{ color: 'white' }}
                      For="reponse"
                    >
                      <span>
                        Ticket minimal 2250 TND => 25 actions (1 action a 90
                        TND)
                      </span>
                      <br />
                      <span>Ticket maximal 450000 TND = 5000 Actions</span>{' '}
                      <br />
                      Combien comptez vous investir *
                    </label>
                    <div className="position-relative mb-3 ">
                      <span className="input-group-text">
                        <i className="mdi mdi-file-document-outline"></i>
                      </span>
                      <input
                        name="combienInvestir"
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Votre réponse"
                        onChange={(e) => {
                          setCombienInvestir(e.target.value)
                        }}
                      />
                    </div>

                    <label
                      className="form-check-label mb-3"
                      style={{ color: 'white' }}
                      For="reponseContribution"
                    >
                      Dite nous comment souhaitez contribuer a la reussite de
                      Anath Health care?
                      <span> Que sera votre contribution?</span>
                    </label>

                    <div className="position-relative mb-3">
                      <span className="input-group-text">
                        <i className="mdi mdi-file-document-outline"></i>
                      </span>
                      <textarea
                        name="contribuer"
                        id="contribuer"
                        type="text"
                        className="form-control"
                        placeholder="Votre réponse"
                        onChange={(e) => {
                          setContribuer(e.target.value)
                        }}
                      />
                    </div>
                    <label
                      className="form-check-label pb-3"
                      style={{ color: 'white' }}
                      For="reponseContribution"
                    >
                      Vous souhaitez la publication de votre intention
                      d'investissement sur ce site web? Anath Health care?{' '}
                      <br />
                    </label>
                    <select
                      className="form-control"
                      name="publication"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setPublication(e.target.value)
                      }}
                    >
                      <option selected>Votre réponse</option>
                      <option value="Oui">Oui</option>
                      <option value="Non">Non</option>
                      <option
                        value="Oui, aprés signature du contrat d'intention
                        d'investissement"
                      >
                        Oui, aprés signature du contrat d'intention
                        d'investissement
                      </option>
                    </select>
                    <div className="row mt-3">
                      <div className="col-lg-8"></div>
                      <div className="col-lg-3 mt-3">
                        <button
                          type="submit"
                          id="btn_sent"
                          className="btn btn-primary btn-arrow"
                        >
                          Envoyer
                        </button>
                      </div>
                      <div className="col-lg-1"></div>
                    </div>
                  </div>
                  <div className="col-lg-5"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('firstName', {
            required: 'Please enter your first name.',
          })} // custom message
        />
        <input type="submit" />
      </form> */}

      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

      {/* <form onsubmit={testMessage}>
      <div className="form-group">

        <input
          className="form-control" 
          type="text"
          name="test"
          id="test"
          onChange={setTeste()}
        />
        </div>
        <button className="btn btn-primary" type="submit">send</button>
      </form> */}
    </div>
  )
}

export default Form

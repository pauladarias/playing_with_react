import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import { useFormFields } from "./libs/hooksLib"
import axios from "../node_modules/axios"
 
function Forms () {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    username: "",
    password: "",
    type: ""
  })

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await axios.post("http://dev.pubmate.io/pubmate/api/0.1/user/create", {email : fields.email, username: fields.username, password: fields.password, type: fields.type} )
      .then( 
        response=>{
        console.log(response.config.data)



      // const response = await fetch("http://dev.pubmate.io/pubmate/api/0.1/pub", {
      //   method: "POST", 
      //   headers: {
      //     "Content-type" : "application/json"
      //   },
      //   body: {
      //     email: fields.email,
      //     password: fields.password
      //   }
       })
      //const data = await response.json()
      console.log(response)
    } catch(err) {
      console.log(err)
    }

  }



return (
  <div className="addpub">
    <h1>User Information</h1>
    <button className="addpub__buttonName" onClick={() => console.log("opened")}>User Details<span className="arrow">▼</span></button>
    <Form  className="addpub__form"size="lg" onSubmit={handleSubmit}>
      <Form.Group  size="lg" controlId="email">
        <Form.Label >Email</Form.Label><br></br>
        <Form.Control 
          className="addpub__input"
          autoFocus
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Form.Group size="lg" controlId="username">
        <Form.Label>Username</Form.Label><br></br>
        <Form.Control
          className="addpub__input"
          type="username"
          value={fields.username}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label><br></br>
        <Form.Control
          className="addpub__input"
          type="password"
          value={fields.password}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Form.Group size="lg" controlId="type">
        <Form.Label>Type</Form.Label><br></br>
        <Form.Control
          className="addpub__input"
          type="type"
          value={fields.type}
          onChange={handleFieldChange}
        /><br></br>
      </Form.Group>
      <Button
        className="addpub__save addpub__buttons"
        block
        size="lg"
        type="submit"
        //disabled={!validateForm()}
      >
        SAVE
      </Button>
    </Form>  
  </div>
 )
}

export default Forms
import { useState } from "react";
import "./App.css";

export default function App() {
  
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [complaint, setComplaint] = useState('')
  const [contactPreference, setContactPreference] = useState('email')
  const [agree, setAgree] = useState('false')


  //TODO: Add your state fields here
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({name})
    console.log({address})
    console.log({phone})
    console.log({email})
    console.log({complaint})
    console.log({contactPreference})
    console.log({agree})
  }

  const handleChangeName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handleChangeAddress = (e) => {
    console.log(e.target.value)
    setAddress(e.target.value)
  }

  const handleChangePhone = (e) => {
    console.log(e.target.value)
    setPhone(e.target.value)
  }

  const handleChangeEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleChangeComplaint = (e) => {
    console.log(e.target.value)
    setComplaint(e.target.value)
  }

  const handleChangeContactPreference = (e) => {
    console.log(e.target.value)
    setContactPreference(e.target.value)
  }

  const handleChangeAgree = (e) => {
    setAgree(true)
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={handleChangeName} value={name}/>
          </label>
          <label>
            Address
            <input type="text" name="address" required onChange={handleChangeAddress} value={address}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" required onChange={handleChangePhone} value={phone}/>
          </label>

          <label>
            Email
            <input type="email" name="email" required onChange={handleChangeEmail} value={email}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              required
              onChange={handleChangeComplaint}
              value={complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleChangeContactPreference} checked={contactPreference === "phone"}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email"  onChange={handleChangeContactPreference} checked={contactPreference === "email"}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post"  onChange={handleChangeContactPreference} checked={contactPreference === "post"}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none"  onChange={handleChangeContactPreference} checked={contactPreference === "none"}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" required onChange={handleChangeAgree} value={agree} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}

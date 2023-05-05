import { useState } from "react";
import "./App.css";

const initialFormData = {
  name: 'name',
  address: '',
  phone: '',
  email: '',
  complaint: '',
  contact: 'email',
  consent: false
}

export default function App() {

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

    //here [name] is taking whichever element name and assign its the corresponding value

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    if (type === 'checkbox' && name === 'consent') {
      setFormData({...formData, [name]: checked})
    } else {
      setFormData({...formData, [name]: value})
    }
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2> {formData.name}'s Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={handleChange} value={formData.name}/>
          </label>
          <label>
            Address
            <input type="text" name="address" required onChange={handleChange} value={formData.address}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" required onChange={handleChange} value={formData.phone}/>
          </label>

          <label>
            Email
            <input type="email" name="email" required onChange={handleChange} value={formData.email}/>
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
              onChange={handleChange}
              value={formData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleChange} checked={formData.contact === 'phone'}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email"  onChange={handleChange} checked={formData.contact === 'email'}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post"  onChange={handleChange} checked={formData.contact === 'post'}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none"  onChange={handleChange} checked={formData.contact === 'none'}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={handleChange} value={formData.consent} checked={formData.consent}/>
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik } from 'formik';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: 'bnmv',
          lastName: '',
          email: '',
          gender: "male",
          hobies: [],
          country:"turkey"
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          ({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>

              {/* inputs */}
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" placeholder="Jane"
                onChange={handleChange} value={values.firstName} />
              <br></br>
              <br></br>

              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" placeholder="Doe"
                onChange={handleChange} value={values.lastName} />
              <br></br>
              <br></br>

              <label htmlFor="email">Email</label>
              <input name="email" placeholder="jane@acme.com"
                type="email" onChange={handleChange}
                value={values.email} />
              <br></br>
              <br></br>

              {/* radio buttons */}
              <span>Male</span>
              <input type={"radio"} name="gender"
                value="male" onChange={handleChange}
                checked={values.gender === "male"}
              />
              <span>Female</span>
              <input type={"radio"} name="gender" value="female" onChange={handleChange} />
              <br></br>
              <br></br>

              {/* checkboxs */}
              <div>
                <input type={"checkbox"} name="hobies" value="football" onChange={handleChange} />
                Football
              </div>
              <div>
                <input type={"checkbox"} name="hobies" value="Cinema" onChange={handleChange} />
                Cinema
              </div>
              <div>
                <input type={"checkbox"} name="hobies" value="Photography" onChange={handleChange} />
                Photography
              </div>

              <br></br>
              <br></br>

              {/* dropdown */}
              <select 
                name="country" 
                onChange={handleChange}
                value={values.country}
              >
                <option value="turkey">Turkey</option>
                <option value="england">England</option>
                <option value="usa">USA</option>
              </select>

              <br></br>
              <br></br>

              <button type="submit">Submit</button>

              <br></br>

              <code>{JSON.stringify(values)}</code>
            </form>
          )
        }
        {/* <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Jane" />
          <br></br>
          <br></br>

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="Doe" />
          <br></br>
          <br></br>

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="jane@acme.com" type="email" />
          <br></br>
          <br></br>

          <button type="submit">Submit</button>
        </Form> */}
      </Formik>
    </div>
  );
}

export default App;

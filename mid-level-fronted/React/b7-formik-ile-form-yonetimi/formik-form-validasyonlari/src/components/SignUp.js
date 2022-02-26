import React from 'react'
import { useFormik } from 'formik';
import validations from "./validations";

function SignUp() {
    const {handleSubmit, handleChange, handleBlur ,values, errors, touched} = useFormik({
        initialValues: {
          email: '',
          password: "",
          passwordConfirm: ""
        },
        onSubmit: values => {
          console.log(values)
        },
        validationSchema : validations
      });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                {/* inputs */}

                <label>Email</label>
                <input name="email" placeholder="jane@acme.com"
                    type="email" onChange={handleChange}
                    value={values.email} onBlur={handleBlur}/>
                
                {errors.email && touched.email && (<div className='error'>{errors.email}</div>)}

                <br></br>
                <br></br>

                <label>Password</label>
                <input name="password" placeholder="Password"
                    onChange={handleChange} value={values.password} 
                    onBlur={handleBlur}/>
                {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}

                <br></br>
                <br></br>

                <label>Password Confirm</label>
                <input name="passwordConfirm" placeholder="Password Confirm"
                    onChange={handleChange} value={values.passwordConfirm} 
                    onBlur={handleBlur}/>
                {errors.passwordConfirm && touched.passwordConfirm && (<div className='error'>{errors.passwordConfirm}</div>)}

                <br></br>
                <br></br>

                <button type="submit">Submit</button>

                <br></br>
                <br></br>

                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default SignUp
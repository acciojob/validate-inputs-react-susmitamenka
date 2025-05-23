import { useState } from "react"
import React from 'react'

const FormValidation=()=>{

    let [user,setUser]=useState({Name:"",Address:"",Email:"",Mobile:""})
    let [errors,setError]=useState("")

    let {Name,Address,Email,Mobile}=user

    function updateField(e){
        e.preventDefault()
        let value = e.target.value;
        let key = e.target.name;
        setUser({...user,[key]:value})
    }


    const validate =()=>{
        const newErrors ={}

        if (!/^[A-Za-z\s]+$/.test(Name)) {
            newErrors.Name = 'Name should contain only letters';
          }

          if(/[^A-Za-z0-9\s]/.test(Address)){
            newErrors.Address = 'Address should not contain special characters'
          }
          if(!/^.+@.+\.com$/.test(Email)){
            newErrors.Email = 'Email should contain @ and .com';
          }
          if(!/^\d{1,10}$/.test(Mobile)){
            newErrors.Mobile='Mobile number should not be more than 10 characters';
          }
          setError(newErrors);
          return  Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e){
        e.preventDefault()
        if(validate()){
            alert('Form submitted successfully!')
            setUser({Name:"",Address:"",Email:"",Mobile:""})
            setError({})
        }

        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text"onChange={updateField} name="Name" value={Name}/>
                    <div class="errorMessage">{errors.Name}</div>
                </div>
                <div>
                    <label>Address</label>
                    <input type="text"onChange={updateField} name="Address" value={Address}/>
                    <div class="errorMessage">{errors.Address}</div>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={updateField} name="Email" value={Email}/>
                    <div class="errorMessage">{errors.Email}</div>

                </div>
                <div>
                    <label>Mobile</label>
                    <input type="number" onChange={updateField} name="Mobile" value={Mobile}/>
                    <div class="errorMessage">{errors.Mobile}</div>

                </div>
             
               
                
               
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
export default FormValidation;
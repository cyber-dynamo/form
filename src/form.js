import React from 'react';
import './App.css';
function Form(){
    const [formData, setFormData]= React.useState({
        firstName:"", 
        lastName:"",
        email:"",
        comments:"",
        isFriendly:true,
        employment:"",
        favColor:""
    })
    function handleChange(event){
        const {name,value,type,checked}=event.target
        setFormData(prevData =>({
            ...prevData,
            [name]: type ==="checkbox" ? checked:value
        })
 )
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            className="form"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}/>
            
            <input
            className="form"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}/>

            <input
            className="form"
            type="text"
            placeholder="e-mail"
            onChange={handleChange}
            name="email"
            value={formData.email}/>

            <textarea
            className="form"
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"/>

            <input 
            type="checkbox"
            className="box"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"/>
            <label htmlFor ="isFriendly">
                Are you friendly?
            </label>
            <br/>
            <br/>
            <fieldset className="field">
            <legend>Employment status</legend>
            <input 
            type="radio"
            id="unemployed"
            className="radio"
            name="employment"
            value="unemployed"
            onChange={handleChange}
            checked={formData.employment==="unemployed"}/>
            <label htmlFor ="unemployed">
                Unemployed
            </label>
            <br/>
            <input 
            type="radio"
            id="part-time"
            className="radio"
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment==="part-time"}/>
        
            <label htmlFor ="part-time">
                Part-time
            </label>
            <br/>
            <input 
            type="radio"
            id="full-time"
            className="radio"
            name="employment"
            value="full-time"
            onChange={handleChange}
            checked={formData.employment==="full-time"}/>
        
            <label htmlFor ="full-time">
                Full-time
            </label>
            </fieldset>


            <label htmlFor="favColor">
                What is your favourite color?
            </label>
            <br/>
            <select 
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor">
                <option value="choose">Choose</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;
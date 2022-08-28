import React, { useState } from 'react'

function Form2() {
    const [form, setForm] = useState({name:"",surname:"",gender:"0"})
    
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        //setForm((prev => {...prev,[e.target.name]:e.target.value})) şeklinde prevli tanımlama yapılabilir.
        //[e.target.name]:e.target.value ile button yada select optiondan gelen name karşılığını objeye atmak için alias
        //isimlendirme kullanılır.
    }
  return (
    <div>
        <div> İsim:</div>     
      <input placeholder='İsim Giriniz' value={form.name} name="name" onChange={handleChange}/>
      <input placeholder='Soy İsim Giriniz' value = {form.surname} name="surname" onChange={handleChange}/>

      <br/>
      <br/>
      <div>
        <div>Cinsiyet</div>
        <select value={form.gender} name="gender" onChange={handleChange}>
            <option value={"0"}>Erkek</option>
            <option value={"1"}>Kadın</option>
        </select>
      </div>
      <br/>
      <hr/>
      <div>İsim</div>
      <strong>{form.name} {form.surname}</strong>
      <br/>
      <div>Cinsiyet</div>
      <strong>{form.gender === '0' ? "Erkek" : "Kadın"}</strong>
    </div>
  )
}

export default Form2

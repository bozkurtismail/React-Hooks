import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("Mehmet")
    const [surname, setSurname] = useState("")
    const [gender, setGender] = useState("0")
  return (
    <div>
        <div> İsim:</div>     
      <input placeholder='İsim Giriniz' value={name} onChange={(event)=>setName(event.target.value)}/>
      <input placeholder='Soy İsim Giriniz' value = {surname} onChange={(event)=>setSurname(event.target.value)}/>

      <br/>
      <br/>
      <div>
        <div>Cinsiyet</div>
        <select value={gender} onChange={(event)=>setGender(event.target.value)}>
            <option value={"0"}>Erkek</option>
            <option value={"1"}>Kadın</option>
        </select>
      </div>
      <br/>
      <hr/>
      <div>İsim</div>
      <strong>{name} {surname}</strong>
      <br/>
      <div>Cinsiyet</div>
      <strong>{gender === '0' ? "Erkek" : "Kadın"}</strong>
    </div>
  )
}

export default Form

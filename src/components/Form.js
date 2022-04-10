
import React,{useState} from 'react'




const  Form=()=>{
  

  const[age,setAge] = useState("")
  const [fname,setfname] = useState("")
  const [lname,setlname] =useState("")
  const[dateofbirth,setdateofbirth]=useState("")
  
const saveUsers = () => {
fetch('https://pacific-chamber-45004.herokuapp.com/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fname,
  lname,
  age,
  dateofbirth
  }),
})
.then((res) => res.json())
.then((result) => {
  console.log(result)
  setfname('')
  setlname('')
  setAge('')
  dateofbirth('')
})
.catch((err) => console.log('error'))

}

const handleSubmit = (e) => {
e.preventDefault()
saveUsers() 
}

return (
  <div>
<div>

<form className='form' onSubmit={handleSubmit}>
  <div className='form-group'>
    <input
      type='fname'
      placeholder='Firstname'
      name='fname'
      value={fname}
      onChange={e => setfname(e.target.value)}
      required
    />
       <input
      type='lname'
      placeholder='LastName'
      name='lname'
      value={lname}
      onChange={e => setlname(e.target.value)}
      required
    />
  </div>
  <div className='form-group'>
    <input
      type='age'
      placeholder='Enter age'
      name='age'
      value={age}
      onChange={e => setAge(e.target.value)}
   
    />
  </div>
  <div className='form-group'>
    <input
      type='date'
      placeholder='Enter Date of birth'
      name='date'
      value={dateofbirth}
      onChange={e => setdateofbirth(e.target.value)}
   
    />
  </div>

  <button type='submit'className='btn btn-primary' value='submit'>submit</button>


  </form>

  
  </div>

  </div>

)
}

export default Form;

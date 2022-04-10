
import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';

function Tables () {
    const [data, setData] = useState([])

    const current = new Date();


    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    useEffect(() => {
        fetch('https://pacific-chamber-45004.herokuapp.com/api/users')
          .then((res) => res.json())
          .then((result) => setData(result))
          .catch((err) => console.log('error'))
      }, [])
    

    return (


      <div>
    <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>FName</th>
      <th>Username</th>
      <th>age</th>
      <th>Date of birth</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>


         {data.map((persons,index)=>{
                   return(
                    <tr key={index}>
                     <td>{persons.fname}</td>
                         <td>{persons.lname}</td>
                         <td>{persons.age}</td>
                         <td>{persons.dateofbirth}</td>
                         <td>{date}</td>
                    
                        </tr>
                      )



                 })}
         
          
  
  </tbody>
</Table>

      </div>
)


}

export default Tables
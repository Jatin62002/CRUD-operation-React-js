import axios from "axios"
import { useEffect, useState } from "react"
import { Await, useNavigate, useParams } from "react-router-dom"


function Edit() {
    const backlocation=useNavigate()
    const{id}=useParams()
    const[item,setitem]=useState({
        'Student Name': '',
        'Father Name': ''
    })

useEffect(()=>{
    async function getApi(){
        const getResult= await axios.get(`http://localhost:4444/student/${id}`)
        console.log("getResult",getResult.data)
        setitem(getResult.data)
    }
    getApi()
},[id])

function changetext(e){
    setitem({
        ...item,
        [e.target.name]:e.target.value
    })
    console.log("item",item)
    console.log("value",e.target.value)
    
}

 function update(e){
    try{
      e.preventDefault()
      const newResult=  axios.put(`http://localhost:4444/student/${id}`,item)
      console.log("New Result",newResult)
      alert('Data Updated...')
    }catch(error){
        console.log(error)
    }
}


function back(){
    backlocation('/List')
    }

    return (
        <>
            <h3>This is Edit the data....</h3>

            <form>
                <label>New Student Name : </label>
                <input type={"text"} name="Student Name" value={item['Student Name']} onChange={(e)=>changetext(e)}></input>
                <br/>
                <label>New Student Father Name : </label>
                <input type={"text"} name="Father Name" value={item['Father Name']} onChange={(e)=>changetext(e)}></input>
                <br/>
               <p><button onClick={()=>back()}>GO BACK</button>&nbsp;&nbsp;<button onClick={(e)=>update(e)}>UPDATE</button></p>
            </form>
        </>
    )
}
export default Edit
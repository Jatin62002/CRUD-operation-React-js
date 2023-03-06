import axios from "axios"
import { useState } from "react"



function Addnew() {
    const [getdata, setData] = useState({
        "studentName": "",
        "fatherName": ""
    })
    function onChangeTextFunc(e) {
        // console.log(e.target.value)
        setData({
            ...getdata,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
        console.log("use state data:", getdata)
    }

    async function onFormSubmit(e) {
        console.log("onFormSubmit")
        e.preventDefault();
        try {
            const getPostResult = await axios.post("http://localhost:4444/student", getdata)
            alert("Data Added")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h3>Add New Data....</h3>
            <center>
                <table border={"2px solid"}>
                    <tr>
                        <th><label>STUDENT NAME </label></th>
                        <th><label>STUDENT FATHER NAME </label></th>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Enter Name" name="Student Name" onChange={(e) => onChangeTextFunc(e)}></input></td>
                        <td><input type="text" placeholder="Enter Father Name" name="Father Name" onChange={(e) => onChangeTextFunc(e)}></input></td>
                    </tr>
                    <tr >
                        <td colSpan={"2"}><center><button onClick={(e) => onFormSubmit(e)}>Add Data</button></center></td>
                        
                    </tr>
                </table>
            </center>
        </>
    )
}
export default Addnew
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function View() {
    const [data, setdata] = useState([])
    const { id } = useParams(); //UseParams use for get specific parameter and use them.
    const navigate= useNavigate(); //use Navigate for go to previsious state or previous page.
    console.log(id)

    async function getsepratedata() {
        try {
            await axios.get(`http://localhost:4444/student/${id}`).then((naam) => {
                setdata(naam.data)
                console.log(naam.data)
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getsepratedata();
    }, [])

    function previous(){
        navigate("/List")
    }
    return (
        <>
            <h3>This is Seprately view data...</h3>
          <center><table border={"2px solid"}>
                <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Father Name</th>
                </tr>
                <tr>
                    <td>{data.id}</td>
                    <td>{data["Student Name"]}</td>
                    <td>{data["Father Name"]}</td>
                </tr>
            </table></center>
            <button onClick={()=>previous()}>Go BACK</button>
        </>
    )
}
export default View;
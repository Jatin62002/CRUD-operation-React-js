import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

function List() {

    const [data, setdata] = useState([])

    function list() {
        try {
            axios.get(" http://localhost:4444/student").then((details) => {
                console.log(details.data)
                setdata(details.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function deletedata(ID) {
        console.log(ID)
        const getresult = await axios.delete(`http://localhost:4444/student/${ID}`)
        console.log("getresult", getresult)
    }

    useEffect(() => {
        list()
    }, [])
    return (
        <>
            <h3>This is List of Data</h3>
            <center>
                <table border={"2px solid"}>
                    <tr>
                        <th>S.no</th>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Father Name</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                    {data.map((showdata, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{showdata["id"]}</td>
                            <td>{showdata["Student Name"]}</td>
                            <td>{showdata["Father Name"]}</td>
                            <td><Link to={`/View/${showdata.id}`}>View</Link></td>
                            <td><Link to={`/Edit/${showdata.id}`}>Edit</Link></td>
                            <td><button onClick={(e) => deletedata(showdata.id)}>Delete</button></td>
                        </tr>
                    })
                    }
                </table>
            </center>
        </>
    )
}
export default List
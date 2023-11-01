import { useEffect, useState, useContext } from "react"
import { DataContext } from "../context/DataContext"


export const Home = () => {

    const { list, setList } = useContext(DataContext)
    const [banks, setBanks] = useState([])

    const getList = async () => { 

        fetch('http://localhost:89/', {
            headers: {
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then(data => {
                setList(data)
                setBanks(data)
            })
            .catch((th) => {
            console.log("Error:", th)
        })
    
    }

    useEffect(() => {
       getList()
    }, [])

    return (
        <div className='container'>

            <div className="container-banks">
            
                {
                    list != [] && list.map((item, index) => {
                        return (<div className="container-card" key={index}>
                            <div className="image-container">
                                <img className="bank-image" src={item.url}></img>
                            </div>
                            <div className="container-text">
                                <h2>Nombre: {item.bankName}</h2>
                                <p>Descripción: {item.description}</p>
                                <p>Año: {item.age} años</p>
                            </div>
                        </div>)
                    })
                }

            </div>
        </div>
    )
} 
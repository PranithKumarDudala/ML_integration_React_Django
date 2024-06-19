import {useState, useEffect} from 'react'
import axios from 'axios'

import './index.css'

const DataCollection = () => {

    const [sepalLength, setSepalLength] = useState("")
    const [sepalWidth, setSepalWidth] = useState("")
    const [petalLength, setPetalLength] = useState("")
    const [petalWidth, setPetalWidth] = useState("")
    const [prediction, setPrediction] = useState("")
    
    const onSubmitForm = (event) => {
        event.preventDefault()

        const collected = {
            features : [parseFloat(sepalLength), parseFloat(sepalWidth), parseFloat(petalLength), parseFloat(petalWidth)]
        }

        axios.post("http://127.0.0.1:8000/predict/",{data : collected})
        .then((response) => {
            setPrediction(response.data.predicted)
        })
        .catch(err => {
            console.log(err)
        })
        console.log("form submitted")


    }

    

    return (
        <div className = "data-body">
            
            <div className = "form-container">
            <h1>Iris dataset Classification</h1>
                <form className = "form-item" onSubmit = {onSubmitForm}>
                    <label className = "label-item">Sepal Length</label>
                    <br/>
                    <input className = "input-item" type = 'text' name = "sepal_length" value={sepalLength} onChange={(event) => setSepalLength(event.target.value)} />
                    <br/>
                    <label className = "label-item">Sepal Width</label>
                    <br/>
                    <input className = "input-item" type = 'text' name = "sepal_length" value={sepalWidth} onChange={(event) => setSepalWidth(event.target.value)} />
                    <br/>

                    <label className = "label-item">Petal Length</label>
                    <br/>
                    <input className = "input-item" type = 'text' name = "sepal_length" value={petalLength} onChange={(event) => setPetalLength(event.target.value)}/>
                    <br/>
                    <label className = "label-item">Petal Width</label>
                    <br/>
                    <input className = "input-item" type = 'text' name = "sepal_length" value={petalWidth} onChange={(event) => setPetalWidth(event.target.value)} />
                    <br/>

                    <input className = "input-item" type = "submit" />
                </form>
                <h1>Class : {prediction}</h1>
            </div>

            
        </div>
    )

}

export default DataCollection
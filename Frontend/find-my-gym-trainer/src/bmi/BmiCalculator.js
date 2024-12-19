import React, { useState } from 'react'; 
import bmi from '../images/bmi.jpg'



const BmiCalculator = () => {
    const [heightValue, setHeightValue] = useState(''); 
    const [weightValue, setWeightValue] = useState(''); 
    const [bmiValue, setBmiValue] = useState(''); 
    const [bmiMessage, setBmiMessage] = useState(''); 
  
    const calculateBmi = () => { 
        if (heightValue && weightValue) { 
            const heightInMeters = heightValue / 100; 
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
            setBmiValue(bmi); 
  
            let message = ''; 
            if (bmi < 18.5) { 
                message = 'You are Underweight'; 
            } else if (bmi >= 18.5 && bmi < 25) { 
                message = 'You are Normal weight'; 
            } else if (bmi >= 25 && bmi < 30) { 
                message = 'You are Overweight'; 
            } else { 
                message = 'You are Obese'; 
            } 
            setBmiMessage(message); 
        } else { 
            setBmiValue(''); 
            setBmiMessage(''); 
        } 
    }; 
  
    return ( 
        <div className="container" style={{"max-width": "400px","margin": "0 auto","padding": "20px" }}> 
            <div style={{"margin-left":"-110px"}}>
            <img className='mb-3' src={bmi} alt='BMI img' style={{"border":"2px solid black","boxShadow":"1px 2px 3px"}}></img>
            </div>
            {/* <h1>Calculate Your Body-Mass-Index</h1>   */}
            <div className="input-container" style={{"margin-bottom": "10px"}}> 
                <label htmlFor="height" style={{"display":"block", "font-weight": "bold","margin-bottom":"5px"}} >Enter Your Height (cm):</label> 
                <input 
                    type="number"
                    id="height"
                    style={{"width": "100%","padding": "10px","font-size": "16px"}}
                    value={heightValue} 
                    onChange={(e) => setHeightValue(e.target.value)} 
                /> 
            </div> 
            <div className="input-container" style={{"margin-bottom": "10px"}}> 
                <label htmlFor="weight" style={{"display":"block", "font-weight": "bold","margin-bottom":"5px"}}>Enter Your Weight (kg):</label> 
                <input 
                    type="number"
                    id="weight"
                    style={{"width": "100%","padding": "10px","font-size": "16px"}}
                    value={weightValue} 
                    onChange={(e) => setWeightValue(e.target.value)} 
                /> 
            </div> 
            <button className="calculate-btn" style={{"display": "block","width": "100%","padding": "10px","background-color": "#007bff","color": "#fff","font-size": "16px", 
	        "border": "none","border-radius": "4px","cursor": "pointer"}} onClick={calculateBmi}> 
                Click to Calculate BMI 
            </button> 
            {bmiValue && bmiMessage && ( 
                <div className="result" style={{"margin-top": "20px","padding": "10px","background-color": "#f0f0f0","border-radius": "4px"}}> 
                    <p> 
                        Your BMI: <span className="bmi-value" style={{"font-weight": "bold"}}>{bmiValue}</span> 
                    </p> 
                    <p> 
                        Result: <span className="bmi-message" style={{"color": "#007bff","font-weight": "bold"}}>{bmiMessage}</span> 
                    </p> 
                </div> 
            )} 
        </div> 
    ); 
}

export default BmiCalculator

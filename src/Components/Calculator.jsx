import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

function Calculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [amountSaved, setAmountSaved] = useState("");

  const handleOriginalPriceChange = (e) => {
    setOriginalPrice(e.target.value);
    
  };

  const handleSliderChange = (e, newValue) => {
    setDiscountPercentage(newValue);
  };

  const handleDiscountPercentageChange = (e) => {
    let inputvalue = e.target.value;
  
    // Convert to a number and back to a string to remove leading zeros
    //value = Number(value).toString();
  
    // Ensure the value is between 0 and 100
    if (inputvalue >= 0 && inputvalue <= 100) {
      setDiscountPercentage(inputvalue);
    }
  };
  

  const calculateDiscount = (e) => {
    e.preventDefault()
   
      const discountAmount = (originalPrice * discountPercentage) / 100;
      const finalPrice = originalPrice - discountAmount;
      setDiscountedPrice(finalPrice);
      setAmountSaved(discountAmount);
    
  };

  const resetValues = () => {
    setOriginalPrice('');
    setDiscountPercentage(0);
    setDiscountedPrice("");
    setAmountSaved("");
  };

  return (
    <>
      <Row lg={12} sm={12} md={12} className="first">
        <Col></Col>
        {/* calculate */}

        <Col  sm={12} md={6} lg={4} className="enter  m-4" style={{ height: "400px" }}>
          <h2 className="p-3 text-center fw-bolder" style={{color:"maroon"}}>Calculate Discount Here</h2>

        {/* input original price */}
        <h5>Enter original price :</h5>
          <TextField className='bg-light border rounded'
            id="outlined-basic"
            label="Original Price"
            variant="outlined"
            value={originalPrice}
            onChange={handleOriginalPriceChange}
            type="number"
            
          />
          <br /><br />
          <h5>Enter discount percentage</h5>
        {/* input discount percentage */}
          <TextField className='bg-light border rounded'
            id="outlined-number"
            label=""
            type="text"
            value={discountPercentage}
            onChange={handleDiscountPercentageChange}
            
        
          />
           {/* slider */}
          
             <Slider
              value={discountPercentage}
              onChange={handleSliderChange}
              aria-label="Discount Percentage"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              style={{width:"300px"}}
            /> 
         

          <br />
  {/* calculate and reset buttons */}
          <div className="buttons d-flex ">
            <Button variant="contained" onClick={calculateDiscount}className='mx-3' style={{backgroundColor:"blue"}}>Calculate</Button>
            <Button variant="contained" onClick={resetValues}style={{backgroundColor:"black"}}>Reset</Button>
          </div>
         
        </Col>

        


        {/* display result */}
        <Col sm={12} md={6} lg={4} className="enter  m-4">
          <h2 className="p-3 text-center fw-bolder" style={{color:"maroon"}}>After Discount</h2>
          <h2 className='fw-bold' style={{color:"darkblue"}}>Pay Only: </h2>
          <div className="container border border-light bg-light mt-3 p-5" style={{borderRadius:"50%"}}>
            <p className='text-center fs-1 fw-bold'style={{color:"darkblue"}} >{discountedPrice.toFixed(2) }</p>
          </div>
          <br /><br /><br />
          <h2 className='fw-bold' style={{color:"darkgreen"}}>Amount you Saved: </h2>
          <div className="container border border-light  bg-light mt-3 p-5" style={{borderRadius:"50px"}}>
            <p className='text-center fs-1 fw-bold'style={{color:"darkgreen"}} >{amountSaved.toFixed(2) }</p>
          </div>
        </Col>
        
        <Col></Col>
      </Row>
    </>
  );
}

export default Calculator;

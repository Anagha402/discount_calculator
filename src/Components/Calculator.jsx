import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

function Calculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [amountSaved, setAmountSaved] = useState(null);

  const handleOriginalPriceChange = (event) => {
    setOriginalPrice(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setDiscountPercentage(newValue);
  };

  const handleDiscountPercentageChange = (event) => {
    let value = event.target.value;
  
    // Convert to a number and back to a string to remove leading zeros
    value = Number(value).toString();
  
    // Ensure the value is between 0 and 100
    if (value >= 0 && value <= 100) {
      setDiscountPercentage(value);
    }
  };
  

  const calculateDiscount = () => {
    if (originalPrice && discountPercentage >= 0 && discountPercentage <= 100) {
      const discountAmount = (originalPrice * discountPercentage) / 100;
      const finalPrice = originalPrice - discountAmount;
      setDiscountedPrice(finalPrice);
      setAmountSaved(discountAmount);
    }
  };

  const resetValues = () => {
    setOriginalPrice('');
    setDiscountPercentage(0);
    setDiscountedPrice(null);
    setAmountSaved(null);
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
          <Box sx={{ width: 300 }}>
            <Slider
              value={discountPercentage}
              onChange={handleSliderChange}
              aria-label="Discount Percentage"
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
          </Box>

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
          <h2 className='fw-bold'>Pay Only: </h2>
          <div className="container border border-dark bg-light mt-3 p-5">
            <p className='text-center'>{discountedPrice !== null ? `₹${discountedPrice.toFixed(2)}` : ' '}</p>
          </div>
          <br /><br /><br />
          <h2 className='fw-bold'>Amount you Saved: </h2>
          <div className="container border border-dark bg-light mt-3 p-5">
            <p className='text-center'>{amountSaved !== null ? ` ₹${amountSaved.toFixed(2)}` : ' '}</p>
          </div>
        </Col>
        
        <Col></Col>
      </Row>
    </>
  );
}

export default Calculator;

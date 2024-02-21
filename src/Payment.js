import React from 'react';
import './Payment.css';
function Payment(){
    return(
  <form>
            <h1>Payment Form</h1>
      <p>Required field are followed by*</p>
      <h2>Contact information</h2>
      <p>Name:*<input type="text" name="name" required=""/></p>
     
        <legend>Gender*</legend>
    
        Male <input type="radio" name="gender" id="male" required=""/>
        Female <input type="radio" name="gender" id="Female" required=""/>
        
       
    <p>Address: <textarea name="address" id="address" rows="6" cols="80"></textarea></p>
     <p>Email:* <input type="email" name="email" id="email" value="" required="" /></p> 
     <p>Pincode:* <input type="number" name="pincode" id="pincode" value="" required="" /></p>
   
    <h2>Payment Information</h2>
    <p>Card Type:*
      <select name="card_type" id="card_type" required="">
        <option value="">---selecr a Card type--</option>
        <option value="visa">Visa</option>
        <option value="rupy">Rupay</option>
        <option value="master card">Master Card</option>        
      </select>    
    </p>
    <p>
      Card Number *<input type="number" name="card Number" id="Card Number" required=""/>
    </p>
    <p>
      Expiration Date:* <input type="date" name="exp_date" id="exp_date" required=""/>
    </p>
    <p>
      CVV * <input type="password" name="CVV" id="CVV" required=""/>
    </p>
    <input type="submit" name="" id="" value="Pay Now" />
   
    </form>
  );
    }
export default Payment;
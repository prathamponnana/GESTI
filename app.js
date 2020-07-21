//UI Variables
const goldPrice = document.querySelector('.goldPrice')
  totWeight = document.querySelector('.totalWeight');
  deductions = document.querySelector('.deductions');
  costOfDeduction = document.querySelector('.costOfDeductions');
  wastagePercent = document.querySelector('.wastage');
  makingCost = document.querySelector('.makingCharges');
  additionalCharges = document.querySelector('.otherCharges');
  submitBtn = document.querySelector('.submitBtn');
  btn = document.querySelector('.btn');
  //Parent For Insert Before
  form = document.querySelector('form');

  //UI Variables for Result section(fin=final)
const finGoldPrice= document.getElementById('resGoldPrice');
      finNetWeight=document.getElementById('resNetWeight');
      finMakingCharge=document.getElementById('resMakingCharges');
      finWastage=document.getElementById('resWastage');
      finDeduction=document.getElementById('resDeduction');
      finDeductionAmt=document.getElementById('resDeductionAmt');
      finOtherCharges=document.getElementById('resOtherCharges');
      finTotalAmt=document.getElementById('resTotalAmt');
      finResult = document.getElementById('result');



document.querySelector('form').addEventListener('submit',function(e){
    //Show Loader
    document.querySelector('form').style.display= 'none';
    document.getElementById('loader').style.display= 'block';
    setTimeout(calculateResults,1000);
    e.preventDefault();
});



function calculateResults() {
    
    const currentPrice = parseInt(goldPrice.value).toFixed(3);
          totalWeight = parseFloat(totWeight.value).toFixed(3);
          gramsToSubtract = parseFloat(deductions.value).toFixed(3);
          deductionAmt = parseFloat(costOfDeduction.value).toFixed(3);
          wastage = parseFloat(wastagePercent.value).toFixed(3);
          makingCharges = parseInt(makingCost.value).toFixed(3);
          otherCharges = parseInt(additionalCharges.value).toFixed(3);
          
         
    const netWeight = parseFloat((totalWeight-gramsToSubtract)).toFixed(3);
          poun = parseFloat(netWeight/7.988).toFixed(3);
          cost = netWeight*currentPrice;
          costWithWastage = cost + cost*(wastage/100.00);
          finCost = parseFloat(costWithWastage) + parseInt(deductionAmt)+ parseInt(makingCharges) + parseInt(otherCharges);
          totalCost= parseFloat(finCost).toFixed(3);

          if(isNaN(totalCost)===true){
            showError('Please Enter Correct Inputs');
      }else if(netWeight<0){
         showError("Deductions greater than Net Weight");
      }else{
            finGoldPrice.appendChild(document.createTextNode(`₹${currentPrice}`));
            finNetWeight.appendChild(document.createTextNode(`${netWeight}grams.(${poun} poun)`));
            finWastage.appendChild(document.createTextNode(`${wastage}%`));
            finMakingCharge.appendChild(document.createTextNode(`₹${makingCharges}`));
            finDeduction.appendChild(document.createTextNode(`${gramsToSubtract} grams`));
            finDeductionAmt.appendChild(document.createTextNode(`₹${deductionAmt}`));
            finOtherCharges.appendChild(document.createTextNode(`₹${otherCharges}`));
            finTotalAmt.appendChild(document.createTextNode(`₹${totalCost} only`));
            showResults();
      }
}


function showResults(){
    
//Hide Loader
document.querySelector('#loader').style.display= 'none';
document.querySelector('form').style.display= 'block';
//Hide Inputs
document.querySelector('section').style.display= 'none';
// document.querySelector('#loader').style.display= 'none';
// Insert Before
form.insertBefore(finResult,btn);
//Change Button
submitBtn.value= 'BACK';
submitBtn.style.backgroundColor = '#6a097d';
submitBtn.addEventListener('mouseenter',function(){
      submitBtn.style.backgroundColor = '#980c04'
});
submitBtn.addEventListener('mouseleave',function(){
      submitBtn.style.backgroundColor = '#6a097d'
});

submitBtn.addEventListener('mousedown',function(e){
      if(e.target.value=== 'BACK'){
            window.location.reload();
      }
});

//Show Results
document.getElementById('result').style.display= 'block';
}

function showError(message){
   errorDiv = document.createElement('div');
   errorDiv.className = 'error';
   errorDiv.appendChild(document.createTextNode(message));
   document.querySelector('form').style.display= 'block';
   document.querySelector('#loader').style.display= 'none';
   //Insert Before Form
   app = document.getElementById('app');
   app.insertBefore(errorDiv,form);

   //Clear Error
   setTimeout(clearError,5000);

}

function clearError(){
      document.querySelector('.error').remove();
}

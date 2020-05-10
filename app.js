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
  app = document.querySelector('.app');

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



document.querySelector('.submitBtn').addEventListener('click',function(e){
const emptyChecker = document.querySelector('#emptyChecka');  
if(emptyChecker.value=== 'NaN'){
   alert("Check Input");
} else{
      calculateResults();
}
    e.preventDefault();
});



function calculateResults() {
    
    const currentPrice = parseInt(goldPrice.value).toFixed(2);
          totalWeight = parseFloat(totWeight.value).toFixed(2);
          gramsToSubtract = parseFloat(deductions.value).toFixed(2);
          deductionAmt = parseFloat(costOfDeduction.value).toFixed(2);
          wastage = parseFloat(wastagePercent.value).toFixed(2);
          makingCharges = parseInt(makingCost.value).toFixed(2);
          otherCharges = parseInt(additionalCharges.value).toFixed(2);

    const netWeight = parseFloat((totalWeight-gramsToSubtract)).toFixed(3);
          poun = parseFloat(netWeight/7.988).toFixed(3);
          cost = netWeight*currentPrice;
          costWithWastage = cost + cost*(wastage/100.00);
          totalCost = parseFloat(costWithWastage) + parseInt(deductionAmt)+ parseInt(makingCharges) + parseInt(otherCharges);   
          

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

function showResults(result){

//Hide Inputs
document.querySelector('section').style.display= 'none';
// Insert Before
app.insertBefore(finResult,btn);
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
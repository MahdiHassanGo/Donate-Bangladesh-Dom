

function updateDonation(inputId,balanceId){
    const inputField= document.getElementById(inputId);


    const amount = parseInt(inputField.value);
    
    if(amount > 0 && amount <= currentBalance){
       
        currentBalance-= amount;



        currentBalanceElem.textContent = currentBalance.toFixed(2);
        

        const balanceElem = document.getElementById(balanceId);

        currentBalanceValue = parseInt(balanceElem.textContent);

        balanceElem.textContent = (currentBalanceValue +amount) .toFixed(2);

inputField.value='' ;
    }
    else{
        alert('please enter a valid donation amount')
    }
  

}

document.getElementById("Noakhali-Donate-btn").onclick=function(){
    updateDonation ('Noakhali-input-donation','Noakhali-balance');
};


document.getElementById("Feni-Donate-btn").onclick=function(){
    updateDonation ('Feni-input-donation','Feni-balance');
}



document.getElementById("Quota-Donate-btn").onclick=function(){
    updateDonation ('Quota-input-donation','Quota-balance');
}

function showSectionById(id){
    document.getElementById ('Donation-form').classList.add('hidden');
   
    document.getElementById ('transaction-section').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden'); 


}


const currentBalanceElem =document.getElementById('Current-balance');

let currentBalance = parseInt(currentBalanceElem.textContent);

function updateDonation(inputId,balanceId,source,place){
    const inputField = document.getElementById(inputId);
    const amount =parseInt (inputField.value) ||0 ;

    if(amount >0 && amount <= currentBalance)
    {
        currentBalance -=amount;
        currentBalanceElem.textContent = currentBalance.toFixed(2);

        const balanceElem =document.getElementById(balanceId);
        const currentBalanceValue =parseInt (balanceElem.textContent);
        balanceElem.textContent =(currentBalanceValue +amount).toFixed(2);


        logDonation (amount ,source ,place);
        inputField.value ='';

    }
    else{
        alert('please enter a valid donation amount');
    }
}


function logDonation(amount,source,place)
{

    
    const transactionContainer = document.getElementById('transaction-container');
    const date = new Date().toLocaleString("en-BD",{timeZone:"Asia/Dhaka"});
    const donationMessage = document.createElement('div');
   
    donationMessage.classList.add('bg-base-100', 'p-4', 'rounded', 'mb-4', 'shadow-lg' ); 

  
    donationMessage.innerHTML = `
<h2>${amount} Taka is donated for ${place} at ${source}  </h2> 
<p class="text-gray-400">Date:${date} ${new Date()}</p>
`;

    transactionContainer.appendChild(donationMessage);


   
}

document.getElementById("Noakhali-Donate-btn").onclick = function(){
    updateDonation('Noakhali-input-donation','Noakhali-balance','Noakhali','famine-2024');
};
document.getElementById("Feni-Donate-btn").onclick = function(){
    updateDonation('Feni-input-donation','Feni-balance','Feni','Flood Relief');
};
document.getElementById('Quota-Donate-btn').onclick= function(){

    updateDonation('Quota-input-donation','Quota-balance','Quota','aid for injured in the Quota Movement ');
}


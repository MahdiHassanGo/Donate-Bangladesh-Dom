const currentBalanceElem =document.getElementById('Current-balance');

let currentBalance = parseInt(currentBalanceElem.textContent);

const modal= document.getElementById('donation-modal');
const closeModalBtn= document.getElementById('close-modal-btn');
const donationAmountMessage= document.getElementById('donation-messageBox');

function showModal (amount ,place){
    donationAmountMessage.innerHTML =
    `
    <p>You have donated <span class='font-bold text-green-600'>${amount} taka</span> to <span class='font-bold'>${place} </span> succesfully</p>

    `;
    modal.classList.remove('hidden');
}
closeModalBtn.addEventListener('click',function(){
    modal.classList.add('hidden');
})


function updateDonation(inputId,balanceId,source,place){
    const inputField = document.getElementById(inputId);
    const amount =parseInt (inputField.value)  ;

    if(amount >0 && amount <= currentBalance)
    {
        currentBalance -=amount;
        currentBalanceElem.textContent = currentBalance.toFixed(0);

        const balanceElem =document.getElementById(balanceId);
        const currentBalanceValue =parseInt (balanceElem.textContent);
        balanceElem.textContent =(currentBalanceValue +amount).toFixed(0);


        logDonation (amount ,source ,place);
        inputField.value ='';

        showModal(amount,place);

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
<p class="text-gray-400 text-xs">Date:${date}${new Date()}</p>
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


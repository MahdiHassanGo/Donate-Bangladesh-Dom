document.getElementById('btn-show-Donation').addEventListener('click',function(){
    showSectionById('Donation-form');
    this.classList.add('active');
    this.classList.remove('inactive');
    document.getElementById('btn-show-transaction').classList.remove('active');
    document.getElementById('btn-show-transaction').classList.add('inactive');

});
document.getElementById('btn-show-transaction').addEventListener('click', function () {
    showSectionById('transaction-section');
    this.classList.add('active');
    this.classList.remove('inactive');
    document.getElementById('btn-show-Donation').classList.remove('active');
    document.getElementById('btn-show-Donation').classList.add('inactive');

});

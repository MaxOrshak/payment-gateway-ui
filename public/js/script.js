const currentYear = new Date().getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const cardNumber = document.querySelector('input[name="card[number]"]');
const monthDropdown = document.querySelector('select[name="card[expiryMonth]"]');
const yearDropdown = document.querySelector('select[name="card[expiryYear]"]');

const formatCardNumber = value => {
    if (value.replace(/\s+/g, '').length > 16) {
        return null;
    }
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '');

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) => [$1, $2, $3, $4].filter(group => !!group).join(' '));
};

cardNumber.addEventListener('input', (e) => {
    cardNumber.value = formatCardNumber(e.target.value);
});

const monthOptions = months.map((item, index)=>{
    const option = document.createElement('option');
    option.value = String(index+1);
    option.innerText = item;
    return option;
});
monthDropdown.append(...monthOptions);

const yearOptions = [...Array(9).keys()].map((item) => {
    const option = document.createElement('option');
    option.value = String(item + currentYear).slice(2, 4);
    option.innerText = String(item + currentYear);
    return option;
})
yearDropdown.append(...yearOptions);

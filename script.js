const submitButton  =  document.querySelector(`#submit`);
const prices = document.querySelectorAll(`.price`);
const total = document.querySelector(`.totalAmount`);



submitButton.addEventListener('click', (e) =>{

    let sum = 0;

    for(let i = 1; i  < prices.length; i++)
        {
            sum += Number(prices[i].value)
        }

    total.value = sum;
})


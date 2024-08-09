const submitButton  =  document.querySelector(`#submit`);
const prices = document.querySelectorAll(`.price`);
const total = document.querySelector(`.totalAmount`);





submitButton.addEventListener('click', (e) =>{

    let sum = 0;
    for(let i = 0; i < prices.length; i++)
        {
            //check if all input fields are filled 
            if(prices[i].value == "" ||  prices[i].value == null)
            {
               alert("Plese filled all the input field")
               return
            }
            else
            {
                    //number() -  convert  string to number
                    sum += Number(prices[i].value)
            }

        
        }

    total.value = sum;


})


const registerLink = document.getElementById('registerLink'); 
const registerForm = document.getElementById('registerForm');

console.log(registerLink);

registerLink.addEventListener('click', () => {
    alert('button clicked');
    registerForm.style.display = "block";
});

const registeredCustomers =[];

function register() {
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastName');
    let password = document.getElementById('password');

    let newCustomer = { 
        newCustomerfirstName: firstName,
        newCustomerlastName: lastName,
        newCustomerpassword: password,
    };

    registeredCustomers.push(newCustomer);
    alert(`New customer ${firstName} ${lastName}, has been registered`);
    

    clearForm(); // after registering
}

function clearForm() {
    let firstName = document.getElementById('firstName').value = '';
    let lastName = document.getElementById('lastName').value = '';
   let password =document.getElementById('password').value =''

}

// feedbackform
const feedbacklink =  document.getElementById('feedbackLink' )
const feedbackForm =document.getElementById( 'feedbackForm') 
console.log(feedbacklink)

feedbacklink.AddEventListener( 'click',()=> {
alert( 'submit button clicked')
feedbackForm .style.dispay="block"







} );


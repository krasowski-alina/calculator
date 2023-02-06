gsap.from("h1", {
    x: 300,
    delay: 0.3,
    opacity: 0, 
    duration: 1.3,
})
gsap.from("#bill", {
    x: 300,
    opacity: 0,
    delay: 0.5, 
    duration: 1.3,

})
gsap.from("#people", {
    x: 300,
    opacity: 0, 
    delay: 0.7,
    duration: 1.5,
})
gsap.from(".block-element", {
    x: 300,
    delay: 0.3,
    opacity: 0, 
    duration: 0.8,
    rotate: 360,
    stagger: 0.3
})
gsap.from(".animate", {
    opacity: 0, 
    delay: 1,
    duration: 1.5,
    stagger: 0.4,
    ease: "power2.in"
})
const addTip = document.querySelector('#addTip');
addTip.addEventListener('click', showTipOptions);

const calculate = document.querySelector('#calc');
calculate.addEventListener('click', calculateAmount);

function showTipOptions(e){
    e.preventDefault();
    const tip = document.querySelector('#tipOptions');
    tip.style.display = 'block';
}
function calculateAmount(e){
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tipOptions').value;

    if(bill === "" || people === "" || people < 1){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!',
            })
    }
    else if (isNaN(bill) || isNaN(people)){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please put in a number!',
            })
    }

    let billPerPerson = bill / people;
    document.querySelector('#billPerPerson').textContent = billPerPerson.toFixed(2);

    let tipPerPerson = (bill * tip /100) / people;
    document.querySelector('#tipPerPerson').textContent = tipPerPerson.toFixed(2);

    let totalSum = billPerPerson + tipPerPerson;
    document.querySelector('#totalAmount').textContent = totalSum.toFixed(2);

}

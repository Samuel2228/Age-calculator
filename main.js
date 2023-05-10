let inputDate = document.getElementById('input-date');
let checkBtn = document.getElementById('check');
let con = document.getElementById('paragraph');


checkBtn.addEventListener('click', function(){
    inputDate.value;
    let currentYr = 2023;
    con.textContent = ' You Are ' + (currentYr - inputDate.value)  + ' Years Old';
})

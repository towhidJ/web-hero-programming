







// Update case number
function updateCaseNumber(product,price,isIncrassing)
{
    const caseInput = document.getElementById(product+'-number');
    let caseNumber = caseInput.value;
    
    if(isIncrassing)
    {
        caseNumber = parseInt(caseNumber)+1;
    }
    else{
        if (caseNumber >1)
        {
            caseNumber = parseInt(caseNumber)-1;
        }
    }
    caseInput.value = caseNumber;

    const caseTotal =document.getElementById(product+'-total');
    caseTotal.innerText = caseNumber*price;
}


//phone increse decrese event

document.getElementById('phone-plus').addEventListener('click', 
function(){
    updateCaseNumber('phone',1219,true)
})

document.getElementById('phone-minus').addEventListener('click', 
function(){
    updateCaseNumber('phone',1219,false)
})



//handel case increse decrese event
document.getElementById('case-plus').addEventListener('click', 
function(){
    updateCaseNumber('case',59,true)
})

document.getElementById('case-minus').addEventListener('click', 
function(){
    updateCaseNumber('case',59,false);
})




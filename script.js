const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const andResult = document.getElementById('andResult');
const orResult = document.getElementById('orResult');
const xorResult = document.getElementById('xorResult');

function updateResults() {
    const a = check1.checked;
    const b = check2.checked;


    const and = a && b;
    andResult.textContent = and ? 'True' : 'False';
    andResult.className = and ? 'true' : 'false';


    const or = a || b;
    orResult.textContent = or ? 'True' : 'False';
    orResult.className = or ? 'true' : 'false';


    const xor = (a || b) && !(a && b);
    xorResult.textContent = xor ? 'True' : 'False';
    xorResult.className = xor ? 'true' : 'false';
}


check1.addEventListener('change', updateResults);
check2.addEventListener('change', updateResults);


updateResults();
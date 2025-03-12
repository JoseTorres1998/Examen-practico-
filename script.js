const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const andResult = document.getElementById('andResult');
const orResult = document.getElementById('orResult');
const xorResult = document.getElementById('xorResult');

function updateResults() {
    const a = check1.checked; // true = marcado, false = no marcado
    const b = check2.checked;

    // AND: "Solo es true si ambas casillas están marcadas"
    const and = a && b; // True solo si a y b son true
    andResult.textContent = and ? 'True' : 'False';
    andResult.className = and ? 'true' : 'false';

    // OR: "Es true si al menos una casilla está marcada"
    const or = a || b; // True si a o b (o ambos) son true
    orResult.textContent = or ? 'True' : 'False';
    orResult.className = or ? 'true' : 'false';

    // XOR: "Es true si solo una casilla está marcada, pero false si ambas o ninguna lo están"
    const xor = a !== b; // True si a y b son diferentes (uno true, otro false)
    xorResult.textContent = xor ? 'True' : 'False';
    xorResult.className = xor ? 'true' : 'false';

    // Verificación en consola para cumplir tus directrices
    console.log(`Casilla 1: ${a}, Casilla 2: ${b}`);
    console.log(`AND (ambas marcadas): ${and}`);
    console.log(`OR (al menos una marcada): ${or}`);
    console.log(`XOR (solo una marcada): ${xor}`);
}

check1.addEventListener('change', updateResults);
check2.addEventListener('change', updateResults);

updateResults();
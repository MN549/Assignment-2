function countChars() {
    const input = document.getElementById('input1').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of input) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-z]/i)) {
            consonantCount++;
        }
    }

    document.getElementById('result1').innerText = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

function checkPalindrome() {
    const input = document.getElementById('input2').value;
    const reversed = input.split('').reverse().join('');

    const result = input === reversed ? 'Palindrome' : 'Not a Palindrome';
    document.getElementById('result2').innerText = result;
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById('result3').innerText = 'Invalid input';
        return;
    }

    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;

    document.getElementById('result3').innerText = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
}

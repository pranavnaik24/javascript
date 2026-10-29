// String operations on a feedback message
let msg = 'Great service and friendly staff';

console.log('Message:', msg);
console.log('Length:', msg.length);
console.log('Substring (0, 13):', msg.substring(0, 13));
console.log('Replace:', msg.replace('service', 'support'));
console.log('Split into words:', msg.split(' '));
console.log('Reversed string:', msg.split('').reverse().join(''));

// Functions and arrow functions
const isPalindrome = (str) => {
  let s = str.toLowerCase().replace(/\s/g, '');
  return s === s.split('').reverse().join('');
};

const factorial = (n) => {
  if (n < 0 || !Number.isInteger(n)) {
    return 'Invalid input';
  }

  let f = 1;
  for (let i = 2; i <= n; i++) {
    f *= i;
  }
  return f;
};

console.log('"madam" is a palindrome:', isPalindrome('madam'));
console.log('"hello" is a palindrome:', isPalindrome('hello'));
console.log('Factorial of 6:', factorial(6));

// Filter unwanted words and analyse feedback
const banned = ['bad', 'worst'];

function filterFeedback(text) {
  let words = text.split(' ');
  let clean = words.map((word) =>
    banned.includes(word.toLowerCase()) ? '***' : word
  );
  return clean.join(' ');
}

let fb = 'Great bad and friendly staff';

console.log('Filtered message:', filterFeedback(fb));
console.log(
  'Word count:',
  fb.split(' ').length,
  "| Contains 'friendly':",
  fb.includes('friendly')
);
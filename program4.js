const log = (m) => { 
document.getElementById('log').innerHTML += '&bull; ' + m + '<br>'; 
localStorage.setItem('eventLog', // browser storage 
document.getElementById('log').innerHTML); 
}; 
 
// restore previous log from localStorage 
document.getElementById('log').innerHTML = 
localStorage.getItem('eventLog') || ''; 
 
// 1. CLICK + EVENT BUBBLING (inner -> outer) 
document.getElementById('btn').addEventListener('click', (e) => { 
log('click -> BUTTON handler (target: ' + e.target.tagName + ')'); 
// e.stopPropagation(); // uncomment to stop bubbling here 
}); 
document.getElementById('container').addEventListener('click', 
() => log('click bubbled up to -> DIV container')); 
document.body.addEventListener('click', 
() => log('click bubbled up to -> BODY')); 
 
// 2. MOUSE and DOUBLE-CLICK events 
document.getElementById('btn').addEventListener('mouseover', 
() => log('mouseover -> cursor entered Click Me')); 
document.getElementById('head').addEventListener('dblclick', (e) => { 
e.target.style.color = 'purple'; 
log('dblclick -> heading colour toggled'); 
}); 
 
// 3. KEYBOARD events 
const box = document.getElementById('box'); 
box.addEventListener('keydown', (e) => log('keydown: ' + e.key)); 
box.addEventListener('keyup', () => log('keyup, value = ' + box.value)); 
 
// 4. DYNAMIC elements + EVENT DELEGATION 
let count = 0; 
document.getElementById('addLesson').addEventListener('click', () => { 
const li = document.createElement('li'); 
li.textContent = 'Lesson ' + (++count); 
document.getElementById('lessons').appendChild(li); 
log('Lesson ' + count + ' added dynamically'); 
}); 
 
// ONE listener on the parent handles ALL present & future <li> 
document.getElementById('lessons').addEventListener('click', (e) => { 
if (e.target.tagName === 'LI') 
log(e.target.textContent + ' clicked (via DELEGATION)'); 
});
const nameElement = document.getElementById('name');
const cgpaElement = document.getElementById('cgpa');
const statusElement = document.getElementById('status');

// 1. Update the student details
document.getElementById('btnUpdate').addEventListener('click', () => {
  nameElement.innerText = nameElement.innerText.toUpperCase();
  statusElement.innerText = 'ELIGIBLE FOR PLACEMENT';

  const cgpaValue = parseFloat(cgpaElement.innerText);

  if (cgpaValue >= 7.5 && !cgpaElement.innerText.includes('Distinction')) {
    cgpaElement.innerHTML = `${cgpaValue} <b>(Distinction)</b>`;
  }
});

// 2. Highlight the CGPA
document.getElementById('btnHighlight').addEventListener('click', () => {
  cgpaElement.style.color = 'red';
  cgpaElement.style.fontWeight = 'bold';
  cgpaElement.style.backgroundColor = 'yellow';
});

// 3. Change the theme and title tooltip
document.getElementById('btnTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.getElementById('title').setAttribute(
    'title',
    'Theme changed dynamically'
  );
});

// 4. Add a new note to the page
const note = document.createElement('p');
note.innerText = 'Content updated without page reload.';
document.body.appendChild(note);
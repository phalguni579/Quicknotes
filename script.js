document.getElementById('noteForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const res = await fetch('http://localhost:5000/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });
  const data = await res.json();
  showNote(data);
});

async function loadNotes() {
  const res = await fetch('http://localhost:5000/notes');
  const notes = await res.json();
  notes.forEach(showNote);
}

function showNote(note) {
  const container = document.getElementById('notesContainer');
  const div = document.createElement('div');
  div.className = 'note';
  div.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
  container.appendChild(div);
}

loadNotes();

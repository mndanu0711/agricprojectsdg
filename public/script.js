// Register Vet
async function registerVet(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const res = await fetch('/api/vet/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const msg = await res.text();
  alert(msg);
  if (res.ok) event.target.reset();
}

// Load Vets
async function loadVets() {
  const res = await fetch('/api/vets');
  const vets = await res.json();
  const list = document.getElementById('vetList');
  list.innerHTML = vets.map(v => `
    <div class="vet-card">
      <h3>${v.fullname}</h3>
      <p><b>Specialization:</b> ${v.specialization}</p>
      <p><b>Experience:</b> ${v.experience} years</p>
      <p><b>Contact:</b> ${v.phone} | ${v.email}</p>
      <p><b>Location:</b> ${v.location}</p>
    </div>
  `).join('');
}

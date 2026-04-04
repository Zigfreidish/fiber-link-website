const form = document.getElementById('demo-form');
const success = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const existing = JSON.parse(localStorage.getItem('fiber-link-demo-requests') || '[]');
    existing.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem('fiber-link-demo-requests', JSON.stringify(existing));

    success.hidden = false;
    success.textContent = 'Thanks — your interest has been captured locally in this placeholder flow. Demo invites are coming soon.';
    form.reset();
  });
}

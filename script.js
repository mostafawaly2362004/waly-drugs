// Language toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
  const htmlEl = document.documentElement;
  if (htmlEl.lang === 'ar') {
    htmlEl.lang = 'en'; htmlEl.dir = 'ltr';
    // TODO: swap text to English translations
    document.getElementById('lang-toggle').textContent = 'AR';
  } else {
    htmlEl.lang = 'ar'; htmlEl.dir = 'rtl';
    document.getElementById('lang-toggle').textContent = 'EN';
  }
});

// Dose calculator logic
document.getElementById('dose-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const age = parseInt(document.getElementById('age').value);
  const creat = parseFloat(document.getElementById('creatinine').value);
  const gender = document.getElementById('gender').value;
  
  // Example: Cockcroft-Gault for CrCl
  let crcl = ((140 - age) * weight) / (72 * creat);
  if (gender === 'female') crcl *= 0.85;

  document.getElementById('dose-result').innerHTML =
    `<p>معدل تصفية الكرياتينين: ${crcl.toFixed(2)} mL/min</p>`;
});

// Tabs switch
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const icon = themeToggle.querySelector('i');

  // Verifica se há um tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}); 
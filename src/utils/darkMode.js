function darkMode() {
  const btnDarkMode = document.getElementById('switch');

  btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDarkMode.classList.toggle('active');

    //   Guardamos el modo nocturne en localstores
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
  });

  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnDarkMode.classList.add('active');
  } else {
    document.body.classList.remove('dark');
    btnDarkMode.classList.remove('active');
  }
}

export default darkMode;

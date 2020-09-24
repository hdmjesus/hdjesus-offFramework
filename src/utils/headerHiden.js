function hidenHeader() {
  const hd = document.getElementById('header');
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= 70) {
      hd.classList.add('up');
    }
    if (scrollTop <= 0) {
      hd.classList.remove('up');
    }
  });
}

export default hidenHeader;

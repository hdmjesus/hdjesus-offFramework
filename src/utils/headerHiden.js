function hidenHeader() {
  const hd = document.getElementById('header');
  const $buttonUp = document.getElementById('button-up');
  const $whatappButton = document.getElementById('whatsapp');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= 70) {
      hd.classList.add('up');
    } else {
      hd.classList.remove('up');
    }
    if (scrollTop >= 270) {
      $buttonUp.classList.remove('display-off');
    } else {
      $buttonUp.classList.add('display-off');
    }

    if (scrollTop >= 2460) {
      $whatappButton.classList.add('display-off');
    } else {
      $whatappButton.classList.remove('display-off');
    }
  });

  const scrollUp = () => {
    const currrentScroll = document.documentElement.scrollTop;

    if (currrentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currrentScroll - currrentScroll / 10);
    }
  };

  $buttonUp.addEventListener('click', scrollUp);
}

export default hidenHeader;

function hidenHeader() {
  const hd = document.getElementById('header');
  const $buttonUp = document.getElementById('button-up');
  const $whatappButton = document.getElementById('whatsapp');
  const $facebookButton = document.getElementById('fb-root');

  window.addEventListener('scroll', (event) => {
    const scrollTop = window.pageYOffset;
    console.log(scrollTop);

    const destopS = window.matchMedia('Screen and (min-width:862px)');
    const destopM = window.matchMedia('Screen and (min-width:1200px)');

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

    if (scrollTop >= 2039) {
      $whatappButton.classList.add('display-off');
    } else {
      $whatappButton.classList.remove('display-off');
    }
    if (destopS.matches) {
      console.log('sisa');
      if (scrollTop >= 1600) {
        $whatappButton.classList.add('display-off');
        $facebookButton.classList.add('display-off');
      } else {
        $whatappButton.classList.remove('display-off');
        $facebookButton.classList.remove('display-off');
      }
    }
    if (destopM.matches) {
      if (scrollTop >= 1200) {
        $whatappButton.classList.add('display-off');
        $facebookButton.classList.add('display-off');
      } else {
        $whatappButton.classList.remove('display-off');
        $facebookButton.classList.remove('display-off');
      }
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

function skills() {
  const nl = document.getElementsByClassName('skillbar');
  const arr = [].slice.call(nl);

  arr.forEach((skill) => {
    const { percent } = skill.dataset;
    const percertFloat = parseFloat(percent);
    const { lenguaje } = skill.dataset;
    const nameSkill = skill.children[0];
    const progressSkill = skill.children[1];
    const percentSkill = skill.children[2];
    const condition = percertFloat <= 30;
    console.log(condition);
    switch (lenguaje) {
      case 'Javascript':
        if (condition) {
        } else {
          nameSkill.classList.add('javascript');
        }
        progressSkill.classList.add('javascriptLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;

      case 'Webpacks':
        if (condition) {
        } else {
          nameSkill.classList.add('webpacks');
        }
        progressSkill.classList.add('webpacksLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;

      case 'CSS':
        if (condition) {
        } else {
          nameSkill.classList.add('css');
        }
        progressSkill.classList.add('cssLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;

      case 'SASS':
        if (condition) {
        } else {
          nameSkill.classList.add('sass');
        }
        progressSkill.classList.add('sassLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;

      case 'Tailwind':
        if (condition) {
        } else {
          nameSkill.classList.add('tailwind');
        }
        progressSkill.classList.add('tailwindLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;

      case 'Bootstrap':
        if (condition) {
        } else {
          nameSkill.classList.add('bootstrap');
        }
        progressSkill.classList.add('bootstrapLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;

      case 'React':
        if (condition) {
        } else {
          nameSkill.classList.add('react');
        }
        progressSkill.classList.add('reactLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;

      case 'Redux':
        if (condition) {
        } else {
          nameSkill.classList.add('redux');
        }
        progressSkill.classList.add('reduxLight');
        progressSkill.style.width = percent;
        percentSkill.innerText = percent;
        break;
      default:
        break;
    }
  });
}

export default skills;

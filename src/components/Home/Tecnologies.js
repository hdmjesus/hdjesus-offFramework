const Tecnologies = () => {
  const javascript_Percent = 50;
  const webpacks_Percent = 30;
  const css_Percent = 50;
  const sass_Percent = 40;
  const tailwind_Percent = 40;
  const bootstrap_Percent = 20;
  const react_Percent = 30;
  const redux_Percent = 20;

  const view = `
  <section class="tecnologies">
      <div class="container">
        <h2 class="title-level2">Skills</h2>
        <div class="skills" id="skills">
          <div class="skill">
            <div class="skillbar" data-percent="${javascript_Percent}%" data-lenguaje="Javascript">
              <div class="skillbar__title">
                <span>JavaScript</span>
              </div>

              <div class="skillbar__bar"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
          <div class="skill">
            <div class="skillbar" data-percent="${webpacks_Percent}%" data-lenguaje="Webpacks">
              <div class="skillbar__title">
                <span>Webpacks</span>
              </div>

              <div class="skillbar__bar"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
          <div class="skill">
            <div class="skillbar" data-percent="${css_Percent}%" data-lenguaje="CSS">
              <div class="skillbar__title">
                <span>CSS</span>
              </div>

              <div class="skillbar__bar medium"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
          <div class="skill">
            <div class="skillbar" data-percent="${sass_Percent}%" data-lenguaje="SASS">
              <div class="skillbar__title">
                <span>SASS</span>
              </div>

              <div class="skillbar__bar"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
          <div class="skill">
            <div class="skillbar" data-percent="${tailwind_Percent}%" data-lenguaje="Tailwind">
              <div class="skillbar__title">
                <span>Tailwind CSS</span>
              </div>

              <div class="skillbar__bar"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
          <div class="skill">
            <div class="skillbar" data-percent="${bootstrap_Percent}%" data-lenguaje="Bootstrap">
              <div class="skillbar__title">
                <span>Bootstrap</span>
              </div>

              <div class="skillbar__bar"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
          <div class="skill">
            <div class="skillbar" data-percent="${react_Percent}%" data-lenguaje="React">
              <div class="skillbar__title">
                <span>React</span>
              </div>

              <div class="skillbar__bar"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
          <div class="skill">
            <div class="skillbar" data-percent="${redux_Percent}%" data-lenguaje="Redux">
              <div class="skillbar__title">
                <span>Redux</span>
              </div>

              <div class="skillbar__bar"></div>
              <div class="skillbar__percent">90%</div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  return view;
};

export default Tecnologies;

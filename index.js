document.addEventListener("DOMContentLoaded", load);

function load() {
  getData();
};


const getData = async () => {
  const response = await fetch('./data/data.json');
  const { skills, hobbies, courses, experiences } = await response.json();
  loadSkills(skills);
  loadHobbies(hobbies);
  loadAcademic(courses)
  loadExperience(experiences)
};


const loadSkills = (skills) => {
  const skillsSection = document.querySelector('#skills');
  const sectionTitles = document.createElement('h3');
  sectionTitles.className = 'section__titles';
  sectionTitles.textContent = 'Skills';
  const container = document.createElement('div');
  container.className = 'container';
  container.appendChild(sectionTitles);
  const skillsLine = document.createElement('div');
  skillsLine.className = 'skills__line';

  skills.forEach(skill => {
    const template =`<div class="skills__box">
                        <ul>
                          <li><img src=${skill.imageUrl} /></li>
                          <li class="skills__name">${skill.name}</li>
                        </ul>
                      </div>`;
                  
    skillsLine.insertAdjacentHTML('beforeend', template);
  });

  container.appendChild(skillsLine);
  skillsSection.appendChild(container);
} 


const loadHobbies = (hobbies) => {
  const hobbiesSection = document.querySelector('#hobbies');
  let template = '<div class="container"><h3 class="section__titles">Hobbies</h3><div class="hobbies__line">';
  const endOfTemplate = '</div></div>';

  hobbies.forEach(hobbie => {
    template +=`<div class="hobbies__box">
                  <ul>
                    <li><img src="${hobbie.imageUrl}" /></li>
                    <li class="hobbies__name">${hobbie.name}</li>
                  </ul>
                </div>`;
  });

  hobbiesSection.innerHTML = template + endOfTemplate;
}


const loadAcademic = (courses) => {
  const academicSection = document.querySelector('#academic');
  let template = `<div class="container">
                    <h2 class="section__titles">Formación académica</h2>
                    <div class="academic__courses">`;
  const endOfTemplate = '</div></div>';

  courses.forEach(course => {
    template +=`<ul class="academic__courses__list">
                  <!-- Logotipo de la institución de formación -->
                  <li class="academic__courses__item__img">
                    <img src=${course.imageUrl} />
                  </li>
                  <li class="academic__courses__item__title">
                    <h4>${course.title}</h4>
                  </li>
                  <li class="paragraph academic__courses__item__subtitle">
                    <p>${course.subtitle}</p>
                  </li>
                </ul>`;
  });

  academicSection.innerHTML = template + endOfTemplate;
}


const loadExperience = (experiences) => {
  const experienceSection = document.querySelector('#experience');
  let template = '<div class="container"><h2 class="section__titles">Experiencia Profesional</h2>';
  const endOfTemplate = '</div></div>';

  experiences.forEach((exp, index) => {
    template +=`<div class="experience__box ${(index % 2 !== 0) && 'reverse'}">
                  <!-- Logotipo/captura de pantalla de tu proyecto -->
                  <img class="experience__img" src=${exp.imageUrl} />
                  <div class="experience__info">
                    <h2 class="experience__title">${exp.title}</h2>
                    <h3 class="paragraph experience__text">${exp.xpText}</h3>
                    <div>
                      <!-- Enlace del proyecto en Github o GithubPages -->
                      <span>
                        <a href=${exp.repositoryLink} target="_blank">
                          <button class="button repo-btn">Repositório</button>
                        </a>
                      </span
                      >
                      <span>
                        <a href=${exp.demoLink} target="_blank">
                          <button class="button">Ver demo</button>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>`;
  });

  experienceSection.innerHTML = template + endOfTemplate;
}
import { messages, errorTypes } from "./customErrors.js";
import { 
    emailValidation, 
    messageValidation, 
    nameValidation, 
    subjectValidation 
  } from "../helpers/inputValidations.js";

document.addEventListener("DOMContentLoaded", load);


function load() {
  getData();
  document.querySelectorAll('.formcontato__input').forEach(input => {
    input.addEventListener('blur', (e) => { validateInput(e), enableFormButton() });
    input.addEventListener('invalid', (e) => { e.preventDefault(); validateInput(e); });
  });
  document.querySelector('#contacto').addEventListener('submit', submit);
};



const getData = async () => {
  const response = await fetch('./data/data.json');
  const { skills, hobbies, courses, experiences } = await response.json();
  loadSkills(skills);
  loadHobbies(hobbies);
  loadAcademic(courses);
  loadExperience(experiences);
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
};


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
};


const loadAcademic = (courses) => {
  const academicSection = document.querySelector('#formacion');
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
};


const loadExperience = (experiences) => {
  const experienceSection = document.querySelector('#experiencia');
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
};


const validateInput = (e) => { 
  const input = e.target || e; //Reutilizacion de función para poder recibir el elemento input o su evento.
  const errorMessageNode = input.nextElementSibling;
  let mensaje;

  input.classList.remove('input-error');
  errorMessageNode.classList.remove('active-error');
  errorMessageNode.textContent = '';

  //Control de validaciones HTML (sin custonError activo) mediante API "ValidityState"
  if(!input.validity.valid && !input.validity.customError) {
    errorTypes.forEach((error) => {
      if (input.validity[error]) {
        mensaje = messages[input.name][error];
      }
    });

    input.classList.add('input-error');
    errorMessageNode.classList.add('active-error');
    errorMessageNode.textContent = mensaje;
    return;
  };

  //Validaciones en JS utilizando método de API "HTMLInputElement" para setear el customError de API "ValidityState"
  input.setCustomValidity('');

  const value = input.value;

  if(input.name == "nombre") {
    nameValidation(input, value);
  };

  if(input.name === 'email') {
    emailValidation(input, value);
  };

  if (input.name == "asunto") {
    subjectValidation(input, value);
  };

  if (input.name == "mensaje") {
    messageValidation(input, value);
  };
  
  if(input.validity.customError) {
    mensaje = messages[input.name].customError;
  
    input.classList.add('input-error');
    errorMessageNode.classList.add('active-error');
    errorMessageNode.textContent = mensaje;
  };
};


const enableFormButton = () => {
  const button = document.querySelector('#contacto form[name="form"] button');
  let enable = true;
  
  document.querySelectorAll('.formcontato__input').forEach(input => {
    if (!input.validity.valid) {
      enable = false;
    };
  });

  if(enable) {
    button.classList.remove('btn-disabled');
    button.disabled = false;
  }else {
    button.classList.add('btn-disabled');
    button.disabled = true;
  };
};


const submit = (e) => {
  e.preventDefault();
  let validatedForm = true;

  document.querySelectorAll('.formcontato__input').forEach(input => {
    validateInput(input);
    if (!input.validity.valid) {
      validatedForm = false;
    };
  });
  
  if(validatedForm) {
    const form = document.querySelector('#contacto form[name="form"]');
    console.log('El formulario SE ENVÍA');
    form.submit();
  }else {
    console.log('El formulario NO SE ENVÍA');
  };
};
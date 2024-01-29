const animatedImage = document.getElementById('animated-image');
const imageText = document.getElementById('image-text');
const pageDescription = document.getElementById('page-description');

let isImageDisplayed = false;

animatedImage.addEventListener('click', () => {
    // Toggle între imagine și text
    if (!isImageDisplayed) {
        animatedImage.style.transform = 'scale(1.2)';
        animatedImage.style.transition = 'transform 0.3s ease'; // Adăugăm o tranziție pentru animația de mărire
        imageText.style.display = 'block';
        pageDescription.style.display = 'none';
    } else {
        animatedImage.style.transform = 'scale(1)';
        animatedImage.style.transition = 'transform 0.3s ease';
        imageText.style.display = 'none';
        pageDescription.style.display = 'block';
    }

    // Invertim starea imaginii
    isImageDisplayed = !isImageDisplayed;
});

function displayTutorials() {
    const tutorialList = document.getElementById("tutorial-list");

    tutorials.forEach(tutorial => {
        const tutorialElement = document.createElement("div");
        tutorialElement.innerHTML = `<h3>${tutorial.title}</h3><p>${tutorial.content}</p><a href="#" onclick="showTutorial(${tutorial.id})">Vezi detaliile</a>`;
        tutorialList.appendChild(tutorialElement);
    });
}

function showTutorial(tutorialId) {
    const selectedTutorial = tutorials.find(tutorial => tutorial.id === tutorialId);

    if (selectedTutorial) {
        const tutorialContent = document.getElementById("exercise-content");
        tutorialContent.innerHTML = `<h3>${selectedTutorial.title}</h3><p>${selectedTutorial.content}</p>`;
    }
}

function displayExercises() {
    const exerciseList = document.getElementById("exercise-list");
    const exerciseContent = document.getElementById("exercise-content");

    exercises.forEach(exercise => {
        const exerciseElement = document.createElement("div");
        exerciseElement.innerHTML = `<h3>${exercise.title}</h3><p>${exercise.description}</p><button onclick="showExerciseContent(${exercise.id})">Vezi detaliile</button>`;
        exerciseList.appendChild(exerciseElement);
    });

    window.showExerciseContent = function(exerciseId) {
        const selectedExercise = exercises.find(exercise => exercise.id === exerciseId);

        if (selectedExercise) {
            exerciseContent.innerHTML = `<h3>${selectedExercise.title}</h3><p>${selectedExercise.description}</p>`;
        }
    };
}
const tutorials = [
    { id: 1, title: "Introducere în JavaScript", content: "JavaScript este un limbaj de programare de înaltă nivel, interpretat, cu orientare pe obiect, și folosit în principal pentru dezvoltarea web. Creat inițial pentru a adăuga interactivitate paginilor web, JavaScript a evoluat și a devenit un limbaj esențial pentru construirea unei varietăți de aplicații, inclusiv cele de tip server, mobile și desktop"},
    // alte obiecte tutorial
];

function displayTutorials() {
    // Verifică dacă tutorials este un array înainte de a apela forEach
    if (Array.isArray(tutorials)) {
        const tutorialList = document.getElementById("tutorial-list");

        tutorials.forEach(tutorial => {
            const tutorialElement = document.createElement("div");
            tutorialElement.innerHTML = `<h3>${tutorial.title}</h3><p>${tutorial.content}</p><a href="#" onclick="showTutorial(${tutorial.id})">Vezi detaliile</a>`;
            tutorialList.appendChild(tutorialElement);
        });
    } else {
        console.error("Variabila tutorials nu este un array.");
    }
}
const exercises = [
    { id: 1, title: "Exercițiu 1", description: "Scrieți un program JavaScript care afișează 'Hello, World!' în consolă."},
];

function displayExercises() {
    // Verifică dacă exercises este un array înainte de a apela forEach
    if (Array.isArray(exercises)) {
        const exerciseList = document.getElementById("exercise-list");
        const exerciseContent = document.getElementById("exercise-content");

        exercises.forEach(exercise => {
            const exerciseElement = document.createElement("div");
            exerciseElement.innerHTML = `<h3>${exercise.title}</h3><p>${exercise.description}</p><button onclick="showExerciseContent(${exercise.id})">încarcă exercițiu.</button>`;
            exerciseList.appendChild(exerciseElement);
        });

        window.showExerciseContent = function(exerciseId) {
            const selectedExercise = exercises.find(exercise => exercise.id === exerciseId);

            if (selectedExercise) {
                exerciseContent.innerHTML = `<h3>${selectedExercise.title}</h3><p>${selectedExercise.description}</p>`;
            }
        };
    } else {
        console.error("Variabila exercises nu este un array.");
    }
}

// Adăugăm o funcție pentru a redirecționa către W3Schools
function redirectToW3Schools() {
    window.location.href = "https://www.w3schools.com";
}

function animateOnHover(element) {
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.3s ease';
    });

    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
}

displayTutorials();
displayExercises();

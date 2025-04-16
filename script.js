const images = [
    'AQUA.png',
    'AZUL.png',
    'MORADITO.png',
    'MORADO.png',
    'MOSTAZA.png',
    'MOSTAZAQUEMADA.png',
    'VERMELLON.png'
];

const phrases = [
    'Siempre fuimos un "hasta pronto", mas nunca supimos olvidarnos',
    'Siempre que veas un atardecer, recuerda que morí amando las cosas sencillas de la vida',
    'Nunca digas nunca... porque el destino escucha que esa petición es la que por ley tiene que cumplirse más rápido',
    'Nunca pienses que estos versos no son para ti... pues hasta el más mínimo de mis pensamientos te pertenece',
    '¡Ay amor! El querer siempre trae consigo un poco de dolor y caminos de nostalgia.',
    'Siento tristeza por aquellos que nunca vieron en la vida, la posibilidad de cambiar todo para mejor o peor aún, para sí mismos.',
    'La poesía es el refugio para nosotros, los olvidados de la vida, los que siempre fueron un recuerdo entre el olvido',
    'Siempre quise escribir... más que para mí, para aquellos que nunca han encontrado su lugar en el mundo.'
];

const mainImage = document.getElementById('mainImage');
const changeButton = document.getElementById('changeButton');
const randomPhrase = document.getElementById('randomPhrase');
const initialText = document.getElementById('initialText');

changeButton.addEventListener('click', () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomText = phrases[Math.floor(Math.random() * phrases.length)];

    mainImage.src = randomImage;
    mainImage.style.display = 'block'; // Muestra la imagen
    randomPhrase.textContent = randomText;
    initialText.style.display = 'none'; // Oculta el texto inicial
});

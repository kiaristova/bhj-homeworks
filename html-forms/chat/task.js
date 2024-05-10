let selectValues = [ 
    {label: 'Драма', value: 'drama'},
    {label: 'Комедия', value: 'comedy'},
    {label: 'Фантастика', value: 'sci-fi'}
];

let genre = document.getElementById('genre');
selectValues.forEach(el => {
    let newOption = new Option(el.label, el.value);
    genre.append(newOption);
    // console.log(el.label,el.value)
});

genre.addEventListener('change', event => {
const { value, options, selectedIndex } = event.currentTarget;
console.log(value);
console.log(options[selectedIndex].text);
});

const form = document.querySelector('form');
const content = document.querySelector('.content');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements['name'];
    const genre = form.elements['genre'];
    if (name.checkValidity() && genre.checkValidity()) {
        let nameText = name.value.trim();
        let genreText = genre[genre.selectedIndex].value.trim();
        content.innerHTML = '<p>Название фильма: '+nameText+'</p><p>Жанр: '+genreText+'</p>';
    }
    form.reset();
});
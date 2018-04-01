var movies = [
    {
        id: 1,
        title: "Harry Potter",
        desc: "film o czarodzieju",
        img: 'images/harry.jpg'
    },
    {
        id: 2,
        title: "Król Lew",
        desc: "Film opowiadajacy historię króla sawanny",
        img: 'images/krol_lew.jpg'
    },
    {
        id: 3,
        title: "Shrek",
        desc: "Opowieść o dużym zielonym ogrze",
        img: 'images/shrek.jpg'
    },
    {
        id: 4,
        title: "Piraci z Karaibów",
        desc: "Przygody Jacka Sparrowa",
        img: 'images/piraci.jpg'
    }
        
];

var moviesElements = movies.map(function(movie) {
   return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.img, height: 300})
        ); 
});

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));
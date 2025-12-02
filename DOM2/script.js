var arr = [
    {
        team: 'CSK',
        primary: '#F9CD05',
        secondary: '#1A237E',
        fullname: 'Chennai Super King',
        trophies: 5,
        captain: 'MSD'
    },
    {
        team: 'RR',
        primary: '#EA1A8E',
        secondary: '#003DA5',
        fullname: 'Rajasthan Royal',
        trophies: 1,
        captain: 'Sanju Samson'
    },
    {
        team: 'KKR',
        primary: '#3A225D',
        secondary: '#D4AF37',
        fullname: 'Kolkata Knight Riders',
        trophies: 3,
        captain: 'Ajinkya Rahane'
    },
    {
        team: 'MI',
        primary: '#004BA0',
        secondary: '#E6B800',
        fullname: 'Mumbai Indians',
        trophies: 5,
        captain: 'Hardik Panday'
    },
    {
        team: 'GT',
        primary: '#001C41',
        secondary: '#B4975A',
        fullname: 'Gujarat Titans',
        trophies: 1,
        captain: 'Shubhman Gill'
    },
    {
        team: 'SRH',
        primary: '#FF822A',
        secondary: '#000000',
        fullname: 'Sunrise Hyderabad',
        trophies: 1,
        captain: 'Pat Cummins'
    }
]

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var main = document.querySelector('main');
var fullname = document.querySelector('#fullname');
var trophies = document.querySelector('#trophies');
var captain = document.querySelector('#captain');

btn.addEventListener('click', function(){
    var a = Math.floor(Math.random() * arr.length);
    h1.innerHTML = arr[a].team;
    fullname.innerHTML = arr[a].fullname;
    trophies.innerHTML = arr[a].trophies;
    captain.innerHTML = arr[a].captain;
    h1.style.color = arr[a].secondary;
    fullname.style.color = arr[a].secondary;
    trophies.style.color = arr[a].secondary;
    captain.style.color = arr[a].secondary;
    main.style.backgroundColor = arr[a].primary;
})
"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<h3>' + coffee.roast + '</h3>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && searchInput.value === coffee.name) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var lightButton = document.querySelector('#lightButton');
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
// lightButton.addEventListener('click', updateCoffees);

var searchInput = document.getElementById("searchBox")
// var searchButton = searchInput.value
searchInput.addEventListener(onkeyup, updateCoffees)

// function autocomplete(input) {
//     if(input == " ") {
//         return [];
//     }
//     var reg = new RegExp(input)
//     return coffees.filter(function (coffee) {
//         if(coffee.match(reg)) {
//             return coffee
//         }
//     });
// }

// function showResults (val){
//     res = document.getElementById('result');
//     res.innerHTML = '';
//     let list = '';
//     let coffees = autocomplete(val);
//     for (let i = 0; i < ;coffees.length i++) {
//         list += coffees[i];
//     }
//     res.innerHTML = list;
}


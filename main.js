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
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let newCoffeeId = 20;
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
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);

var searchCoffees = function(event) {
    event.preventDefault();
    var searchedCoffees = [];
    var searchInput = document.getElementById("searchBox").value;
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchInput.toUpperCase()) || coffee.roast.toUpperCase().includes(searchInput.toUpperCase())) {
            searchedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(searchedCoffees);
}

document.getElementById('searchBox').addEventListener('keyup',searchCoffees);



var displayLRoast = function (event) {
    let lightRoastCoffees = [];
       coffees.forEach(function (coffee){
           if(coffee.roast === 'Light'){
               lightRoastCoffees.push(coffee);
               tbody.innerHTML = renderCoffees(lightRoastCoffees);
           }
       })

}
document.getElementById('lightButton').addEventListener('click', displayLRoast);

var displayMRoast = function (event) {
    let mediumRoastCoffees = [];
    coffees.forEach(function (coffee){
        if(coffee.roast === 'Medium'){
            mediumRoastCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(mediumRoastCoffees);
        }
    })

}
document.getElementById('mediumButton').addEventListener('click', displayMRoast);

var displayDRoast = function (event) {
    let darkRoastCoffees = [];
    coffees.forEach(function (coffee){
        if(coffee.roast === 'Dark'){
            darkRoastCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(darkRoastCoffees);
        }
    })

}
document.getElementById('darkButton').addEventListener('click', displayDRoast);

var displayAllRoast = function (event) {
    tbody.innerHTML = renderCoffees(coffees);
}
document.getElementById('allButton').addEventListener('click', displayAllRoast);

var addCustomersCoffee = function (event){
    event.preventDefault()
    let customerEnteredRoast = document.getElementById('customerRoast').value
    let customerEnteredName = document.getElementById('addYourBrew').value
    let customCoffee = {
        id: newCoffeeId++,
        name: customerEnteredName,
        roast: customerEnteredRoast
    };
    coffees.push(customCoffee);
    console.log(customerEnteredRoast)
    tbody.innerHTML = renderCoffees(coffees)

}
document.getElementById('submitRoast').addEventListener('click', addCustomersCoffee);

// let customerEnteredRoast = customerRoast.value
// console.log(customerEnteredRoast)
// document.getElementById('submitRoast').addEventListener('click', addCustomersCoffee);




//
//
// var displayMediumRoast = function (event) {
//     document.getElementById("coffees").innerText = mediumRoastedCoffees;
// }
// document.getElementById('mediumButton').addEventListener('click', displayRoast);
//
// var displayDarkRoast = function (event) {
//     document.getElementById("coffees").innerText = darkRoastedCoffees;
// }
// document.getElementById('darkButton').addEventListener('click', displayRoast);







// This function kind of works, will work with first letter of input or completed input for name, doesn't work
// for roast
// var searchCoffees = function(event) {
//     event.preventDefault();
//     var searchedCoffees = [];
//     var searchInput = document.getElementById("searchBox").value;
//     coffees.forEach(function(coffee) {
//         for (let i = 0; i < coffee.name.length; i++) {
//             if (searchInput === substr.coffee.name[i]) {
//                 searchedCoffees.push(coffee);
//             }
//         }
//
//     });
//     tbody.innerHTML = renderCoffees(searchedCoffees);
// }
// document.getElementById('searchBox').addEventListener('keyup',searchCoffees);








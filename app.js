'use strict';
var pix = [];
var clickCount = 0;
// new var for lab 12
var clickChart;
// end new var for lab 12
var chartDrawn = false;
var items = [];
var votes = [];

var pictureOne = document.getElementById('pictureOne');
var pictureTwo = document.getElementById('pictureTwo');
var pictureThree = document.getElementById('pictureThree');


// var resultsTable = document.getElementById('tallyResults');


function Product(name, displayName) {
  this.name = name;
  this.displayName = displayName;
  this.filepath = `img/${name}`;
  this.views = 0;
  this.clicks = 0;

  pix.push(this);
}



new Product('bag.jpg', 'Sylish bag');
new Product('banana.jpg', 'Banana oh la la');
new Product('bathroom.jpg', 'Bathroom upgrade');
new Product('boots.jpg', 'Killer boots');
new Product('breakfast.jpg', 'Breakfast club');
new Product('bubblegum.jpg', 'Meaty Bubblegum');
new Product('chair.jpg', 'Chair party ');
new Product('cthulhu.jpg', 'Cthulhu');
new Product('dog-duck.jpg', 'Dog Duck');
new Product('dragon.jpg', 'Puff the magic Dragon');
new Product('pen.jpg', 'Secret Pen');
new Product('pet-sweep.jpg', 'Pet Sweep');
new Product('scissors.jpg', 'Dont run with scissors');
new Product('shark.jpg', 'Shark tank');
new Product('sweep.png', 'Sweep');
new Product('tauntaun.jpg', 'Taun Taun');
new Product('unicorn.jpg', 'Unicorns are real');
new Product('usb.gif', 'USB');
new Product('water-can.jpg', 'Water Can');
new Product('wine-glass.jpg', 'Wine Glass');
// function randomize() {
//   return Math.floor(math.random() * allProducts.length);
// }
function chooseProduct() {
  var currentProduct = [];
  do {
    do {
      var randomNumber = Math.floor(Math.random() * pix.length);
      var picture = pix[randomNumber];
    } while (previousPictures.includes(picture) || currentProduct.includes(picture));
    currentProduct.push(picture);
  } while (currentProduct.length < 3);

  return currentProduct;
}

var previousPictures = [];
oneTurn();



function oneTurn() {
  var currentProduct = chooseProduct();
  render(currentProduct);

  for (var i = 0; i < 3; i++) {
    currentProduct[i].views++;
  }

  previousPictures = currentProduct;

  clickCount += 1;
}

function render(currentProduct) {
  pictureOne.src = currentProduct[0].filepath;

  pictureOne.title = currentProduct[0].displayName;

  pictureTwo.src = currentProduct[1].filepath;
  pictureTwo.title = currentProduct[1].displayName;

  pictureThree.src = currentProduct[2].filepath;
  pictureThree.title = currentProduct[2].displayName;

  pictureOne.addEventListener('click', handleClick);
  pictureTwo.addEventListener('click', handleClick);


  pictureThree.addEventListener('click', handleClick);
}



function handleClick(event) {
  if (clickCount < 26) {
    increaseClickCount(event.target.title);
    oneTurn();
  } else if (clickCount === 26) {
    updateChartArrays();
    drawChart();
    var setPix = JSON.stringify(pix);
    localStorage.setItem('pix', setPix);
    var votes = JSON.stringify(votes);
    localStorage.setItem('votes', votes);
    clickCount++;
  } else {
    
    return;
  }
}

if(localStorage.pix) {
  var pix = localStorage.getItem('pix');
  pix = JSON.parse(pix);
  var clickCount = localStorage.getItem('clicks');
  clickCount = JSON.parse(clickCount);
}

function increaseClickCount(title) {
  for (var i = 0; i < pix.length; i++) {
    if (pix[i].displayName === title) {
      pix[i].clicks++;
      break;
    }
  }
}
var reset = document.getElementById('Click Here');
reset.onclick = function() {
  localStorage.clear();
  clickCount = 0;
};


function updateChartArrays() {
  for (var i = 0; i < pix.length; i++) {
    // items[i] = pix[i].title;
    // votes[i] = pix[i].votes;
    items[i] = pix[i].name;
    votes[i] = pix[i].clicks;
  }
  console.log('items', items, '\n', 'votes', votes);
}


var data = {
  labels: items,
  datasets: [
    {
      data: votes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ]
    }
  ]
};

function drawChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  for( var i=0; i < pix.length; i++) {
    items[i] = pix[i].name;
    votes[i]= pix[i].clicks;
  }

  clickChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        legend: {
          yAxes: [{
            ticks: {
              autoSkip: false,       
              max: 20,
              min: 0,
              stepSize: 1
            }
          }]
        } 
      }
    }
  });
  // clickChart();
  chartDrawn = true;
} 





// code for tables in lab 11
// function createTable() {
//   var row = document.createElement('tr');
//   var headerName = document.createElement('td');
//   headerName.innerText = 'Awesome Product';
//   row.appendChild(headerName);

//   var headerTotalViews = document.createElement('td');
//   headerTotalViews.innerText = 'Times Shown';
//   row.appendChild(headerTotalViews);

//   var headerTotalClicks = document.createElement('td');
//   headerTotalClicks.innerText = 'Clicks';
//   row.appendChild(headerTotalClicks);

//   var headerclickPercentage = document.createElement('td');
//   headerclickPercentage.innerText = 'Click Percentage';
//   row.appendChild(headerclickPercentage);

//   resultsTable.appendChild(row);

//   for (var i = 0; i < pix.length; i++) {
//     var imgRow = document.createElement('tr');
//     var nameData = document.createElement('td');
//     nameData.innerText = pix[i].displayName;
//     imgRow.appendChild(nameData);

//     var totalViewsData = document.createElement('td');
//     totalViewsData.innerText = pix[i].views;
//     imgRow.appendChild(totalViewsData);

//     var totalClicksData = document.createElement('td');
//     totalClicksData.innerText = pix[i].clicks;
//     imgRow.appendChild(totalClicksData);

//     var totalclickPercentage = document.createElement('td');
//     var percentage = (Math.floor((pix[i].clicks / pix[i].views) * 100));
//     if (isNaN (percentage)) {
//       percentage = 0;
//     }
//     totalclickPercentage.innerText = (percentage + '%');
//     imgRow.appendChild(totalclickPercentage);

//     resultsTable.appendChild(imgRow);
//   }
// }
// end of code for lab 11






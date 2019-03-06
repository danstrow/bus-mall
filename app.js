'use strict';

// var images = document.getElementById('Click-party');


// var itemImageLeft = document.getElementById('left');
// var itemImageRight = document.getElementById('right');
// var itemImageMiddle = document.getElementById('middle');

// var lastDisplayed = [];
var allProducts = [];

var clickCounter = 0;

// var productName = [];

// var productLike = [];


function Product(name, source) {
  this.name = name;
  this.source = source;
  this.timesLiked = 0;
  this.timesShown = 0;
  allProducts.push(this);
};

// if(!localStorage.getItemn('showTotals')) {
  new Product('Star Wars bag', 'assets/bag.jpg');
  new Product('Banana Cutter', 'assets/banana.jpg');
  new Product('Bathroom vanity', 'assets/bathroom.jpg');
  new Product('Killer Boots', 'assets/boots.jpg');
  new Product('Breakfast Thingy', 'assets/breakfast.jpg');
  new Product('Meat bubblegum', 'assets/bubblegum.jpg');
  new Product('Bubble Chair', 'assets/chair.jpg');
  new Product('ctuhulu', 'assets/ctuhulu.jpg');
  new Product('dog and duck', 'assets/dog-duck.jpg');
  new Product('dragon meat', 'assets/dragon.jpg');
  new Product('pen', 'assets/pen.jpg');
  new Product('pet sweeper', 'assets/pet-sweep.jpg');
  new Product('pizza cutter', 'assets/scissors./jpg');
  new Product('tired shark', 'assets/shark.jpg');
  new Product('kid sweep', 'assets/sweep.png');
  new Product('tauntaun', 'assets/tauntaun.jpg');
  new Product('unicorn meat', 'assets/unicorn.jpg');
  new Product('crazy usb', 'assets/usb.gif');
  new Product('water can', 'assets/water-can.jpg');
  new Product('wine glass', 'assets/wine-glass.jpg');
// } else{
//   allProducts = JSON.parse(localStorage.getItem('currentTotalVotes'));
// }

var picContainer = document.getElementById('picture_container');
Product.justViewed = [];
Product.photos = [document.getElementById('left'), document.getElementById('right'), document.getElementById('middle')];
Product.totals = document.getElementNyId('tally');
clickCounter = 0;

function randomize() {
  return Math.floor(math.random() * allProducts.length);
}

function showPics() {
  var nowShowing = [];
  nowShowing[0] = randomize();
  while(Product.justViewed.indexOf(nowShowing[0]) !== -1) {
    console.error('Duplicate, rerun!');
    nowShowing[0] = randomize();
  }
  nowShowing[1] = randomize();
  while(Product.justViewed[0] === nowShowing[1] || Product.justViewed.indexOf(currentlyShowing[1]) !== -1) {
    console.error('Duplicate at center or old view! do again!');
    (nowShowing[1] = randomize())
  }
  (nowShowing[2] = randomize())
    while(nowShowing[0] === nowShowing[2] || nowShowing[1] === nowShowing[2] || Product.justViewed.indexOf(nowShowing[2] !== -1) {
    console.error('Duplicate at right of old view! do again!');
      nowShowing[2] = randomize()
    };
  console.log(nowShowing)
  for(var i =0; i <3; i__) {
    Product.pics[i].src = allProducts[nowShowing[i]].source;
    Product.pics[i].id = allProducts[nowShowing[i]].name;
    allProducts [nowShowing[i]].views +=1;
    Product.justViewed[i] = nowShowing[i];
  }
}

function showTotals() {
  for(var i =0; i < allProducts.length; i++) {
    var tally = document.getElementById('tally');
    var liEl = document.createElement('li');
    liEl.textContent = allProducts[i].name + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views.';
    tally.appendChild(liEl);
  }
}

function clickTotals(event) {
  if(totalClicks > 24) {
    imgContainer.removeEventListener('click', clickTotals);
    showTally();
  }
  if(event.target.id === 'picture_container') {
    return alert('Please click an image');
  }
  totalClicks += 1;
  for(var i = 0; i < allProducts.length; i++) {
    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes +=1;
      console.log(event.target.id + ' has ' + allProducts[i]).votes + ' votes in ' + allProducts[i].views + ' views.');
    }
  }
  showPics();
}
imgContainer.addEventListener('click', handleClick);
showPics();

// var ProductClickHandler = function (event) {
//   if (event.target.id === 'right' || event.target.id === 'middle' || event.target.id === 'left') {

// var randomNumberLeft = Math.floor(Math.random()* allProducts.length);
// var randomNumberRight = Math.floor(Math.random()* allProducts.length);
// var randomNumberMiddle = Math.floor(Math.random()* allProducts.length);


// while(lastDisplayed.includes(randomNumberLeft) || lastDisplayed.includes(randomNumberMiddle) || lastDisplayed.includes(randomNumberRight) || randomNumberLeft === randomNumberMiddle || randomNumberMiddle === randomNumberRight || randomNumberRight === randomNumberLeft){
//   randomNumberLeft = Math.floor(Math.random() * allProducts.length);
//   randomNumberMiddle = Math.floor(Math.random() * allProducts.length);
//   randomNumberRight = Math.floor(Math.random() * allProducts.length);

//   }

//   lastDisplayed[0] = randomNumberLeft;
//     lastDisplayed[1] = randomNumberMiddle;
//     lastDisplayed[2] = randomNumberRight;
//     if (event.target.id === 'left') {
//       allProducts[randomNumberLeft].timesLiked++;
//     } else if (event.target.id === 'middle') {
//       allProducts[randomNumberMiddle].timesLiked++;
//     } else {
//       allProducts[randomNumberRight].timesLiked++;
// }



// allProducts[randomNumberLeft].timesShown++;
//     allProducts[randomNumberMiddle].timesShown++;
//     allProducts[randomNumberRight].timesShown++

  

// productImageLeft.src = allProducts[randomNumberLeft].src;
// productImageRight.src = allProducts[randomNumberRight].src;
// productImageMiddle.src = allProducts[randomNumberMiddle].src;

// productLeftText.textcontent = allProducts[randomNumberLeft].name;
// productRightText.textcontent = allProducts[randomNumberRight].name;
// productMiddleText.textcontent = allProducts[randomNumberMiddle].name;

// clickCounter++;
//     if (clickCounter ===25) {
//       localStorage.setProduct('currentTotalVotes', JSON.stringify(allProducts));


//       var chartData = {
//         labels: productNames,
//         datasets: [ {
//           label: 'Total likes',
//           data: productLikes,
//           backgroundColor: [
//             'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey',
//             'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey',
//             'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey',


//           ]
        
//         }]
//       };
//     }

//     var chartOptions = {
//       beginAtZero: true
//     }

//     var chart = {
//       type: 'bar',
//       data: chartData,
//       options: chartOptions,
//     }

//     var renderChart = function () {
//       for (var i in allProducts) {
//         productNames.push(allProducts[i].name);
//         itemLikes.push(allItems[i].timesliked);
//       }
//       console.log('VALUES', itemNames);
//       var myChart = new chart(ctx, chart);
//     };

//     imageSection.removeEventListener('click, ProductClickHandler');
//     renderChart();
// debugger
//     imageSection.addEventListener('click', ItemClickHandler);
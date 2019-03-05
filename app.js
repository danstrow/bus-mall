'use strict';

var images = document.getElementById('Click-party');


var itemImageLeft = document.getElementById('left');
var itemImageRight = document.getElementById('right');
var itemImageMiddle = document.getElementById('middle');

var lastDisplayed = [];
var allProducts = [];

var clickCounter = 0;

var productName = [];

var productLike = [];


var Product = function (name, source) {
  this.name = name;
  this.source = source;
  this.timesLiked = 0;
  this.timesShown = 0;
  allProducts.push(this);
};

if(!localStorage.getItemn('showTotals')) {
  new Item('Star Wars bag', 'assets/bag.jpg');
  new Item('Banana Cutter', 'assets/banana.jpg');
  new Item('Bathroom vanity', 'assets/bathroom.jpg');
  new Item('Killer Boots', 'assets/boots.jpg');
  new Item('Breakfast Thingy', 'assets/breakfast.jpg');
  new Item('Meat bubblegum', 'assets/bubblegum.jpg');
  new Item('Bubble Chair', 'assets/chair.jpg');
  new Item('ctuhulu', 'assets/ctuhulu.jpg');
  new Item('dog and duck', 'assets/dog-duck.jpg');
  new Item('dragon meat', 'assets/dragon.jpg');
  new Item('pen', 'assets/pen.jpg');
  new Item('pet sweeper', 'assets/pet-sweep.jpg');
  new Item('pizza cutter', 'assets/scissors./jpg');
  new Item('tired shark', 'assets/shark.jpg');
  new Item('kid sweep', 'assets/sweep.png');
  new Item('tauntaun', 'assets/tauntaun.jpg');
  new Item('unicorn meat', 'assets/unicorn.jpg');
  new Item('crazy usb', 'assets/usb.gif');
  new Item('water can', 'assets/water-can.jpg');
  new Item('wine glass', 'assets/wine-glass.jpg');
} else{
  allProducts = JSON.parse(localStorage.getItem('currentTotalVotes'));
}



var ProductClickHandler = function (event) {
  if (event.target.id === 'right' || event.target.id === 'middle' || event.target.id === 'left') {

var randomNumberLeft = Math.floor(Math.random()* allProducts.length);
var randomNumberRight = Math.floor(Math.random()* allProducts.length);
var randomNumberMiddle = Math.floor(Math.random()* allProducts.length);


while(lastDisplayed.includes(randomNumberLeft) || lastDisplayed.includes(randomNumberMiddle) || lastDisplayed.includes(randomNumberRight) || randomNumberLeft === randomNumberMiddle || randomNumberMiddle === randomNumberRight || randomNumberRight === randomNumberLeft){
  randomNumberLeft = Math.floor(Math.random() * allProducts.length);
  randomNumberMiddle = Math.floor(Math.random() * allProducts.length);
  randomNumberRight = Math.floor(Math.random() * allProducts.length);

  }

  lastDisplayed[0] = randomNumberLeft;
    lastDisplayed[1] = randomNumberMiddle;
    lastDisplayed[2] = randomNumberRight;
    if (event.target.id === 'left') {
      allProducts[randomNumberLeft].timesLiked++;
    } else if (event.target.id === 'middle') {
      allProducts[randomNumberMiddle].timesLiked++;
    } else {
      allProducts[randomNumberRight].timesLiked++;
}



allProducts[randomNumberLeft].timesShown++;
    allProducts[randomNumberMiddle].timesShown++;
    allProducts[randomNumberRight].timesShown++

  

productImageLeft.src = allProducts[randomNumberLeft].src;
productImageRight.src = allProducts[randomNumberRight].src;
productImageMiddle.src = allProducts[randomNumberMiddle].src;

productLeftText.textcontent = allProducts[randomNumberLeft].name;
productRightText.textcontent = allProducts[randomNumberRight].name;
productMiddleText.textcontent = allProducts[randomNumberMiddle].name;

clickCounter++;
    if (clickCounter ===25) {
      localStorage.setProduct('currentTotalVotes', JSON.stringify(allProducts));


      var chartData = {
        labels: productNames,
        datasets: [ {
          label: 'Total likes',
          data: productLikes,
          backgroundColor: [
            'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey',
            'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey',
            'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey',


          ]
        
        }]
      };
    }

    var chartOptions = {
      beginAtZero: true
    }

    var chart = {
      type: 'bar',
      data: chartData,
      options: chartOptions,
    }

    var renderChart = function () {
      for (var i in allProducts) {
        productNames.push(allProducts[i].name);
        itemLikes.push(allItems[i].timesliked);
      }
      console.log('VALUES', itemNames);
      var myChart = new chart(ctx, chart);
    };

    imageSection.removeEventListener('click, ProductClickHandler');
    renderChart();
debugger
    imageSection.addEventListener('click', ItemClickHandler);
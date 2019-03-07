'use strict';
var pix = [];
var clickCount = 0;

var pictureOne = document.getElementById('pictureOne');
var pictureTwo = document.getElementById('pictureTwo');
var pictureThree = document.getElementById('pictureThree');


var resultsTable = document.getElementById('tallyResults');


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

function oneTurn() {
  var currentProduct = chooseProduct();
  render(currentProduct);

  for (var i = 0; i < 3; i++) {
    currentProduct[i].views++;
  }

  previousPictures = currentProduct;

  clickCount += 1;
}



function handleClick(event) {
  if (clickCount < 26) {
    increaseClickCount(event.target.title);
    oneTurn();
  } else if (clickCount === 26) {
    createTable();
    clickCount++;
  } else {
    return;
  }
}

function increaseClickCount(title) {
  for (var i = 0; i < pix.length; i++) {
    if (pix[i].displayName === title) {
      pix[i].clicks++;
      break;
    }
  }
}

function createTable() {
  var row = document.createElement('tr');
  var headerName = document.createElement('td');
  headerName.innerText = 'Awesome Product';
  row.appendChild(headerName);

  var headerTotalViews = document.createElement('td');
  headerTotalViews.innerText = 'Times Shown';
  row.appendChild(headerTotalViews);

  var headerTotalClicks = document.createElement('td');
  headerTotalClicks.innerText = 'Clicks';
  row.appendChild(headerTotalClicks);

  var headerclickPercentage = document.createElement('td');
  headerclickPercentage.innerText = 'Click Percentage';
  row.appendChild(headerclickPercentage);

  resultsTable.appendChild(row);

  for (var i = 0; i < pix.length; i++) {
    var imgRow = document.createElement('tr');
    var nameData = document.createElement('td');
    nameData.innerText = pix[i].displayName;
    imgRow.appendChild(nameData);

    var totalViewsData = document.createElement('td');
    totalViewsData.innerText = pix[i].views;
    imgRow.appendChild(totalViewsData);

    var totalClicksData = document.createElement('td');
    totalClicksData.innerText = pix[i].clicks;
    imgRow.appendChild(totalClicksData);

    var totalclickPercentage = document.createElement('td');
    var percentage = (Math.floor((pix[i].clicks / pix[i].views) * 100));
    if (isNaN (percentage)) {
      percentage = 0;
    }
    totalclickPercentage.innerText = (percentage + '%');
    imgRow.appendChild(totalclickPercentage);

    resultsTable.appendChild(imgRow);
  }
}



// var picContainer = document.getElementById('picture_container');
// Product.justViewed = [];
// Product.photos = [document.getElementById('left'), document.getElementById('right'), document.getElementById('middle')];
// Product.totals = document.getElementNyId('tally');
// clickCounter = 0;

// function randomize() {
//   return Math.floor(math.random() * allProducts.length);
// }

// function showPics() {
//   var nowShowing = [];
//   nowShowing[0] = randomize();
//   while(Product.justViewed.indexOf(nowShowing[0]) !== -1) {
//     console.error('Duplicate, rerun!');
//     nowShowing[0] = randomize();
//   }
//   nowShowing[1] = randomize();
//   while(Product.justViewed[0] === nowShowing[1] || Product.justViewed.indexOf(currentlyShowing[1]) !== -1) {
//     console.error('Duplicate at center or old view! do again!');
//     (nowShowing[1] = randomize())
//   }
//   (nowShowing[2] = randomize())
//     while(nowShowing[0] === nowShowing[2] || nowShowing[1] === nowShowing[2] || Product.justViewed.indexOf(nowShowing[2] !== -1) {
//     console.error('Duplicate at right of old view! do again!');
//       nowShowing[2] = randomize()
//     };
//   console.log(nowShowing)
//   for(var i =0; i <3; i__) {
//     Product.pics[i].src = allProducts[nowShowing[i]].source;
//     Product.pics[i].id = allProducts[nowShowing[i]].name;
//     allProducts [nowShowing[i]].views +=1;
//     Product.justViewed[i] = nowShowing[i];
//   }
// }

// function showTotals() {
//   for(var i =0; i < allProducts.length; i++) {
//     var tally = document.getElementById('tally');
//     var liEl = document.createElement('li');
//     liEl.textContent = allProducts[i].name + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views.';
//     tally.appendChild(liEl);
//   }
// }

// function clickTotals(event) {
//   if(totalClicks > 24) {
//     imgContainer.removeEventListener('click', clickTotals);
//     showTally();
//   }
//   if(event.target.id === 'picture_container') {
//     return alert('Please click an image');
//   }
//   totalClicks += 1;
//   for(var i = 0; i < allProducts.length; i++) {
//     if(event.target.id === allProducts[i].name) {
//       allProducts[i].votes +=1;
//       console.log(event.target.id + ' has ' + allProducts[i]).votes + ' votes in ' + allProducts[i].views + ' views.');
//     }
//   }
//   showPics();
// }
// imgContainer.addEventListener('click', handleClick);
// showPics();


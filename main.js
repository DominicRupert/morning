

const flavors = [
  {
    id: 11,
    name: "Cookie Dough",
    image:
      "https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg",
    price: 1,
  },
  {
    id:12,
    name: "Vanilla",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg",
    price: 1,
  },
  {
    id:13,
    name: "Strawberry",
    image:
      "https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg",
    price: 2,
  },
];

const vessels = [
  {
    id:21,
    name: "Waffle Cone",
    image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
    price: 2,
  },
  {
    id:22,
    name: "Waffle Bowl",
    image: "http://images.wbmason.com/350/L_JOY66050.jpg",
    price: 4,
  },
];

const toppings = [
  {
    id:31,
    name: "Sprinkles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg",
    price: 1,
  },
  {
    id:32,
    name: "Choclate Chips",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360",
    price: 2,
  },
];




const cart = []

function drawFlavors() {
  let template = ''
  flavors.forEach(item => {
    template += /*html*/ `
    <div class="col-md-3 my-2 d-flex flex-row">
      <div class="bg-light rounded shadow  ">
        <img src="${item.image}" class="rounded-top img-fluid object-fit" alt="" title="${item.name}">
        <div class="d-flex p-2">
          <h6>${item.name}</h6>
          <h6 class="ms-auto"> ${item.price}</h6>
          </div>
          
          <div class="d-grid gap-3">
          <button class="btn btn-info" onclick="addToCart(${item.id },flavors)">Add To Cart</button>
        </div>
      </div>
    </div>
    `
       
    
  });
  document.getElementById('flavors').innerHTML = template
}

function drawCones() {
  let template = ''
  vessels.forEach(item => {
    template += /*html*/ `
    <div class="col-md-3 my-2">
      <div class="bg-light rounded shadow object-fit d-flex flex-column">
        <img src="${item.image}" class="rounded-top " alt="" title="${item.name}">
        <div class="d-flex p-2">
          <h6>${item.name}</h6>
          <h6 class="ms-auto"> ${item.price}</h6>
          </div>
          
          <div class="d-grid gap-4">
          <button class="btn btn-info" onclick="addToCart(${item.id}, vessels)">Add To Cart</button>
        </div>
      </div>
    </div>
    `
       
    
  });
  document.getElementById('vessels').innerHTML = template
}
function drawToppings() {
  let template = ''
  toppings.forEach(item => {
    template += /*html*/ `
    <div class="col-md-3 my-2">
      <div class="bg-light rounded shadow object-fit d-flex flex-column">
        <img src="${item.image}" class="rounded-top " alt="" title="${item.name}">
        <div class="d-flex p-2">
          <h6>${item.name}</h6>
          <h6 class="ms-auto"> ${item.price}</h6>
          </div>
          
          <div class="d-grid gap-4">
          <button class="btn btn-info" onclick="addToCart('${item.id}', toppings)">Add To Cart</button>
        </div>
      </div>
    </div>
    `
       
    
  });
  document.getElementById('toppings').innerHTML = template
}
function drawCart(){
  let subTotal = 0;
  let template = "";
  cart.forEach((t, index) => {
    template += /*html*/ `
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center p-4">
          <h6>${t.name}</h6>
          <h6 class="ms-3" >${t.price}</h6>
          <i class="mdi mdi-delete ms-auto selectable" onclick="removeCartItem(${index})"></i>
        </div>
      </div>
    </div>`;
    subTotal += t.price;
  }
  );
  console.log("subtotal", subTotal);
  document.getElementById("cart").innerHTML = template;
  document.getElementById("total").innerText = Math.floor(subTotal);
}

function addToCart(itemId,collectionName){
  console.log('item id', itemId,collectionName);
  // let flavorChoice = flavors.find((item) => item.id == itemId);
  // let coneChoice = vessels.find((item) => item.id == itemId );
  // let toppingChoice = toppings.find((item) => item.id == itemId );
  // cart.push (flavorChoice,coneChoice,toppingChoice)
  // total += flavorChoice.price,coneChoice.price,toppingChoice.price;
  
  let foundItem =collectionName.find(i => i.id==itemId);
  console.log(foundItem);
  cart.push(foundItem);
  console.log("cart",cart );
  if (cart.length >= 1) {
    document.getElementById("purchase").disabled = false;
  }
  drawCart();
}



console.log(cart);
drawFlavors();
drawCones();
drawToppings();



const table = document.querySelectorAll('.table_item');

let somePrice = 0;
let ingsPrice = 0;

  for (let k = 0; k < table.length; k++) {
    const price = table[k].querySelector('.price_input');
    
    table[k].addEventListener('click', function (e) {
      const size = table[k].querySelectorAll('.size_item');
      const target = e.target;
  
      for (let j = 0; j < size.length; j++) {
        if (target === size[j]) {
          
          Array.from(size).forEach(item => {
            item.classList.remove('size_item_active');
          });
          target.classList.add('size_item_active');
         
          if (target === size[0]) somePrice = 300;
          if (target === size[1]) somePrice = 450;
          if (target === size[2]) somePrice = 600;
          
          price.value = somePrice + ingsPrice
        }
      }
    });
  }

const tpngTd3 = document.querySelectorAll('.notforfree');
    // console.log(tpngTd3)

for (let i = 0; i < tpngTd3.length; i++) {
  tpngTd3[i].addEventListener('click', function (e) {
    const minusButton = tpngTd3[i].querySelector('.minus');
    
    const plusButton = tpngTd3[i].querySelector('.plus');
    
    const input = tpngTd3[i].querySelector('.input');
    const targ = e.target;
    if (targ === minusButton) {
      input.value--;
      ingsPrice -= 35;
      // price.value = allPrice
      // console.log(ingsPrice)
    };
    if (targ === plusButton) {
      input.value++;
      ingsPrice += 35;
      // price.value = allPrice
      // console.log(ingsPrice)
    }
    if (input.value < 1) {
      input.value = 0;
      ingsPrice = 0;
    }
    console.log(input.value)
  })
}




for (let i = 0; i < table.length; i++) {
  table[i].addEventListener('click', function (e) {
    const addButton = table[i].querySelector('.btn');
    const ings = table[i].querySelector('.ings');
    
    const target = e.target;
    if (target === addButton) {
        ings.classList.add('block')      
        // ings.classList.remove('block')      
      }
  });
}

for (let i = 0; i < table.length; i++) {
  table[i].addEventListener('click', function (e) {
    const closeButton = table[i].querySelector('.close_btn');
    const ings = table[i].querySelector('.ings');
    
    const target = e.target;
    if (target === closeButton) {
        ings.classList.remove('block')      
        // ings.classList.remove('block')      
      }
  });
}

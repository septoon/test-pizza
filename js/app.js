const table = document.querySelectorAll('.table_item');

let somePrice = 300;
let ingsPrice = 0;

  for (let k = 0; k < table.length; k++) {
    const price = table[k].querySelector('.price_input');
    
    table[k].addEventListener('click', function (e) {
      const size = table[k].querySelectorAll('.size_item');
      const target = e.target;
      const tpngTd3 = table[k].querySelectorAll('.notforfree');

      
  
      for (let j = 0; j < size.length; j++) {
        if (target === size[j]) {
          
          Array.from(size).forEach(item => {
            item.classList.remove('size_item_active');
          });
          target.classList.add('size_item_active');
         
          if (target === size[0]) somePrice = 300 + ingsPrice;
          if (target === size[1]) somePrice = 450 + ingsPrice;
          if (target === size[2]) somePrice = 600 + ingsPrice;
          
          price.value = somePrice
          console.log(price.value)
        }
      }

      for (let i = 0; i < tpngTd3.length; i++) {
        const minusButton = tpngTd3[i].querySelector('.minus');
        
        const plusButton = tpngTd3[i].querySelector('.plus');
        
        const input = tpngTd3[i].querySelector('.input');
        if (target === minusButton) {
          input.value--;
          ingsPrice = ingsPrice - 35;
          console.log(ingsPrice)
          price.value = somePrice + ingsPrice
        };
        if (target === plusButton) {
          input.value++;
          ingsPrice = ingsPrice + 35;
          price.value = somePrice + ingsPrice
          console.log(price.value)
        }
      }
    });
  }


    // console.log(tpngTd3)






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

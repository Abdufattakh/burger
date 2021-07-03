

const product ={
burger:{
    name:'burger',
    price:15000,
    kcall:400,
    amount:0,
    get Summ(){
return this.price*this.amount;
    },
get Kcall(){
return this.kcall*this.amount;
}


},
burgerGood:{
    name:'Best burger',
    price:20000,
    kcall:500,
    amount:0,
    get Summ(){
return this.price*this.amount;
    },
get Kcall(){
return this.kcall*this.amount;
}
},
burgerCombo:{
    name:'Burger "Combo"',
    price:25000,
    kcall:600,
    amount:0,
    get Summ(){
return this.price*this.amount;
    },
get Kcall(){
return this.kcall*this.amount;
}

}
}
const extraProduct={
    doubleMayonnaise:{
        price:500,
        kcall:50
    },
    lettuce:{
        
        price:300,
        kcall:10
    },
cheese:{
    price:400,
    kcall:30
}
}
const btnPlusOrMinus=document.querySelectorAll('.main__product-btn'),
      checkExtraProduct=document.querySelectorAll('.main__product-checkbox'),
      addCard=document.querySelectorAll('.addCart'),
      receipt=  document.querySelector('.receipt'),
      receiptOut=document.querySelector('.receipt__window_out'),
      receiptWindow=document.querySelector('.receipt__window'),
      btnReceipt=document.querySelector('.receipt__window-btn')
console.log(addCard);




for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click',function(){
       PlusOrMinus(this);
    })
    
}



function PlusOrMinus(element) {
    const parent = element.closest('.main__product'),
    parentId = parent.getAttribute('id'), // берет у родителя атрибут
    out = parent.querySelector('.main__product-num'),// от родителя подключаемся к кол-ву
    price = parent.querySelector('.main__product-price span'), //от родителя подключаемся к цене
    kcall = parent.querySelector('.main__product-kcall span'), // от родителя подключаемся к калориям
    elementData = element.getAttribute('data-symbol');//берем данные из атрибута
    
    if (elementData == '+' && product[parentId].amount < 10) {
    product[parentId].amount++;
    } else if (elementData == '-' && product[parentId].amount > 0) {
    product[parentId].amount--;
    }
    
    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Summ;
    kcall.innerHTML = product[parentId].Kcall;
    

    }
    for (let i = 0; i < checkExtraProduct.length; i++) {
        checkExtraProduct[i].addEventListener('click', function () {
            addExtraProduct(this);
        })
    
    }
    function addExtraProduct(element) {
    
        const parent = element.closest('.main__product'),
            parentId = parent.getAttribute('id'),
            kcall = parent.querySelector('.main__product-kcall span'),
            price = parent.querySelector('.main__product-price span'),
            elArt = element.getAttribute('data-extra');
        // console.log(elArt);
        product[parentId][elArt] = element.checked;
        if (product[parentId][elArt] == true) {
            product[parentId].kcall += extraProduct[elArt].kcall
            product[parentId].price += extraProduct[elArt].price
        } else {
            product[parentId].kcall -= extraProduct[elArt].kcall
            product[parentId].price -= extraProduct[elArt].price
        }
        kcall.innerHTML = product[parentId].Kcall
        price.innerHTML = product[parentId].Summ
    }
    let arrayProduct = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0;

addCard.addEventListener('click', function () {
    for (const key in product) {
        
        const po = product[key];
        // console.log(po);
        if (po.amount > 0) {
            
            arrayProduct.push(po);
            for (const infoKey in po) {
                // console.log(po[infoKey]);
               if(po[infoKey] === true){
                   po.name += '\n' + extraProduct[infoKey].name
               }
              
            } console.log( po.name);
        }
        po.price = po.Summ;
        po.kcall = po.Kcall;
        console.log(product);

for (let i = 0; i < arrayProduct.length; i++) {
    const el = arrayProduct[i];
    totalPrice=totalPrice+el.price;
    totalKcall=totalKcall+el.price;
    totalName+='\n'+el.name+'\n';

console.log(receipt);
receipt.style.display='flex';
receipt.style.opacity=1;
receiptWindow.style.top='10%';

}
receiptOut.innerHTML=`Вы купили \n ${totalName} \n Калорийность  ${totalKcall} \n  Стоимость покупки \n ${totalPrice} сумм `;
receipt.style.display = 'flex';
setTimeout(() => {
receipt.style.opacity = 1;
}, 100);

setTimeout(() => {
receiptWindow.style.top = '10%'
}, 150);
    }
})

// const level=document.querySelector('.level');
// let a =0;
// if(a <50){
// a++
// }
// level()



































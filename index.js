
// problem1. seer to mon
function seerToMon(seer){
    // check Input
    if(seer > 0 ){
        let perMonToSeer = 40;
        let seerConvertMon = seer / perMonToSeer;
        return seerConvertMon;
    }
    else if(typeof seer == "string"){
        return 'Input can not be string';
    }
    else{
        return 'Input cannot be negative number';
    }   
}

// call this  function 
const totalMon = seerToMon(80); 
console.log(totalMon);

// // Problem 2 : total sales  
function totalSales (shirtQuantity,pantQuantity,shoesQuantity) {
    // check input validation
    if((shirtQuantity>0 )&&(pantQuantity>0 )&&(shoesQuantity>0)){
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice = 500;

    const totalShirtPrice = shirtQuantity * shirtPrice;
    const totalPantPrice = pantQuantity * pantPrice;
    const totalShoesPrice = shoesQuantity * shoesPrice;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
    // return function output
    return totalPrice;

    }
    else if((typeof shirtQuantity == "string") || (typeof pantQuantity == "string")||(typeof shoesQuantity == "string")){
        return 'Input cannot be a string';
    }
    else{
        return 'Input cannot be negative number';
    }
}
// call this function
const totalSalesPrice = totalSales(8,5,1);  // get input value
console.log(totalSalesPrice);

// //Problem-3: delivery Charge
function deliveryCost (cost){
    // check input validation
    if(cost < 0){
       return  'Input cannot be negative number or a string';
   }
   else if(typeof cost == "string"){
       return 'Input cannot be string';
   }
   else if(typeof cost == "boolean"){
       return 'Input cannot be boolean';
   }

   // set different cost value in variable
   const first100DeliveryCost = 100;
   const second200DeliveryCost = 80;
   const third200OverDeliveryCost = 50;
   if(cost <= 100){
       const DeliveryCharge = cost * first100DeliveryCost;
       return DeliveryCharge;
   }
   else if(cost <= 200){
       const firstDeliveryCharge = 100 * first100DeliveryCost;
       const expectBackCharge = cost - 100;
       const secondDeliveryCharge = expectBackCharge * second200DeliveryCost;
       const totalDeliveryCharge = firstDeliveryCharge + secondDeliveryCharge;
       return totalDeliveryCharge;
   }
   else{
       const firstDeliveryCharge = 100 * first100DeliveryCost;
       const secondDeliveryCharge = 100 * second200DeliveryCost;
       const expectBackCharge = cost - 200;
       const thirdDeliveryCharge = expectBackCharge * third200OverDeliveryCost;
       const totalDeliveryCharge = firstDeliveryCharge + secondDeliveryCharge + thirdDeliveryCharge;
       return totalDeliveryCharge;
   }

}
// call this function 
const totalDeliveryCharge = deliveryCost(300);
console.log(totalDeliveryCharge);

// // Problem-4 : friends array first 5 character string return output

function perfectFriend(friends){
    // check input validation
    if((friends == '' )|| (typeof friends != 'number')){
    let perfectFriend = '';
    for(const friend of friends){
        if(friend.length == 5){
            perfectFriend = friend;
            break;
        }
    }
    return perfectFriend
    }
    else if(typeof friends == 'boolean'){
        return 'Input caannot be boolean';
    }
    else{
        return 'Perfect friend not founded';
    }
    
}

const friendLists = ['khalid','lisa' ,'sofik','asik','moshiur'];
// call this function
const myPerfectFriend = perfectFriend(friendLists);
console.log(myPerfectFriend);





















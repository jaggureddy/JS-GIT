// let cost = 30

// if (cost >=40 && cost <=60){
//     console.log('Moderate cose');
// }else if(cost <=10 || cost >=100){
//     console.log('Too high or too low');
// }else{
//     console.log('Can buy');
// }


let isGuest1 = false
let isGuest2 = false

// Are both true - only vegan
// One vegan - vegan and non vegan
// Non - vegan

if ( isGuest1 && isGuest2 ){
    console.log('Offer vegan options');
}
else if(isGuest1 || isGuest2){
    console.log('Offer both options');
}
else{
    console.log('Offer Non vegan options');
}

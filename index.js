function wakeDog(a,b){
<<<<<<< HEAD
  console.log(`Wake ${a} the ${b}`);
=======
>>>>>>> af14adea752ce24e23605a951f0f0c103c4b9bfd
  return `Wake ${a} the ${b}`;
}

function leashDog(a,b){
<<<<<<< HEAD
  console.log(`Leash ${a} the ${b}`);
  return `Leash ${a} the ${b}`;
}
function walkToPark(a,b){
  console.log(`Walk to the park with ${a} the ${b}`);
  return `Walk to the park with ${a} the ${b}`;
}
function throwFrisbee(a,b){
  console.log(`Throw the frisbee for ${a} the ${b}`);
  return `Throw the frisbee for ${a} the ${b}`;
}
function walkHome(a,b){
  console.log(`Walk home with ${a} the ${b}`);
  return `Walk home with ${a} the ${b}`;
}
function unleashDog(a,b){
  console.log(`Unleash ${a} the ${b}`);
  return `Unleash ${a} the ${b}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
let arr;
function exerciseDog(dogName,dogBreed){
return  routine.map(e=>e(dogName,dogBreed));

=======
  return `Leash ${a} the ${b}`;
}
function walkToPark(a,b){
  return `Walk to the park with ${a} the ${b}`;
}
function throwFrisbee(a,b){
  return `Throw the frisbee for ${a} the ${b}`;
}
function walkHome(a,b){
  return `Walk home with ${a} the ${b}`;
}
function unleashDog(a,b){
  return `Unleash ${a} the ${b}`;
}

let routine = [wakeDog(a,b),leashDog(a,b)];

function exerciseDog(dogName,dogBreed){
  for (let i=0;i<routine.length;i++)
  let arr[i]=routine[i](dogName,dogBreed);
return arr;
>>>>>>> af14adea752ce24e23605a951f0f0c103c4b9bfd
}

// randomOrder(people);
// returns randomly ordered object array

export function randomOrder(_arr: []) {
   const arr = _arr;
   //@ts-ignore
   if (arr.length === 1) {return arr};
   const rand = Math.floor(Math.random() * arr.length);
   //@ts-ignore
   return [arr[rand], ...randomOrder(arr.filter((_, i) => i != rand))];
}

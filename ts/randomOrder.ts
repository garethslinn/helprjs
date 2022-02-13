// randomOrder(people);
// returns randomly ordered object array

export function randomOrder(arr: any) {
   if (arr.length === 1) {return arr};
   const rand = Math.floor(Math.random() * arr.length);
   return [arr[rand], ...randomOrder(arr.filter((_, i) => i != rand))];
}

// export function getYYYYMMDDFormat(date){
//   let result = "";
//   // check if date is empty or not
//   if( date == null || date === ""){
//     return result;
//   }
//   else{
//     const dateIST = new Date(date);
//     let year = dateIST.getFullYear();
//     let month = dateIST.getMonth() + 1;
//     let dd = dateIST.getDate();

//     if (dd < 10) {
//       dd = `0${dd}`;
//     }
//     if (month < 10) {
//       month = `0${month}`;
//     }
//     result = `${year}-${month}-${dd}`;
//     return result;
//   }
// };
// 1. **Ikki massivning kesishmasini toping**: Ikkita massiv berilgan. Ulardagi umumiy elementlardan tashkil topgan yangi massiv yarating.
// function generalElements(arr1,arr2){
//     let resultArr = [];
//     arr1.forEach(element => {
//         if(arr2.includes(element)){
//             resultArr.push(element);
//         }
//     });
//     return resultArr;
// }
// console.log(generalElements([1,2,3,4,5],[2,7,9,1,5]))
// Izoh: Masalada bitta funksiya yaratib ichida natija uchun yangi massiv yaratdim. arr1 ni sikl bn aylantirib arr1 elemantlarini arr2 tarkibida bor 
// yo'qligini tekshirdim. agar bor bolsa resultArr ga push qildim va oxirida resultArr ni return qildim.

// 2. **Massivdagi raqamlarni ko'paytirish**: Massiv elementlarini berilgan koeffitsiyentga ko'paytirib, natija massivini qaytaruvchi funksiya yozing.
// function elementTimesNum(arr, num){
//     let resultArr = arr.map(element => element*num)
//     return resultArr;
// }
// console.log(elementTimesNum([1,2,3,4],3));
// Izoh: bu masalani yechishda berilgan massivni map bn aylantirib, elementlarni berilgan songa ko'paytirib yangi massiv hosil qildim!

// 3. **Massivdagi musbat sonlar yig'indisi**: Massivdan musbat sonlarni tanlab, ularning yig'indisini hisoblang.
// function sumOfPositiveNumbers(arr){
//     let sum = 0;
//     arr.forEach(element => {
//         if(element > 0){
//             sum += element;
//         }   
//     });
//     return sum;
// }
// console.log(sumOfPositiveNumbers([-1,0,5,-5,8,9,-5,-7,-8]))
// Izoh: Bu masalani yechishda boshida yigindi uchun o'zgaruvchi yaratdim. keyin arr ni forEach bn aylantirib elementlarni tekshirib,
// mubatlarini sumga qo'shib oxirda sum ni return qildim!

// 4. **Nolni oxiriga o‘tkazing**: Berilgan massivdagi barcha `0`larni massiv oxiriga ko‘chiring, qolgan tartib o‘zgarmasligi kerak.
// function leaveNum(arr){
//     let nums = 0;
//     let newarr = [];
//     arr.forEach(element => {
//         if(element != 0){
//             newarr.push(element);
//         }
//         else{
//             nums++;
//         }
//     });
//     for(let i=1; i<=nums; i++){
//         newarr.push(0);
//     }
//     return newarr;
// }
// console.log(leaveNum([0,1,2,3,0,4,5,6,0]));
// Izoh: Bu masalni yechishda dastlab umumiy massivdan qiymati nolga teng bolmaganlarini saralab oldim. Saralash paytida nollar sonini ham topvoldim.
// Va saralab olingan yangi massivni oxiriga nollar soni nechta bolsa, shuncha nol push qildim!

// 5. **Eng ko'p takrorlangan elementni toping**: Massivda eng ko‘p uchraydigan elementni va uning sonini qaytaruvchi funksiya yozing
// function repeatedElement(arr){
//     let max = 1;
//     let maxElement = arr[0];
//     arr.forEach(element => {
//         let count = 0;
//         let newarr = arr.filter((value) => value == element);
//         count = newarr.length;
//         if(count > max){
//             maxElement = element;
//             max = count;
//         }
//     });
//     let result = [maxElement, max];
//     return result;
// }
// console.log(repeatedElement([1,2,3,1,4,4,2,1,0,1,9,1]));
// Izoh: Masalani yechishda dastlab massivdagi dastlabki elementni 1 marta takrorlangan va eng ko'p takrorlangan deb olib oldim. 
// Keyin tekshirib chiqdim birma bir. Shunday qilib eng takrorlangan elementni va takrorlanishlar sonini topib oldim.

// 6. **Massivni ichma-ich massivlardan tozalang**: Ichma-ich massivlardan iborat massiv berilgan. Uni faqat bir darajali massivga o‘tkazing (Flatten array).
// function flattenArray(arr) {
//     let result = [];
//     for (let element of arr) {
//         if (Array.isArray(element)) {
//             result = result.concat(flattenArray(element));
//         } else {
//             result.push(element);
//         }
//     }
//     return result;
// }
// // console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// Izoh: Masalani yechishda natija uchun massiv yaratdim. Umumiy massiv elementlarini massiv yoki massiv emasligini tekshirdim. agar massiv 
// bolmasa natija massiviga push qildim, massiv bolsa yana rekursiv funksiya orqali sikga soldim 

// 7. **Ikki massivni birlashtiring**: Ikkita massiv berilgan, ularni birlashtirib, takroriy elementlarni olib tashlang.
// function mergeArr(arr1, arr2) {
//     let birlashma = [...arr1, ...arr2];
//     let result = [];
//     for (let element of birlashma) {
//         if (!result.includes(element)) {
//             result.push(element);
//         }
//     }
//     return result;
// }
// console.log(mergeArr([1, 2, 3], [3, 4, 5]));
// Izoh: Bu masalani yechishda dastlab ikkita massivni birlashtirdim birlashma degan yangi massivga. keyin bitta bitta resultga push qildim
// element takrorlangan bolsa faqat bir marta push qiladigan qilib tekshirdim.

// 8. **Massiv elementlarini toq/juft qilib ajrating**: Massivdagi toq va juft elementlarni alohida massivlarga ajratib qaytaring
// function separateOddEven(arr) {
//     let oddNumbers = [];
//     let evenNumbers = [];
//     arr.forEach(element => {
//         if (element % 2 === 0) {
//             evenNumbers.push(element);
//         } else {
//             oddNumbers.push(element);
//         }
//     });
//    let result = [oddNumbers, evenNumbers];
//    return result;
// }
// console.log(separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
// Izoh: Dastlab ikkita yangi massiv yaratdim. Toqlar uchun alohida juftlar uchun alohida. keyin 2 ga bo'linsa juftlarga, aksincha bolsa
// toqlarga push qildim.

// 9. **Massivda ma'lum qiymat borligini tekshirish**: Massiv va qiymat berilgan. Funksiya massiv ichida qiymat mavjud bo‘lsa `true`, aks holda `false` qaytarsin
// function checking(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(checking([1, 2, 'a', null, false, 5], 'o'))
// Izoh: Dastlab arr va value berildi. keyin men massivni sikl bn aylantirib berilgan element massivda bor yoqligi tekshirdim

// 10. **Massivdagi eng katta va eng kichik elementni toping**: Massivdagi eng katta va eng kichik elementlarni qaytaruvchi funksiya yozing
// function findMinMax(array){
//     let max = array[0];
//     let min = array[0];
//     array.forEach(element => {
//         if(element>max){
//             max = element;
//         }
//         else if(element<min){
//             min = element;
//         }
//     });
//     let result = [max,min];
//     return result;
// }
// console.log(findMinMax([1,5,7,9,6,4,32,5,52,58,1,8,23,18,1,0,54,4,1,-4,5,5]))
// Izoh: max va min degan o'zgaruvchi oldim. boshida bu o'zgaruvchilarni arr ni 0 indeksidagi elementga tengladim va 
// sikl orqali birma bir solishtirib chiqdim boshqa elementlarga

// 11. **Obyektni tartiblang**: Obyekt ichidagi kalitlari bo‘yicha tartiblangan yangi obyekt hosil qiling
// function sorting(obj) {
//     let tartiblanganObyekt = {};
//     let kalitlar = [];
//     for (let kalit in obj) {
//         if (obj.hasOwnProperty(kalit)) {
//             kalitlar.push(kalit);
//         }
//     }
//     while (kalitlar.length > 0) {
//         let engKichik = kalitlar[0];
//                 for (let i = 1; i < kalitlar.length; i++) {
//             if (kalitlar[i] < engKichik) {
//                 engKichik = kalitlar[i];
//             }
//         }
//         tartiblanganObyekt[engKichik] = obj[engKichik];
//         kalitlar.splice(kalitlar.indexOf(engKichik), 1);
//     }
//     return tartiblanganObyekt;
// }
// const tartiblanmaganObyekt = {
//     z: 1,
//     e: 3,
//     q: 2,
//     j: 4
// };
// console.log(sorting(tartiblanmaganObyekt));
// Izoh: hasOwnProperty bu obyektni ichida aniq bir kalit mavjudligini tekshiradi. bu metod true va false qiymat qaytaradi.

// 12. **Obyekt kalitlarini va qiymatlarini alohida massivga o‘tkazing**: Obyektdagi barcha kalitlar va qiymatlar alohida-alohida massivda qaytarilsin
// function separateObjectKeyValue(obj){
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);
//     let result = [ keys, values];
//     return result;
// }
// console.log(separateObjectKeyValue(unsortedObject = {z: 1, e: 3, q: 2, j: 4}));
// Izoh: Bunda Object.keys va Object.values metodlaridan foydalandim. va result arr ochib keys va values larni alohida massivlarda qaytaridgan 
// funksiya yozdim

// 13. **Obyekt birlashtirish**: Ikkita obyekt berilgan. Ularni birlashtirib, umumiy kalitlarni yangilash orqali natijaviy obyekt yarating.
// function obyektlarniBirlashtirish(obj1, obj2) {
//     clet natija = {};
//     for (let kalit in obj1) {
//         natija[kalit] = obj1[kalit];
//     }
//     for (let kalit in obj2) {
//         natija[kalit] = obj2[kalit];
//     }
//     return natija;
// }


// 14. **Qiymatlarni hisoblash**: Berilgan obyekt qiymatlarining umumiy yig‘indisini hisoblang (qiymatlar sonlar bo'lishi kerak)
// function sumElements(obj) {
//     let elements = Object.values(obj);
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++) {
//         sum += elements[i];
//     }
//     return sum;
// }
// let object = { a: 1, b: 2, c: 3, d: 4 };
// console.log(sumElements(object));

//15. **Kalitni qayta nomlash**: Obyekt ichidagi bir kalit nomini yangi nomga o'zgartiring va qaytaring
// function renameObjectKey(obj, oldKey, newKey) {
//     let newObj = {};
//     for (let [key, value] of Object.entries(obj)) {
//         if (key === oldKey) {
//             newObj[newKey] = value;
//         } else {
//             newObj[key] = value;
//         }
//     }
//     return newObj;
// }
// let sampleObject = {
//     name: 'Ali',
//     age: 30,
//     city: 'Tashkent'
// };
// console.log(renameObjectKey(sampleObject, 'city', 'location'));
// Izoh: Object.entries obyektni kalit qiymat shaklda alohida alohida obyektlarga olib beradi.

// 16. **Kalitni olib tashlash**: Berilgan obyekt va kalit orqali kalitni olib tashlab, yangi obyekt qaytaring.
// function removeKey(obj, kalit) {
//     let newObj = {};
//     for (let key in obj) {
//         if (key !== kalit) {
//             new[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// let person = { name: "John", age: 30, city: "New York" };
// let result = removeKey(person, "age");
// console.log(result);
// Izoh: for sikl aylantirb if bn tekshirdim. agar massiv elementi o'chirilishi kerak bolgan kalitga teng bolmasa yangi massivga push qildim.
// shunda o'chirilishi kerak bolgan kalit va unit qiymati push qilinmay qoladi 

// 17. **Bir xil kalitli obyektlarni birlashtirish**: Berilgan massiv ichidagi obyektlarni bir xil kalit bo‘yicha guruhlab, yangi obyekt yarating.
// function groupByKey(array, key) {
//     let result = {};
//     for (let i = 0; i < array.length; i++) {
//         let obj = array[i];
//         let objKey = obj[key];
//         if (!result[objKey]) {
//             result[objKey] = [];
//         }
//         result[objKey].push(obj);
//     }
//     return result;
// }
// let data = [
//     { id: 1, name: "Alice", group: "A" },
//     { id: 2, name: "Bob", group: "B" },
//     { id: 3, name: "Charlie", group: "A" },
//     { id: 4, name: "David", group: "B" },
//     { id: 5, name: "Eve", group: "C" }
// ];
// let result = groupByKey(data, "group");
// console.log(result);

// 18. **Obyekt ichida massivlarni yig'ish**: Obyekt ichidagi barcha massivlarni bitta massivga yig‘ing va natijani qaytaring.
// function collectArrays(obj) {
//     let result = [];
//     for (let key in obj) {
//         let value = obj[key];
//         if (Array.isArray(value)) {
//             for (let i = 0; i < value.length; i++) {
//                 result.push(value[i]);
//             }
//         }
//     }
//     return result;
// }
// let exampleObj = {
//     a: [1, 2, 3],
//     b: [4, 5],
//     c: 'not an array',
//     d: [6, 7, 8]
// };
// let result = collectArrays(exampleObj);
// console.log(result);
// Izoh: Array.isArray(value) degan joyi elementni massiv yoki massiv emasligini tekshiradi.

// 19. **O‘xshash obyektlarni chiqarish**: Berilgan ikkita massiv ichidagi obyektlarning umumiy qismlarini toping.
// function findCommonObjects(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (JSON.stringify(arr1[i]) === JSON.stringify(arr2[j])) {
//                 result.push(arr1[i]);
//             }
//         }
//     }
//     return result;
// }
// Izoh: JSON>stringfy massivlarni solishtirishda ishlatiladi


// 22. **So‘zlarni tersga o‘girish**: Berilgan jumladagi so‘zlarni teskari tartibda joylashtiruvchi funksiya yozing.
// function reverseWords(string) {
//     return string.split(" ").reverse().join(" ");
// }
// console.log(reverseWords("Hello World"));

// 23. **Eng uzun so‘zni toping**: Berilgan jumladagi eng uzun so‘zni topib, uni qaytaruvchi funksiya yozing.
// function findLongestWord(str) {
//     const words = str.split(" ");
//     let longestWord = "";
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("Helloo World"));

// 24. **Bir harfni ko‘paytirish**: Berilgan string ichidagi ma’lum bir harfni ko‘paytirish kerak
//  (masalan, har bir `a` harfidan keyin qo‘shimcha `a` qo‘shing).
// function func(str, char) {
//     return str.split(char).join(char + char);
// }
// console.logfunc("banana", "a"));

// 25. **Stringdan raqamlarni olib tashlash**: Berilgan string ichidan barcha raqamlarni olib tashlab, qolgan qismni qaytaring.
// function func(str) {
//     let result = ""; 
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (char < '0' || char > '9') {
//             result += char;
//         }
//     }
//     return result;
// }
// console.log(func("Hello123 World!"));

// 20 va 21 - masalalar qoldi vaqtingiz bolsa yoningizga o'taman tushuntirib qoyasiz yoki yo'nalish berib yuborasiz. Biror joyida chatgpt ishlatilmadi
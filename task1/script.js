// ? task1-----------------------------------------------------------

// let schoolAge = + prompt ('Neçə yaşınız var?');
// if (schoolAge >= 6 && schoolAge <= 10) {
//     console.log('Siz ibtidai sinifə gedirsiniz.');
// } else if (schoolAge >= 11 && schoolAge <= 14) {
//     console.log('Siz orta məktəbə gedirsiniz.');
// } else if (schoolAge >= 15 && schoolAge <= 17) {
//     console.log('Siz tam orta məktəbə gedirsiniz.');
// } else if (schoolAge >= 21) {
//     console.log('İş həyatı');
// } else {
//     console.log('Yaşınız məktəb oxumağa uyğun deyildir.');
// }

// ? task2-----------------------------------------------------------

// let voteAge = + prompt('Yaşınızı qeyd edin.');
// if (voteAge >= 18 && voteAge <= 70) {
//     console.log('Yaşınız səs verməyə uyğundur.');
// } else if (voteAge > 70) {
//     let age = 70;
//     voteAge = voteAge - age;
//     console.log( `${voteAge} il keçib səs vermək üçün.`);
// } else if (voteAge < 18) {
//     let age = 18;
//     voteAge = age - voteAge;
//     console.log( `${voteAge} il qalıb səs vermək üçün.`)
// }

// ? task3-----------------------------------------------------------

// let road = + prompt('3 yoldan birini seçin.');
// if (road == 1) {
//     console.log('Siz 1.ci yolu seçdiniz.');
// } else if (road == 2) {
//     console.log('Siz 2.ci yolu seçdiniz.');
// } else if (road == 3) {
//     console.log('Siz 3.ci yolu seçdiniz.');
// } else {
//     console.log('Bu yol mövcud deyildir.');
// }

// ? task4-----------------------------------------------------------

// let num = + prompt('Zəhmət olmasa bir rəqəm qeyd edin.');
// if (num % 3 === 0 && num % 5 === 0){
//     console.log('FizzBuzz');
// } else if(num % 3 === 0){
//     console.log('Fizz');
// } else if (num % 5 === 0){
//     console.log('Buzz');
// } else{
//     console.log( `${num}`);
// }

// ? task5-----------------------------------------------------------

// const meals = prompt(`1. Menu first: 120$
// 2. Menu second: 250$
// 3. Menu basic: 35$`);
// if (meals == 1) {
//     let total = 120;
//     console.log(total * 0.10);
// } else if (meals == 2) {
//     let total = 250;
//     console.log(total * 0.10);
// } else if (meals == 3) {
//     let total = 35;
//     console.log(total * 0.15);
// }

// ? task6-----------------------------------------------------------

// let numMonths = +prompt('Aylar üçün 1 ilə 12 arasında bir rəqəm seç.');
// if (numMonths >= 1 && numMonths <= 12) {
//     let months = '';
//     if (numMonths === 1) {
//         months = 'yanvar';
//     } else if (numMonths === 2) {
//         months = 'fevral';
//     } else if (numMonths === 3) {
//         months = 'mart';
//     } else if (numMonths === 4) {
//         months = 'aprel';
//     } else if (numMonths === 5) {
//         months = 'may';
//     } else if (numMonths === 6) {
//         months = 'iyun';
//     } else if (numMonths === 7) {
//         months = 'iyul';
//     } else if (numMonths === 8) {
//         months = 'avqust';
//     } else if (numMonths === 9) {
//         months = 'sentyabr';
//     } else if (numMonths === 10) {
//         months = 'oktyabr';
//     } else if (numMonths === 11) {
//         months = 'noyabr';
//     } else if (numMonths === 12) {
//         months = 'dekabr';
//     }
//     console.log(months);
// } else {
//     console.log('Yanlish');
// }

// ? task7-----------------------------------------------------------

// let numMonths = +prompt('Fəsillər üçün 1 ilə 12 arasında bir rəqəm seç.');
// if (numMonths >= 1 && numMonths <= 12) {
//     let seasons = '';
//     if (numMonths >= 3 && numMonths <= 5){
//         seasons = 'Yaz';
//     } else if(numMonths>=6 && numMonths<=8){
//         seasons = 'Yay';
//     } else if(numMonths>=9 && numMonths<=11){
//         seasons = 'Payız';
//     } else{
//         seasons ='Qış'
//     }
//     console.log(seasons);
// } else{
//     console.log('Yanlish');
// }

// ? task8-----------------------------------------------------------

// ? task9-----------------------------------------------------------

// let height = +prompt('Düzbucaqlının uzunluğunu qeyd et.');
// let width = +prompt('Düzbucaqlının enini qeyd et.');
// alert(`Verdiyiniz dəyərlər ilə düzbucaqlının sahəsi: ${height*width}`);

// ? task10-----------------------------------------------------------

// let celci = +prompt('Celcini qeyd et.');
// alert(`Fahrenheit: ${(celci*9/5)+32}`);

// ? For-------------------------------------------------------------
// let str = 'Gunel'
// let newStr = ''
// for (i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
// }
// console.log(newStr);

//? vurma cedveli 

// for (let i = 1; i <= 10; i++) {
//     for (let v = 1; v <= 10; v++) {
//         console.log(i + 'x' + v + '=' + (i * v))
//     }  
//     console.log('----------------------');
// }

// ? faktorial

// let num = +prompt('Bir rəqəm yaz.');
// let multi = 1;
// for(let i=1; i<=num; i++){
//     multi=multi*i;
// }
// alert('Nəticə: '+multi);

// ? cem

// let num = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for(let i=0; i<num.length; i++){
//     sum=sum+num[i];
// }
// console.log(`Cəmi: ${sum}`);

// ? ededi orta

// let num = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for(let i=0; i<num.length; i++){
//     sum=sum+num[i];
// }
// let average = sum/num.length;
// console.log(`Ədədi ortası: ${average}`);

// ! polindrom
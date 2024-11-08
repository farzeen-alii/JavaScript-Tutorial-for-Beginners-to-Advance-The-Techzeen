// let arr = [1,22,15,3,6,9,67,98,54,23,87];

//using arrow function

// let result = arr.filter(val => val > 10);

//using anonymous function

// let result = arr.filter(function(val){
//     return val > 30;
// });

// console.log(result);


let student = [
    {
        name : 'Huzaifa',
        language : 'html'
    },
    {
        name : 'Farzeen',
        language : 'javascript'
    },
    {
        name : 'Ali',
        language : 'css'
    },
    {
        name : 'Ahmed',
        language : 'html'
    },
    {
        name : 'Khan',
        language : 'javascript'
    },
    {
        name : 'Bilal',
        language : 'css'
    },
]

let result = student.filter(val => val.language == 'javascript');

console.log(result);





// function getData(){
//     url = '../file.txt';
//     console.log("getData Started")
//     fetch(url).then((response) => {
//     console.log("in first .then")
//         return response.text();
//     }).then((data) => {
//         console.log("in second .then")
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData();
// console.log("After running getData")

// function getData(){
//     url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url).then(response => response.text())
//     .then(data => console.log(data))
// }


function postData(){
    url = 'https://dummy.restapiexample.com/api/v1/create';
    data = '{"name":"Zaid","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : data
    }
    fetch(url, params).then(response => response.text())
    .then(data => console.log(data))
}




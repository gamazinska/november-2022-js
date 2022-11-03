// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [100500, true, 122, 'ua', 123, false, 100, 'hello', 'owu', 'com']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[5]);
console.log(arr[4]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//1- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = [{title: 'Algebra', pageCount: 150, genre: 'mathematics'},
    {title: 'Algebra', pageCount: 100, genre: 'mathematics'} ,
    {title: 'Geometry', pageCount: 150, genre: 'mathematics'}
]
console.log(book1)

//2- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book2 = [{title: 'Geometry', pageCount: 200, genre: 'mathematics', authors: {name: 'Butuzov', age: 50}} ,
    {title: 'Algebra', pageCount: 100, genre: 'mathematics', authors: {name: 'Bolotov', age: 55}} ,
    {title: 'Geometry', pageCount: 150, genre: 'mathematics', authors: {name: 'Floy', age: 60}}
]
console.log(book2)


//3- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user1 = [{ name: 'Asya', username:'assyun1',password:1986},
            { name: 'Vanya', username:'vanyu2',password:1987},
             { name: 'Vika', username:'vika1',password:1980},
             { name: 'Anna', username:'anna1',password:1988},
             { name: 'Sasha', username:'sasha1',password:1989},
             { name: 'Olya', username:'olya1',password:1988},
             { name: 'Nina', username:'nina1',password:1985},
             { name: 'Nikita', username:'nikita1',password:1990},
             { name: 'pasha', username:'pasha1',password:1982},
             { name: 'misha', username:'misha1',password:1981}
]
console.log(user1[0].password);
console.log(user1[1].password);
console.log(user1[2].password);
console.log(user1[3].password);
console.log(user1[4].password);
console.log(user1[5].password);
console.log(user1[6].password);
console.log(user1[7].password);
console.log(user1[8].password);
console.log(user1[9].password);



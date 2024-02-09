console.log('hello typescript 123 ');

// let person = {
//   name: 'john smith',
//   age: 43,
//   height: 8,
// };
// const user = person.name;
// // person.push={ gender:'male'};
// console.log(user);
// //-----------
// // functions
// //-----------
// function addTwoNumbers(a: number, b: number): number {
//   return a + b;
// }

// const subtractTwoNumbers = (a: number, b: number): number => {
//   return a - b;
// };

// addTwoNumbers(3, 9);
// subtractTwoNumbers(10, 7);

// function addAllNumbers(items: number[]): void {
//   const total = items.reduce((a, c) => a + c, 0);
//   console.log(total);
// }

// addAllNumbers([5, 6, 32, 4, 3, 5, 9, 7]);

// //-----------------------
// // return type inference
// //-----------------------
// function formatGreeting(name: string, greeting: string): string {
//   return `${greeting},${name}`;
// }

// const result = formatGreeting('mario', 'hello');
// //-----
// // any
// //-----
// let age: any;
// age = 30;
// age = false;

// let title;
// title = { hello: 'world' };

// let something: any[] = ['hello', true, 30, null];
// something.push({ id: 123 });

// function addTogether(value: any): any {
//   return ` ${value} + ${value}`;
// }

// const resultOne = addTogether('sample j');
// console.log(resultOne);

//---------
// tuples
// --------

// let personData: [string , number , boolean] = ['mario',30 ,true]

// let hsla: [number, string ,string, number]
// hsla=[200,'200%','50',2]

// let xy:[number, number]
// xy = [94.7,20.1];


// function useCoords(): [number, number]{
// // get coords
// const lat=100
// const long=50

// return [lat,long]
// }

// const [lat,long] =useCoords()
// console.log(lat + long);

// // named tuples
// let user: [name: string ,age: number]

// user = ['peach',23]
// console.log(user[0])

//------------
// interfaces
//------------

// interface Author  {
//   name: string,
//   avatar: string
// }

// const authorOne: Author = {
//   name:'marion' ,
//   avatar:
//    '/img/marion.png'
// }

// console.log(authorOne)

// interface Post {
//   title: string,
//   body: string,
//   tags: string[],
//   create_at:Date,
//   author: Author
// }

// const newPost={
//   title: 'my first post',
//   body: 'something interesting',
//   tags:['gaming', 'tech'],
//   create_at: new Date(),
// author:authorOne
// }
// console.log(newPost.author.name)
// function createPost(post: Post): void{
//   console.log(`Created post ${post.title} by ${post.author.name}`);
// }

// createPost(newPost);

// let posts: Post=[]

// posts.push(newPost)
// console.log(posts)

//---------------
//type aliases
//---------------

// type Rgb = [number , number , number];

// function getRandomColor():Rgb{
//  const r = Math.floor(Math.random()*255)
//  const g = Math.floor(Math.random()*255)
//  const b = Math.floor(Math.random()*255)

// return [r,g,b]
// }

// const colorOne=getRandomColor()
// const colorTwo=getRandomColor()
// console.log(colorOne, colorTwo);

// type User={
//   name: string
//   score: number
// }

// const userOne: User ={name:'mario',score:75}

// function formatUser(user:User):void{
//   console.log(`${user.name} has a score of ${user.score}.`)
// }

// formatUser(userOne)

//---------------
// union types
//---------------

// let someId:number|string

// someId=1
// someId= true
// console.log(someId)

// let email: string | null = null

// email = 'mario@netcatde'
// email = 123
// // email= undefined
// console.log(email)

// type Id = number| string
// let anotherId: Id

// anotherId = '324234klljsdjfie'
// anotherId = 22333

// console.log(anotherId)

// function swapIdType(id:Id):Id{
//   parseInt(id)
//   // console.log(newId);

//   return id;
// }

// swapIdType('4')

//---------------
// type guards
//---------------

type Id = number | string

function swapIdType(id: Id){
if ( typeof id === 'string'){
  return parseInt(id)
}else{
return id.toString()
}
}

const idOne= swapIdType(1)
const idTwo = swapIdType('2')

console.log(idOne, idTwo)

//---------------
// tagged interfaces
//---------------

interface User{
  type: 'user'
  username: string
  email: string
  id: Id
}
interface Person{
  type: 'person'
  firstname: string
  age : number
  id :Id
}

const visitor={
  type:'user'
  username: 'jhonathan'
  email: 'jhonathan@mail.com'
  id:01
}

function logDetails(value: User | Person):void{
  if (value.type === 'user'){
    console.log(value.email, value.username)
  }
  if(value.type === 'person'){
    console.log(value.firstname, value.age)
  }
}

logDetails(visitor)

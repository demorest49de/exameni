type StudentType = {
  id: number
  name: string
}

type FriendsType = {
  [key: string]: Array<string>
}

export const students: Array<StudentType> = [
  {id: 1, name: "Bob"},
  {id: 2, name: "Alex"},
  {id: 3, name: "Ann"},
  {id: 4, name: "Charley"},
]

export const friends: FriendsType = {
  1: ["Oliver", "Jack", "Oscar",],
  2: ["Jack", "Lewis", "Thomas",],
  3: ["William", "Michael", "Lewis",],
  4: ["Oscar", "James", "William",],
}

const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
  const result: Array<string> = []
  friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)
  return result
}

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
// Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
//Функция принимает параметром два объекта типа StudentType
// и возвращает массив с именами общих друзей,
//если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?


const client = {
  name: "Yana",
  age: 57,
  scores: [33.98, 32.66, 49.86]
}

const {name, age, scores} = client

console.log(client.scores === scores && age)


/*Какое значение мы увидим в консоли?*/


const client = {
  name: "Max",
  age: 33,
  friends: ["Igor", "Sergey", "Katya", "Anastasiya"]
}

const [brother, aspect, bus] = client.friends

const result = aspect
console.log(' brother: ', brother);
console.log(' aspect: ', aspect);
/*Какое значение получит переменная result?*/

const user = {
  name: "Liza",
  age: 66,
  scores: [7.05, 12.72, 64.38]
}

const [first, second, third = 11.43] = user.scores

switch(third){
  case 11.43:
    console.log("Antigua")
    break;
  case 12.72:
    console.log("Vanuatu")
    break;
  default:
    console.log("Belarus");
}

/*Какую строку мы увидим в консоли?*/


const {capital} = {capital: 64}

const multiply = capital * 97.98

const randomValue = multiply && "William" &&  "Vladimir"

/* Какое значение получит переменная randomValue ? */

let result = 0

for(let i = 0; i < 5; i++){
  if(i % 2){
    result += i
  }
}

const studentName = (result - 4)
  ? "Eva"
  : "Valera"
console.log(studentName);
/* Какое значение получит переменная studentName? */

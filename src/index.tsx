import {useState} from "react";

let todolistID1 = '1'
let todolistID2 = '2'


const obj = {
    todolistID1: [
        {id: "v1", title: 'HTML&CSS', isDone: true},
        {id: "v2", title: 'JS', isDone: true},
        {id: "v3", title: 'ReactJS', isDone: false},
    ],
    [todolistID2]: [
        {id: "v1", title: 'Rest API', isDone: true},
        {id: "v2", title: 'GraphQL', isDone: false},
    ]
}
const todoLists = [{id: todolistID2, title:'new todo', filter:'All'}, {}]
todolists.map

const asdf = obj[todolistID2]

const ttt = {
    ...obj, todolistID1:
        obj.todolistID1.map(e => e.title === 'JS' ? {...e, title: 'ts'} : e)
}

console.log(' asdf: ', asdf);
console.log(' obj: ', obj);
console.log(' obj[todolistID2]: ', todolistID2);
console.log(' ttt: ', ttt);
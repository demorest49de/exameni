import
  React, {useState}
  from
    
    'react'
  ;
import
  ReactDOM
  from
    
    'react-dom'
  ;
import
  
  './index.css'
  ;

type UserType = {
  
  id
    : number
  
  name
    : string
  
  age
    : number
}

function User(props: UserType) {
  return (
    <li>Student {props.name}: {props.age} y.o.</li>
  )
}

function UsersList() {
  const data: Array<UserType> = [
    {
      id:
        1
      ,
      name:
        "Bob"
      ,
      age:
        34
    },
    {
      id:
        2
      ,
      name:
        "Alex"
      ,
      age:
        29
    },
    {
      id:
        3
      ,
      name:
        "Ann"
      ,
      age:
        25
    },
    {
      id:
        4
      ,
      name:
        "John"
      ,
      age:
        36
    },
  ]
  
  const [users, setUsers]
    = useState<Array<UserType>>(data)
  
  return (
    <main>
      <h4>User list:</h4>
      <ul>
        { users.map(u => <User key={u.id} {...xxx} />) }
      </ul>
    </main>
  )
}

ReactDOM.render(
  <UsersList/>,
  document
    .getElementById(
      'root'
    )
);
// Что надо написать вместо xxx, чтобы код работал?







import
  React, {useState}
  from
    
    'react'
  ;
import
  ReactDOM
  from
    
    'react-dom'
  ;
import
  
  './index.css'
  ;

type UserType = {
  
  id
    : number
  
  name
    : string
  
  age
    : number
}

function User(props: UserType) {
  
  return (
    <li>User {props.name}: {props.age} y.o.</li>
  )
}

function UsersList() {
  const data: Array<UserType> = [
    {
      id:
        1
      ,
      name:
        "Bob"
      ,
      age:
        25
    },
    {
      id:
        2
      ,
      name:
        "Alex"
      ,
      age:
        28
    },
    {
      id:
        3
      ,
      name:
        "Ann"
      ,
      age:
        23
    },
    {
      id:
        4
      ,
      name:
        "John"
      ,
      age:
        30
    },
  ]
  
  const [users, setUsers]
    = useState<Array<UserType>>(data)

// Необходимо отрендерить список пользователей старше 25 лет:
  
  
  const getOlderThen25Users = (u: UserType) => u.age > 25
  
  
  const olderThen25Users = users.filter(getOlderThen25Users)
  
  
  return (        <main>
      <h4>User list:</h4>
      <ul>
        { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
      </ul>
    </main>
  )
}

ReactDOM.render(
  <UsersList/>,
  document
    .getElementById(
      'root'
    )
);
// Что надо написать вместо xxx, чтобы код работал?










import
    React, {useState}
    from 'react'    ;
import ReactDOM from 'react-dom'    ;
import

    './index.css'
    ;

type UserType = {

    id
        : number

    name
        : string

    age
        : number
}

function User(
    props: UserType
) {

    return (
        <li>Student {props.name}: {props.age} y.o.</li>
    )
}

function UsersList
() {
    const data: Array<UserType> = [
        {
            id:
                1
            ,
            name:
                "Bob"
            ,
            age:
                34
        },
        {
            id:
                2
            ,
            name:
                "Alex"
            ,
            age:
                29
        },
        {
            id:
                3
            ,
            name:
                "Ann"
            ,
            age:
                25
        },
        {
            id:
                4
            ,
            name:
                "John"
            ,
            age:
                36
        },
    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {
                    users.map(u => <User key={u.id}
                                         id={u.id}
                                         name={u.name}
                                         age={u.age}
                        />
                    )
                }
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>,
    document
        .getElementById(
            'root'
        )
);
// Что надо написать вместо xxx, чтобы код работал оптимально?





import
  React, {useState, MouseEvent, ChangeEvent}
  from
    
    'react'
  ;
import
  ReactDOM
  from
    
    'react-dom'
  ;
import
  
  './index.css'
  ;
function

User
(
)
{
  
  const
    [userName, setUserName] = useState<string>(
      ""
    )
  
  return    (
    <div>
      <p>{userName}</p>
      <input
        value={userName}
        onChange={(e) => setUserName(e.currentTarget.value)}
      />
    </div>
  )
}
ReactDOM.render(
  <User/>,
  document
    .getElementById(
      'root'
    )
);
// Что надо написать вместо ххх, чтобы инпут был контролируемым?









import
  React, {useState, MouseEvent, ChangeEvent}
  from
    
    'react'
  ;
import
  ReactDOM
  from
    
    'react-dom'
  ;
import
  
  './index.css'
  ;

function Notes() {
  
  const [newNote, setNewNote] = useState<string>(
    ""
  )
  
  const [notes, setNotes]
    = useState<Array<string>>([])
  
  const onChangeHandler = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => setNewNote(e.currentTarget.value)
  
  const addNote = () => {
    setNotes([newNote, ...notes])
    setNewNote(
      ""
    )
  }
  
  return (
    <div>
            <textarea
              value={newNote}
              onChange={onChangeHandler}
              onBlur={addNote}
            />
      <div>
        <button
          // onClick={() => setNewNote('')}
        >Clear notes list
        </button>
      </div>
      <h4>Notes:</h4>
      <div>
        {notes.map(n => <p>{n}</p>)}
      </div>
    </div>
  )
}

ReactDOM.render(
  <Notes/>,
  document
    .getElementById(
      'root'
    )
);
// Что надо написать вместо ххх,

// чтобы при клике список заметок очищался?

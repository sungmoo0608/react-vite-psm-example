import React, { useRef, useState } from 'react'
import CreateUser from './../components/CreateUser'
import UserList from './../components/UserList'

const UserCrudPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: '홍길동',
      email: 'abcd@gmail.com',
    },
    {
      id: 2,
      username: '홍길순',
      email: 'abcde@gmail.com',
    },
    {
      id: 3,
      username: '바둑이',
      email: 'abcdef@gmail.com',
    },
  ])

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const onChange = (event) => {
    const { name, value } = event.target

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const nextId = useRef(users.length + 1)

  const { username, email } = inputs

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }

    setUsers(users.concat(user))

    setInputs({
      username: '',
      email: '',
    })

    nextId.current += 1
  }

  return (
    <div className="text-center mt-5">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}></UserList>
    </div>
  )
}

export default UserCrudPage

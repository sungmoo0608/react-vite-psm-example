import React from 'react'

const User = ({ user, onRemove }) => {
  return (
    <div>
      <b>
        {' '}
        이름 : {user.username} | 이메일 : {user.email}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onRemove(user.id)}
        >
          삭제
        </button>
      </b>
    </div>
  )
}

const UserList = ({ users, onRemove }) => {
  return (
    <div>
      {users.map((user) => (
        <User onRemove={onRemove} user={user} key={user.id} />
      ))}
    </div>
  )
}

export default UserList

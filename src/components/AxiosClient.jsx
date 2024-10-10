import axios from 'axios'
import React, { useState } from 'react'

const AxiosClient = () => {
  const [data, setData] = useState([])

  const getClick = () => {
    axios
      .get('https://sample.bmaster.kro.kr/contacts?pageno=3&pagesize=10')
      .then((response) => {
        //통신이 성공 했을 때
        console.log(response)
        setData(response.data.contacts)
      })
      .catch(function (error) {
        //에러가 났을 때 실행
        console.log(error)
      })
      .then(() => {
        //try catch finally 에서 finally 부분에 해당
        console.log('에러가 나든 안나든 무조건 실행')
      })
  }

  return (
    <div>
      <h2>클라이언트 테이블 받아오기 연습</h2>
      <button onClick={getClick}>클라이언트 데이타</button>
      <hr />

      <table align="center" width="750" border="1">
        <tr>
          <td>번호</td>
          <td>이름</td>
          <td>전화번호</td>
          <td>주소</td>
          <td>사진</td>
          <td>삭제</td>
        </tr>

        {data.map((post, index) => (
          <>
            <tr key={index}>
              {/* <h3>타이틀 : {post.contacts}</h3> */}
              <td>{post.no} </td>
              <td>{post.name}</td>
              <td>{post.tel}</td>
              <td>{post.address}</td>
              <td>
                <img src={post.photo}></img>
              </td>
              <td>
                <input
                  name={post.no}
                  id={post.no}
                  type="button"
                  class="del-button"
                  value="삭제"
                />
              </td>
            </tr>
          </>
        ))}
      </table>
      <hr />
    </div>
  )
}

export default AxiosClient

import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/BoardPage'
import ProfilePage from '../pages/ProfilePage'
import PropsPage from '../pages/PropsPage'
import ThreePage from '../pages/ThreePage'
import CounterPage from '../pages/CounterPage'
import InputPage from './../pages/InputPage'
import InputGradePage from '../pages/InputGradePage'
import UseRefPage from '../pages/UseRefPage'
import UseRefPage2 from '../pages/UseRefPage2'
import UserArrayPage from '../pages/UserArrayPage'
import UserCrudPage from '../pages/UserCrudPage'
import AxiosPage from '../pages/AxiosPage'

// React Routes, Route 사용시 배열로 관리하기
const routes = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home',
  },
  {
    path: '/board',
    element: <BoardPage />,
    title: 'Board',
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    title: 'Profile',
  },
  {
    path: '/props',
    element: <PropsPage />,
    title: 'Props',
  },
  {
    path: '/three',
    element: <ThreePage />,
    title: '조건부랜더링',
  },
  {
    path: '/usestate',
    element: <CounterPage />,
    title: 'usestate',
  },
  {
    path: '/input',
    element: <InputPage />,
    title: 'input',
  },
  {
    path: '/inputGrade',
    element: <InputGradePage />,
    title: 'inputGrade',
  },
  {
    path: '/useref',
    element: <UseRefPage />,
    title: 'useref 예제 1번',
  },
  {
    path: '/useref2',
    element: <UseRefPage2 />,
    title: 'useref 예제 2번',
  },
  {
    path: '/userpage',
    //element: <UserArrayPage />,
    element: <UserCrudPage />,
    title: 'userpage',
  },
  {
    path: '/axiospage',
    element: <AxiosPage />,
    title: 'axiospage',
  },
]

export default routes

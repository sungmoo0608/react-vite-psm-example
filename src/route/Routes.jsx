import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/BoardPage'
import ProfilePage from '../pages/ProfilePage'
import PropsPage from '../pages/PropsPage'
import ThreePage from '../pages/ThreePage'
import CounterPage from '../pages/CounterPage'
import InputPage from './../pages/InputPage'

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
]

export default routes

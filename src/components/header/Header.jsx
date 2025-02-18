"use client" 
import { increment } from '@/lib/features/counter/counterSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <header>
        <h2>Header {count}</h2>
        <Link href={"/wishlist"}>Wishlist</Link>
        <button onClick={()=> dispatch(increment())}>inc</button>
    </header>
  )
}

export default Header
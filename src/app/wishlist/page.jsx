"use client"
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.value)

    let data = wishlist?.map((el) => (
        <div key={el.id} className="">
            <Image width={200} height={200} alt={el.title} src={el.images[0]} />
            <p>{el.title}</p>
            {/* <button onClick={() => dispatch(toggleHeart())}>Like</button> */}
        </div>
    ))
    return (
        <div>
            {data}
        </div>
    )
}

export default Wishlist
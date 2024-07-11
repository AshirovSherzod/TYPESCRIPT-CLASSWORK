"use client"
import { useGetProductsQuery } from '@/lib/api/productsApi'
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
    const {data, isLoading} = useGetProductsQuery()
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist.value)
    console.log(wishlist);
    return (
        <div>
            {
                data?.products?.map((product) => (
                    <div key={product.id} className="">
                        <Image width={200} height={200} alt={product.title} src={product.images[0]} />
                        <p>{product.title}</p>
                        <button onClick={()=> dispatch(toggleHeart(product))}>Like</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
"use client"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { defaultCounter } from '@/lib/features/counter/counterSlice'

const DefaultValues = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(defaultCounter(+localStorage.getItem("counter")))
    }, [])
    return null
}

export default DefaultValues
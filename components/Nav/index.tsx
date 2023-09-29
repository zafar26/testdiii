import React, { useContext, useEffect, useState } from 'react'
import Pure from './pure'
import { NextRouter, useRouter } from 'next/router'
import { EnvContext } from '../Context/ApiContext'
import { getSingleSetting } from '@/helpers/api/home'
import { Env } from '@/helpers/types'
import useFetch from '../Hooks/useFetch'

interface NavProps {
    isHome?: any
    selectedPage?: string
    pageTitle?: string
    env: Env
}

function getDate() {
    const today = new Date()
    const month = today.toLocaleString('default', { month: 'long' })
    const year = today.getFullYear()
    const date = today.getDate()
    return `${date}-${month}-${year}`
}

const Nav = (props: NavProps) => {
    // You may use hooks on pure component here for better code maintainability
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const {
        data: hijriDate,
        loading: loader,
        error,
    } = useFetch('hijriDate', props?.env)

    const toggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const router: NextRouter = useRouter()

    return (
        <Pure
            {...props}
            isMenuOpen={isMenuOpen}
            toggleMenuOpen={toggleMenuOpen}
            router={router}
            hijriDate={hijriDate}
            currentDate={getDate}
        />
    )
}

export default Nav

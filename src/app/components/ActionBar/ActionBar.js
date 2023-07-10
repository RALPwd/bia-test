'use client'
import React from 'react'
import Link from 'next/link'
import './actionBar.scss'
import { useTheme } from '@/app/context/ThemeContext'
import { BiSearchAlt2, BiArrowBack } from 'react-icons/bi'

const ActionBar = ({ query, setQuery, regionFilter, setRegionFilter, mode }) => {
  const { theme } = useTheme()

  return (
    <div className='actionbar'>
      {
        mode === 'queryBar' ? (
          <>
            <div className={`actionbar__searchcontainer`}>
              <span className={`actionbar__iconsearch actionbar__iconsearch--${theme}`}>
                <BiSearchAlt2 />
              </span>
              <input
                className={`actionbar__search actionbar__search--${theme}`}
                type="text"
                placeholder="Search for a country"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setRegionFilter('')  
                }}
              />
            </div>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className={`actionbar__select actionbar__select--${theme}`}
            >
              <option value="" disabled>Filter by region</option>
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select> 
          </>
        ) : ( 
            <Link href="/" className={`backbutton backbutton--${theme}`}>
              <BiArrowBack/>&nbsp;&nbsp;Back
            </Link>
        )
      }
      
    </div>  
  )
}

export default ActionBar
import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const inputElement = useRef()
  const searchBtn = useRef()

  const Search = () => {
    if(searchQuery === '') return
    navigate('/admin/matches', {state: {trigger: "search", query: searchQuery}})
  }

  useEffect(()=>{
    inputElement.current.focus()
    inputElement.current.addEventListener('focus', ()=>{
      document.addEventListener('keyup', e=>{
        if(e.key == 'Enter') Search()
      })
    })
  })
  
  return (
  <main id="home">
      <div className="container">
          <div id="brand">
              <div id="logo">
                  <span>school</span>Finder
              </div>
              <p id="brand-descr">SchoolFinder system</p>
          </div>
          <div id="search_container">
              <div id="search">
              <input 
                    type="text" 
                    value={searchQuery}
                    ref={inputElement}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                  <button 
                    id="search_btn"
                    ref={searchBtn}
                    onClick={() => {
                      if(searchQuery === "") return
                      Search()
                    }}
                  >
                    Search
                  </button>
              </div>
              <Link 
                to="/admin/filter"
                id="filter_btn"
              >
                Filter
              </Link>
          </div>
          <div id="tags"></div>
      </div>
    </main>
  )
}

export default Home
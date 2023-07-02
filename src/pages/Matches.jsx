import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { FaCaretRight, FaExclamationTriangle, FaSchool } from "react-icons/fa";

function Matches() {
  const {state} = useLocation()
  const navigate = useNavigate()

  const [schools, setSchools] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const searchForSchools = async (query) => {
    const endpoint = state.trigger === "search" ? "search" : "filter"
    try{
      const res = await fetch(`http://localhost:8880/${endpoint}`, {

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({query})
      })

      const matches = await res.json()
      return {status: "success", data: matches}
    }catch(error){
      return {status: "error", message: error.message}
    }
  }

  useEffect(()=>{
    searchForSchools(state.query)
    .then(res => {
      if(res.status === "error"){
        setError(true)
        setErrorMessage(res.message)
        setLoading(false)
      }else{
        setSchools(res.data)
        setLoading(false)
      }
    })
  },[])

  return (
    <main id="matches">
      <div className="container">
        <div id="schools_container">
          {!error && <div className='pageTitle'>Matches</div>}
          {loading ? 
            <div className='loader'>
              <ThreeDots 
                height="50" 
                width="50" 
                color="#ff7f2aff" 
                ariaLabel="three-dots-loading"
              />
            </div> : 
            <>
              {
                error ? 
                <>
                  <div className='alert error'>
                    <FaExclamationTriangle
                      color='#e02d2d'
                      size={40}
                    />
                    <span>{errorMessage}</span>
                    <div id="shortcuts">
                      <Link to="/admin">Search</Link>
                      {" | "}
                      <Link to="/filter">Filter</Link>
                    </div>
                  </div>
                </> :
                <>
                {schools.length === 0 ? 
                    <div className='alert'>
                      <FaExclamationTriangle
                        color='gray'
                        size={40}
                      />
                      <span>No school were found</span>
                      <div id="shortcuts">
                        <Link to="/admin">Search</Link>
                        {" | "}
                        <Link to="/filter">Filter</Link>
                      </div>
                    </div> : 
                    <>
                      <div className="matchesDescription">{schools?.length} schools were found</div>
                      {schools.map(school => (
                          <button
                            className="school"
                            onClick={() => navigate('/admin/school', {state: {school}})}
                          >
                            <div className='school_info'>
                              <div className="school_image"><FaSchool size={25}/></div>
                              <div>
                                <div className="school_name">{school.name}</div>
                                <div className='school_level'>{school.category.level}</div>
                              </div>
                            </div>
                            <span>
                              <FaCaretRight />
                            </span>
                          </button>
                      ))}
                    </>
                }
                </>
              }
            </>
          }
        </div>
      </div>
    </main>
  )
}

export default Matches
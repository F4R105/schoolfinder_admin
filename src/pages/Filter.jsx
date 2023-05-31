import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Filter() {
    const navigate = useNavigate()

    const [level, setLevel] = useState('')
    const [ownership, setOwnership] = useState('')
    const [gender,setGender] = useState('')
    const [religion, setReligion] = useState('')
    const [occupation, setOccupation] = useState('')
    const [fee, setFee] = useState('')

    return (
        <main id="filter">
            <div className="container">
                <div id="filter_container">
                <div className='pageTitle'>Filter</div>
                <div className="category">
                    <div className="category_title">Level</div>
                    <div className="category_options">
                        <div 
                            className={level == "primary" ? "option selected" : "option"} 
                            onClick={()=>setLevel("primary")}>Primary</div>
                        <div 
                            className={level == "secondary" ? "option selected" : "option"} 
                            onClick={()=>setLevel("secondary")}>Secondary</div>
                        <div 
                            className={level == "advanced" ? "option selected" : "option"} 
                            onClick={()=>setLevel("advanced")}>Advanced</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Ownership</div>
                    <div className="category_options">
                        <div 
                            className={ownership == "public" ? "option selected" : "option"} 
                            onClick={()=>setOwnership("public")}>Public</div>
                        <div 
                            className={ownership == "private" ? "option selected" : "option"} 
                            onClick={()=>setOwnership("private")}>Private</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Gender</div>
                    <div className="category_options">
                        <div 
                            className={gender == "all" ? "option selected" : "option"}
                            onClick={()=>setGender("all")}>All</div>
                        <div 
                            className={gender == "girls" ? "option selected" : "option"} 
                            onClick={()=>setGender("girls")}>Girls</div>
                        <div 
                            className={gender == "boys" ? "option selected" : "option"} 
                            onClick={()=>setGender("boys")}>Boys</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Religion</div>
                    <div className="category_options">
                        <div 
                            className={religion == "all" ? "option selected" : "option"}
                            onClick={()=>setReligion("all")}>All</div>
                        <div 
                            className={religion == "christian" ? "option selected" : "option"} 
                            onClick={()=>setReligion("christian")}>Christian</div>
                        <div 
                            className={religion == "islamic" ? "option selected" : "option"} 
                            onClick={()=>setReligion("islamic")}>Islamic</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Occupation</div>
                    <div className="category_options">
                        <div 
                            className={occupation == "all" ? "option selected" : "option"} 
                            onClick={()=>setOccupation("all")}>All</div>
                        <div 
                            className={occupation == "day" ? "option selected" : "option"} 
                            onClick={()=>setOccupation("day")}>Day</div>
                        <div 
                            className={occupation == "boarding" ? "option selected" : "option"} 
                            onClick={()=>setOccupation("boarding")}>Boarding</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">School fees</div>
                    <div className="category_options">
                        <div 
                            className={fee == "1500000" ? "option selected" : "option"} 
                            onClick={()=>setFee("1500000")}>500k</div>
                        <div 
                            className={fee == "1M" ? "option selected" : "option"} 
                            onClick={()=>setFee("1M")}>1M</div>
                        <div 
                            className={fee == "2M" ? "option selected" : "option"} 
                            onClick={()=>setFee("2M")}>2M</div>
                        <div 
                            className={fee == "3M" ? "option selected" : "option"} 
                            onClick={()=>setFee("3M")}>3M</div>
                    </div>
                </div>
                <button 
                    id="filter_btn"
                    onClick={() => navigate('/matches', {state: {trigger: "filter", query: {level, ownership, gender, religion, occupation, fee}}})}
                >
                    Filter
                </button>
                </div>
            </div>
        </main>
    )
}

export default Filter
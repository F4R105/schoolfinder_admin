import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function School() {
  // const {state} = useLocation()
  // const {school} = state

  const [description, setDescription] = useState('')
  const [images, setImages] = useState([])
  const [phone, setPhone] = useState('')
  const [mailbox, setMailbox] = useState('')
  const [email, setEmail] = useState('')
  const [socials, setSocials] = useState([])


  const [level, setLevel] = useState('')
  const [ownership, setOwnership] = useState('')
  const [gender,setGender] = useState('')
  const [religion, setReligion] = useState('')
  const [occupation, setOccupation] = useState('')
  const [fee, setFee] = useState('')

  // useEffect(()=>{
  //   setDescription(school.description)
  //   setLevel()
  //   setOwnership()
  //   setGender()
  //   setReligion()
  //   setOccupation()
  //   setFee(school.category.school_fee)
  // },[])

  return (
    <main id="admin_school">
      <div className="container">
        <div id="school_info_container">

{/* NAME AND ID */}
          <div id="name_and_id">
            <div id='school_intro'>
              <div id="school_name">Mvumi Mission</div>
              <div id="school_id">S5042</div>
              {/* <div id="school_name">{school.name}</div>
              <div id="school_id">{school.school_id}</div> */}
            </div>
              <button 
                id="update_btn"
                onClick={() => navigate('/matches', {state: {trigger: "filter", query: {level, ownership, gender, religion, occupation, fee}}})}
              >
                Update
              </button>
          </div>

{/* DESCRIPTION */}
            <div>
              <div className="card_title">Description</div>
              <textarea 
                id="description" 
                cols={30} 
                rows={10}
                value={description}
              ></textarea>
            </div>

{/* SCHOOL FEE */}
            <div>
              <div className="card_title">School fees</div>
              <input 
                type="text" 
                id='school_fee' 
                value={fee} />
            </div>

{/* CATEGORIES */}
          <div>
            <div className="card_title">Categories</div>
            <div id="categories_cards">
                <div className="card">
                  <div className="category_key">Level</div>
                  <div className="category_value">Primary</div>
                  {/* <input type="select">
                    <option value="null">Null</option>
                  </input> */}
                  {/* <div className="category_value">{school.category.level}</div> */}
                </div>
                <div className="card">
                  <div className="category_key">Religion</div>
                  <div className="category_value">Islamic</div>
                  {/* <div className="category_value">{school.category.religion}</div> */}
                </div>
                <div className="card">
                  <div className="category_key">Gender</div>
                  <div className="category_value">Boys</div>
                  {/* <div className="category_value">{school.category.gender}</div> */}
                </div>
                <div className="card">
                  <div className="category_key">Ownership</div>
                  <div className="category_value">Public</div>
                  {/* <div className="category_value">{school.category.ownership}</div> */}
                </div>
                <div className="card">
                  <div className="category_key">Occupation</div>
                  <div className="category_value">Boarding</div>
                  {/* <div className="category_value">{school.category.occupation}</div> */}
                </div>
            </div>
          </div>

{/* IMAGES */}
          <div>
            <div className="card_title">Image Links</div>
            <div id="school_images">
              <div className="contact card">
                <div className="image_title">Image one</div>
                <div className="image_link">
                  <input type="text"/>
                </div>
              </div>
              <div className="contact card">
                <div className="image_title">Image two</div>
                <div className="image_link">
                  <input type="text"/>
                </div>
              </div>
              <div className="contact card">
                <div className="image_title">Image three</div>
                <div className="image_link">
                  <input type="text"/>
                </div>
              </div>
            </div>
          </div>

{/* CONTACTS */}
          <div>
            <div className="card_title">Contacts</div>
            <div id="contacts">
              <div className="contact card">
                <div className="contact_title">Phone</div>
                <div className="contact_detail">
                  <input type="text" value={phone} />
                </div>
              </div>
              <div className="contact card">
                <div className="contact_title">Mailbox</div>
                <div className="contact_detail">
                  <input type="text" value={mailbox} />
                </div>
              </div>
              <div className="contact card">
                <div className="contact_title">Email</div>
                <div className="contact_detail">
                  <input type="email" value={email} />
                </div>
              </div>

          {/* SOCIALS */}
              <div className="contact card">
                <div className="contact_title">Social media</div>
                <ul id='social_media_links'>
                  <li>
                    <div className="contact_detail">
                      <span className="social_media_title">Twitter</span>
                      <input type="text" />
                    </div>
                  </li>
                  <li>
                    <div className="contact_detail">
                      <span className="social_media_title">Facebook</span>
                      <input type="text" />
                    </div>
                  </li>
                  <li>
                    <div className="contact_detail">
                      <span className="social_media_title">Instagram</span>
                      <input type="text" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

{/* RESULTS */}
          <div>
            <div className="card_title">Latest results</div>
            <div id="results">
              {/* {school.results.length !== 0 && 
                school.results.map(resultYear => (
                  <div className='result'>
                    <div className="outliner">
                      <div className="result_year">{resultYear.year}</div>
                      <ul>
                        {school.category.level === "primary" ? 
                          <>
                            <li>
                              Grade A: <span>{resultYear.grades.A}</span>
                            </li>
                            <li>
                              Grade B: <span>{resultYear.grades.B}</span>
                            </li>
                            <li>
                              Grade C: <span>{resultYear.grades.C}</span>
                            </li>
                            <li>
                              Grade D: <span>{resultYear.grades.D}</span>
                            </li>
                          </> :
                          <>
                            <li>
                              Division one: <span>{resultYear.results.division_one}</span>
                            </li>
                            <li>
                              Division two: <span>{resultYear.results.division_two}</span>
                            </li>
                            <li>
                              Division three: <span>{resultYear.results.division_three}</span>
                            </li>
                            <li>
                              Division four: <span>{resultYear.results.division_four}</span>
                            </li>
                          </>
                        }
                      </ul>
                    </div>
                  </div>
                ))
              } */}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default School
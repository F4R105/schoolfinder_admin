import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Select from "react-select"

const CategoryOptions = {
  level: [
      {value: "primary", label: "Primary"},
      {value: "secondary", label: "Secondary"},
      {value: "advanced", label: "Advanced"},
  ],
  religion: [
      {value: "islamic", label: "Islamic"},
      {value: "christian", label: "Christian"},
      {value: "mixed", label: "Mixed"},
  ],
  gender: [
      {value: "mixed", label: "Mixed"},
      {value: "boys", label: "Boys"},
      {value: "girls", label: "Girls"},
  ],
  ownership: [
      {value: "public", label: "Public"},
      {value: "private", label: "Private"},
  ],
  occupation: [
      {value: "both", label: "Both"},
      {value: "hostel", label: "Hostel"},
      {value: "day", label: "Day"},
  ],
}

function School() {
  const {state} = useLocation()
  const {school} = state

  // INTRODUCTION
  const [description, setDescription] = useState(school.description)
  const [images, setImages] = useState(school.images)

  // CONTACTS
  const [phone, setPhone] = useState(school.contacts.phone)
  const [mailbox, setMailbox] = useState(school.contacts.mailbox)
  const [email, setEmail] = useState(school.contacts.email)
  const [socials, setSocials] = useState(school.contacts.socials)

  // CATEGORIES
  const [level, setLevel] = useState(school.category.level)
  const [ownership, setOwnership] = useState(school.category.ownership)
  const [gender,setGender] = useState(school.category.gender)
  const [religion, setReligion] = useState(school.category.religion)
  const [occupation, setOccupation] = useState(school.category.occupation)
  const [fee, setFee] = useState(school.category.school_fee)

  return (
    <main id="school">
      <div className="container">
        <div id="school_info_container">

{/* NAME AND ID */}
          <div id="name_and_id">
            <div id='school_intro'>
              <div id="school_name">{school.name}</div>
              <div id="school_id">{school.school_id}</div>
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
                onChange={(e) => setDescription(e.target.value)}
                resize="vertical"
              ></textarea>
            </div>

{/* SCHOOL FEE */}
            <div>
              <div className="card_title">School fees</div>
              <input 
                type="text" 
                id='school_fee' 
                value={fee}
                onChange={(e) => setFee(e.target.value)} 
              />
            </div>

{/* CATEGORIES */}
          <div>
            <div className="card_title">Categories</div>
            <div id="categories_cards">
                <div className="card">
                  <div className="category_key">Level</div>
                  <Select 
                    options={CategoryOptions.level}
                    value={level}
                    onChange={(value) => {
                      setLevel(value)
                      console.log(value)
                    }} 
                    className='select'
                  />
                </div>
                <div className="card">
                  <div className="category_key">Religion</div>
                  <Select 
                    options={CategoryOptions.religion} 
                    value={religion}
                    onChange={(value) => setReligion(value)} 
                    className='select'
                  />
                </div>
                <div className="card">
                  <div className="category_key">Gender</div>
                  <Select 
                    options={CategoryOptions.gender} 
                    value={gender}
                    onChange={(value) => setGender(value)} 
                    className='select'
                  />
                </div>
                <div className="card">
                  <div className="category_key">Ownership</div>
                  <Select 
                    options={CategoryOptions.ownership} 
                    value={ownership}
                    onChange={(value) => setOwnership(value)} 
                    className='select'
                  />
                </div>
                <div className="card">
                  <div className="category_key">Occupation</div>
                  <Select 
                    options={CategoryOptions.occupation} 
                    value={occupation}
                    onChange={(value) => setOccupation(value)} 
                    className='select'
                  />
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
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="contact card">
                <div className="contact_title">Mailbox</div>
                <div className="contact_detail">
                  <input type="text" value={mailbox} onChange={(e) => setMailbox(e.target.value)} />
                </div>
              </div>
              <div className="contact card">
                <div className="contact_title">Email</div>
                <div className="contact_detail">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
              {school.results.length !== 0 && 
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
                            <li>
                              Grade F: <span>{resultYear.grades.E}</span>
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
                            <li>
                              Fail: <span>{resultYear.results.fail}</span>
                            </li>
                          </>
                        }
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default School
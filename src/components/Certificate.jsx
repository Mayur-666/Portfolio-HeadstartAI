import React from 'react'
import { FaStar } from 'react-icons/fa'

function Certificate() {
  return (
    <div className='achievement'>
      <div>
        <h1>Achievements & Moments</h1>
        <ul className='moment-list'>
          <li>Lead a team of 5 members to win <b>UDAAN</b> phase 1 and 2 competition at IPS Academy, Indore.</li>
          <li>Completed Google Cloud Career Practitioner Pathway and Google Cloud Study Jam.</li>
          <li>Participated and won goodies in Google Cloud Arcade.</li>
          <li>Completed Compter Vision Builder offered by IIT Delhi in collab with Mp govt.</li>
          <li>4 <FaStar /> in Python and Java at HackerRank and 2 <FaStar/> in LeetCode.</li>
          <li>Participated in Kriyeta hackathon at AITR.</li>
        </ul>
      </div>
    </div>
  )
}

export default Certificate
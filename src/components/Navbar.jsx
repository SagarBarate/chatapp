import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> Catch Up</span>
      <div className='user'>
        <img src="https://imgs.search.brave.com/taIU1cW7OK6RB9HD8cpcsM2oQFmhQJ1c05IQtePFuUI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb25jZXB0LXBl/b3BsZS13aXRoLXlv/dW5nLW1hbi1ibHVl/LWJhY2tncm91bmRf/MTg1MTkzLTgyMDA2/LmpwZz9zaXplPTYy/NiZleHQ9anBn" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>

    </div>
  )
}

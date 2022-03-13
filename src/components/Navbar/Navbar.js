import React from 'react'
import { Link } from 'react-router-dom';

import styles from "./Navbar.Module.css"

const Navbar = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.left}>SpaceX
          <div>Launch Details</div>
        </div>
        <div className={styles.right}>
          <Link to="/latest" style={{ color: "#000000e6", textDecoration: 'none' }}>
            <button>Latest</button>
          </Link>
          <Link to="/upcoming" style={{ color: "#000000e6", textDecoration: 'none' }}>
            <button>Upcoming</button>
          </Link>
          <Link to="/past" style={{ color: "#000000e6", textDecoration: 'none' }}>
            <button>Past</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
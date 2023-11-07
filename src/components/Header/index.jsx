'use client'
import React, { useState } from 'react'
import Button from './Button'
import styles from './style.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'

const variants = {
  open: {
    height: 650,
    width: 480,
    top: "-25px",
    right: "-25px",
    transition: {duration: 0.5, ease: [0.76,0,0.24,1]}
  },
  closed: {
    height: 40,
    width: 100,
    top: "0px",
    right: "0px",
    transition: {duration: 0.5, delay:0.35 , ease: [0.76,0,0.24,1]}
  }
}

export default function index() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? 'open' : 'closed'}
        initial='closed'
      >
        <AnimatePresence>
          {isActive && <Nav/>}
        </AnimatePresence>       
      </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

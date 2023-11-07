import React from 'react'
import { Links, FooterLinks } from './data'
import styles from './style.module.scss'
import { motion } from 'framer-motion'

const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition : {
            duration: 0.65,
            opacity: { dudration: 0.35 },
            delay: 0.5 + (i * 0.1),
            ease: [.215,.61,.355,1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24,1] }
    },
}

const slideIn = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition : {
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
            ease: [.215,.61,.355,1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24,1] }
    },
}

export default function index() {
  return (
    <div className={styles.nav}>
        <div className={styles.body}>
            {
                Links.map( (link, i) => {
                    return (
                        <div key={i} className={styles.linkContainer}>
                            <motion.div
                                custom={i}
                                variants={perspective}
                                animate='enter'
                                exit='exit'
                                initial='initial'
                            >
                                <a href={link.href}>{link.title}</a>
                            </motion.div>
                        </div>
                    )
                })
            }
        </div>

        <div className={styles.footer}>
            {
                FooterLinks.map( (link, i) => {
                    return (
                        <motion.a
                            key={`f_$${i}`}
                            custom={i}
                            variants={slideIn}
                            animate='enter'
                            exit='exit'
                            initial='initial'
                        >
                            <a href={link.href}>{link.title}</a>
                        </motion.a>
                    )
                } )
            }
        </div>
    </div>
  )
}

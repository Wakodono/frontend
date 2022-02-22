import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './About.scss'
import { urlFor, client } from '../../client'

const About = () => {
  const [aboutTopics, setAboutTopics] = useState([])

  useEffect(() => {
    const query = '*[_type == "aboutTopics"]'
  
    client.fetch(query).then(data => setAboutTopics(data))
  }, [])
  
  return (
    <>
      <h2 className="head-text">We All Know That <span>Good Code</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {
          aboutTopics.map((topic, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={topic.title + index}
            >
              <img src={topic.imgUrl} alt={topic.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {topic.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                  {topic.description}
              </p>
            </motion.div>
          ) )
        }
      </div>
    </>
  )
}

export default About
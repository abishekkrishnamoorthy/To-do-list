import React from "react"

const Footer = ({item}) => {
  return (
    <footer className="sticky top-0 shadow-lg shadow-cyan-500/50 rounded-lg p-3 text-2xl">Task : {item.length}</footer>
  )
}

export default Footer
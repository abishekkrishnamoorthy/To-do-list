import React from "react"
const Header = (props) => {

  return (
      <header className="sticky top-0 shadow-lg shadow-cyan-500/50 rounded-lg " ><h1 className="text-2xl pt-4 pb-4">{props.h1}</h1></header>
  )
}
Header.defaultProps={
  h1:"TO-DO-List"
}
export default Header
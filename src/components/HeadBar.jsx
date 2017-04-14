import React from 'react'

const HeadBar = ({ demonstrate }) => (
  <div className="ui bgwhite container">
    <div className="ui secondary menu column">
      <a className="ui button" onClick={demonstrate}>Demonstration</a>
      <a className="item">Info</a>
      <a className="item">Codebase</a>
      <div className="right menu">
        <a className="item centered">
          <i className="angle down icon" />
        </a>
      </div>
    </div>
  </div>
)

export default HeadBar

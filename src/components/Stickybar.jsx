import React from 'react'
import { Sticky } from 'react-sticky'

export default class Stickybar extends React.Component {
  constructor() {
    super()
    this.state = { sticky: false }
  }

  onStickyStateChange = sticky => this.setState({ sticky })

  scrollToTop = () => document.location.href = "#top"

  render() {
    const stickyClass = `ui bgwhite ${!this.state.sticky ? 'container' : 'sticky-trailing'}`
    const arrowClass = `angle down icon ${this.state.sticky && 'rotate' }`
    return (
      <Sticky
        className={stickyClass}
        onStickyStateChange={this.onStickyStateChange}
      >
        <div className="ui secondary menu column">
          <div className="active item">Demonstration</div>
          <a className="item">Info</a>
          <a className="item">Codebase</a>
          <div className="right menu">
            <a className="item centered" onClick={this.scrollToTop}>
              <i className={arrowClass} />
            </a>
          </div>
        </div>
      </Sticky>
    )
  }
}
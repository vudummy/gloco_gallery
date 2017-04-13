import React from 'react'

export default class Header extends React.Component {
  scrollToTop = () => document.location.href = "#top"
  render() {
    return (
      <div className="ui header menu fixed">
        <a className="item borderless" onClick={this.scrollToTop}>
          <i className="cube icon" />
          <div className="title">Gallery of Doom</div>
        </a>
      </div>
    )
  }
}

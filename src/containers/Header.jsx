import React from 'react'

export default class Header extends React.Component {
  scrollToTop = () => document.location.href = "#top"
  render() {
    return (
      <div className="ui header stackable menu fixed">
        <div className="ui horizontal list">
          <a className="item borderless" onClick={this.scrollToTop}>
            <i className="grey cube icon" />
            <div className="grey title">GALLERY OF DOOM</div>
          </a>
        </div>
      </div>
    )
  }
}

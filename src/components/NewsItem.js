import React, { Component } from 'react';
import blankimage from'./static/img/blankimage.png';
export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsurl } = this.props;

    const buttonStyle = {
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#0d6efd', 
      color: 'white',
      textDecoration: 'none',
      border: '1px solid #0d6efd',
      borderRadius: '5px',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'background-color 0.3s, transform 0.3s',
    };

    const buttonHoverStyle = {
      backgroundColor: '#0b5ed7',
      transform: 'translateY(-2px)',
    };

    return (
      <div className="card my-3" style={{ width: '18rem', backgroundColor: '#000', color: 'white', border: 'none' }}>
        <img
          src={imageUrl ? imageUrl : "" + blankimage}
          className="card-img-top"
          alt="News"
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{title ? (title.length > 34 ? title.slice(0, 34) + '...' : title) : "No Title Provided"}</h5>
          <p className="card-text" style={{ color: '#ccc' }}>
            {description ? (description.length > 45 ? description.slice(0,45) + '....' : description) : "No Description Available"}
          </p>
          <a
            href={newsurl}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={e => Object.assign(e.target.style, buttonStyle, buttonHoverStyle)}
            onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}



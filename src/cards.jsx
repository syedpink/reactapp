import React from 'react';

const Card = ({ title, description, image }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    // maxWidth: '300px',
    margin: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'Center',
  };

  const imgStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '12px',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#333',
  };

  const descStyle = {
    fontSize: '0.95rem',
    color: '#555',
  };

  return (
    <div class="soley" style={cardStyle}>
      <img src={image} style={imgStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={descStyle}>{description}</div>
    </div>
  );
};

export default Card;

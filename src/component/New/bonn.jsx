import React from 'react';
import './Categories.css'; // For custom styles

function Categories() {
  return (
    <div className="categories-container">
      <h2 className="categories-title">Our Categories</h2>
      <div className="categories-grid">
        <div className="category-card">
          <img 
            src="https://bonn.in/new-images/blog/b3.jpg" 
            alt="Bourbon Biscuits" 
            className="category-image" 
          />
          <div className="category-text">
            <h3>AMERICANA</h3>
            <p>UNWRAP THE TASTE OF REAL CHOCOLATE</p>
          </div>
        </div>
        <div className="category-card">
          <img 
            src="https://bonn.in/new-images/blog/coconut%20blog%20image.jpg" 
            alt="Cashew Cookies" 
            className="category-image" 
          />
          <div className="category-text">
            <h3>AMERICANA</h3>
            <p>HAR Bite SMILE WALI</p>
          </div>
        </div>
        <div className="category-card">
          <img 
            src="https://bonn.in/new-images/blog/front-view-black-bread.jpg" 
            alt="Coconut Cookies" 
            className="category-image" 
          />
          <div className="category-text">
            <h3>AMERICANA</h3>
            <p>INDIA KA CRUNCHY COCONUT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

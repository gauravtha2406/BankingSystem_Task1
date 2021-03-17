import React from 'react';
import "../index.css";
import img from "../Images/c.jpg"

const Home = () => {
    return (
      <>
        <section className="home-section">
          <div className="container">
            <div className="row">
              <div className="col-8 offset-2">
                <div className="heading">
                  <h2>Welcome to 24/7 bank</h2>
                  <h5>Your own Bank</h5>
                </div>
              </div>
            </div>

            <div className="image-home">
              <img src={img} alt="not" />
            </div>
          </div>
        </section>
      </>
    );
}

export default Home

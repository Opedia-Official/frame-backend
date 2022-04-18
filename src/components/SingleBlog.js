import React from "react";

function SingleBlog({ item }) {
  return (
    <div>
      <div style={{ margin: "10px" }} className="singlereomandation">
        <div className="blogCard productslider">
          <div className="sliderTestimonialitem ">
            <div className="img">
              <img src={item.image} alt="cat" />
            </div>
            <div className="blog">
              <p className="date">{item.date}</p>
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
              <p className="Link">Details Here..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;

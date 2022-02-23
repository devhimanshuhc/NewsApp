import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3 d-flex">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img
          src={
            !imageUrl
              ? "https://images.moneycontrol.com/static-mcnews/2021/12/fandosensexniftyderivative-1-770x433.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontWeight: "1800", marginBottom: "1rem" }}
          >
            <b>
              {title} <span className="badge bg-secondary">{source}</span>
            </b>
          </h5>
          <hr />
          <p className="card-text" style={{ fontWeight: "600" }}>
            {!description ? `Click "Read More" for details` : description}
          </p>
          <hr />
          <p className="card-text">
            <small className="small">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;

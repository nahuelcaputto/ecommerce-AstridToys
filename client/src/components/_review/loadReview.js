

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoadReview = ({idProduct}) => {
  const [review, setReview] = useState({
    score: 1,
    description: ""
  });

  function handlerChangeScore(e) {
    setReview({ ...review, star: e.target.value });
  }
  function handlerChangeDescription(e) {
    setReview({ ...review, text: e.target.value });
  }


  function handlerLoadReviewSubmit(e) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/${idProduct}/review`, review)
      .then((res) => {
        console.log("Review loaded");
      })
      .catch((e) => {
        console.log(e);
      });
    e.preventDefault();
  }



  return (
    
    <div className="container d-flex flex-column mx-auto my-5 col-sm-12 col-md-8 col-lg-6 p-5 border shadow">
      <h2 class="display-5 mb-4 text-center">Let us your comment... :) </h2>
      <form onSubmit={handlerLoadReviewSubmit}>
        <div className="form-group">
          <label htmlFor="ReviewScore" className="">
            score:
          </label>
          <input
            type="text"
            className="form-control"
            name="star"
            value={review.star}
            placeholder="Rate us..."
            onChange={handlerChangeScore}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ReviewText">Comment us your opinion:</label>
          <textarea
            className="form-control"
            name="description"
            value={review.text}
            rows="3"
            onChange={handlerChangeDescription}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#modalCreateCat"
        >
          Submit
        </button>
        <Link to="/myShop/1">
          <button className="btn btn-danger ml-2">Back</button>
        </Link>
      </form>
      {/* <!-- Modal --> */}
      <div
        class="modal"
        id="modalCreateCat"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalCreateCatLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalCreateCatLabel">
              Ratings
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Category created</div>
            <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={()=>window.location.reload()}
                >
                  OK
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadReview;
  /*
  return (
  
      <>
        <div className="container d-flex flex-column text-center my-5 p-5">
          <h1 className="display-3">Ratings</h1>
              <div className="row headCont">
              <div className="col-4 col-md-8">
                <span>name</span>
              </div>
              <div className="col-4 col-md-2">
                <span>ratings</span>
              </div>
              <div className="col-4 col-md-2">
                <span>comentarios</span>
              </div> 
              </div> 
              </div>
      
 
          <form>
            <fieldset>
              <span class="star-cb-group">
                <input type="radio" id="rating-5" name="rating" value="5" /><label for="rating-5">5</label>
                <input type="radio" id="rating-4" name="rating" value="4" checked="checked" /><label for="rating-4">4</label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label for="rating-3">3</label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label for="rating-2">2</label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label for="rating-1">1</label>
                <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" /><label for="rating-0">0</label>
              </span>
            </fieldset>
          </form>
          <script> 

          </script>
          </>
      )}*/
      



    




/*import React, { useState, useEffect } from "react";

export default function Review() {
  const [review, setReview] = useState([]);
  return (
  
      <>
        <div className="container d-flex flex-column text-center my-5 p-5">
          <h1 className="display-3">Ratings</h1>
              <div className="row headCont">
              <div className="col-4 col-md-8">
                <span>name</span>
              </div>
              <div className="col-4 col-md-2">
                <span>ratings</span>
              </div>
              <div className="col-4 col-md-2">
                <span>comentarios</span>
              </div> 
              </div> 
              </div>
      
 
          <form>
            <fieldset>
              <span class="star-cb-group">
                <input type="radio" id="rating-5" name="rating" value="5" /><label for="rating-5">5</label>
                <input type="radio" id="rating-4" name="rating" value="4" checked="checked" /><label for="rating-4">4</label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label for="rating-3">3</label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label for="rating-2">2</label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label for="rating-1">1</label>
                <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" /><label for="rating-0">0</label>
              </span>
            </fieldset>
          </form>
          <script> 

          </script>
          </>
      )}
      
*/


    




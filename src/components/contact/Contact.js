import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="form-div">
        <form method="post">
          <div className="img-div">
            <img src="https://cdn-icons-png.flaticon.com/512/3447/3447476.png" />
          </div>
          <h1>Contact Us</h1>
          <div class="txt_field">
            <label>First Name </label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label>Last Name </label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label>Mobile No.</label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label>Email add. </label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label for="story">Message :</label>
            <br></br>
            <textarea id="story" name="story" rows="5" cols="33">
              Write here...
            </textarea>
          </div>
          {/* <div class="txt_field">
        <span></span>

        <input type="password" required />
        
        <label>Password</label>
      </div> */}
          <div class="submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

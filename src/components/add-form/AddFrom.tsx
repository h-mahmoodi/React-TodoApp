import React from "react";
import Button from "../button/Button";

export default function AddFrom() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">description</label>
          <textarea />
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}

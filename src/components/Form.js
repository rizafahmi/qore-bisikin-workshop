import { useState } from "react";
import qoreContext from "../qoreContext.js";

function Form({ feedbacks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { insertRow } = qoreContext.view("allFeedback").useInsertRow();
  const { revalidate } = feedbacks;

  async function handleSubmit(event) {
    event.preventDefault();

    await insertRow({ title, description });

    // reset form
    setTitle("");
    setDescription("");
    revalidate();
  }

  return (
    <div className="form">
      <div className="formbox">
        <div className="formpad">
          <h3 className="form-title">Berikan saran untuk fitur</h3>
          <p className="form-desc">
            Apakah yang dapat membuat aplikasi ini menjadi berguna?
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-inside">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Ide brilian kamu"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              />
            </div>
            <div className="form-inside">
              <textarea
                placeholder="Jelaskan ide brilian kamu"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
              ></textarea>
            </div>
            <div>
              <button className="">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

function Form() {
  return (
    <div className="form">
      <div className="formbox">
        <div className="formpad">
          <h3 className="form-title">Berikan saran untuk fitur</h3>
          <p className="form-desc">
            Apakah yang dapat membuat aplikasi ini menjadi berguna?
          </p>
          <form>
            <div className="form-inside">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Ide brilian kamu"
              />
            </div>
            <div className="form-inside">
              <textarea placeholder="Jelaskan ide brilian kamu"></textarea>
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

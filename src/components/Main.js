import qoreContext from "../qoreContext.js";
import Form from "./Form.js";
import List from "./List.js";

function Main() {
  const feedbacks = qoreContext.view("allFeedback").useListRow();
  return (
    <div className="outbox">
      <div className="innerbox">
        <Form />
        <List feedbacks={feedbacks} />
      </div>
    </div>
  );
}

export default Main;

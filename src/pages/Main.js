import qoreContext from "../qoreContext.js";
import Form from "../components/Form.js";
import List from "../components/List.js";
import Template from "./Template.js";

function Main() {
  const feedbacks = qoreContext.view("allFeedback").useListRow();
  return (
    <Template>
      <Form feedbacks={feedbacks} />
      <List feedbacks={feedbacks} />
    </Template>
  );
}

export default Main;

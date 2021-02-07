import { useParams, Link } from "react-router-dom";

import qoreContext from "../qoreContext.js";
import Template from "./Template.js";

function Detail() {
  const { id } = useParams();
  const { data, status, revalidate } = qoreContext
    .view("allFeedback")
    .useGetRow(id);
  const { data: comments } = qoreContext.view("commentsByFeedback").useListRow({
    feedbackId: id,
  });
  const { action } = qoreContext.view("allFeedback").useActions(id);
  return (
    <Template>
      <div className="detail-box">
        {status === "success" && (
          <>
            <div className="detail-box-title">
              <h3 className="detail-box-title-header">{data.title}</h3>
              <p className={`list-status ${data.status.toLowerCase()}`}>
                {data.status}
              </p>
              <p>{data.description}</p>
            </div>
            <div className="comment-box">
              <ul className="comment-box-devider">
                {comments &&
                  comments.map(function (comment) {
                    return (
                      <li className="comment-box-padded" key={comment.id}>
                        <div className="comment-box-padded-space">
                          <img
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            alt=""
                          />
                          <p>{comment.body}</p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <button
              disabled={data.status === "DONE"}
              className={
                data.status === "DONE" ? "button-disabled" : "button-finish"
              }
              onClick={async () => {
                await action("setAsDone").trigger();
                await revalidate();
              }}
            >
              ✔ Selesai
            </button>
          </>
        )}
        <Link to="/">
          <button className="button">Back</button>
        </Link>
      </div>
    </Template>
  );
}

export default Detail;

import { useParams, Link } from "react-router-dom";

import qoreContext from "../qoreContext.js";
import Template from "./Template.js";

function Detail() {
  const { id } = useParams();
  const { data, status } = qoreContext.view("allFeedback").useGetRow(id);
  console.log(data);
  return (
    <Template>
      <div className="detail-box">
        {status === "success" && (
          <>
            <div className="detail-box-title">
              <h3 className="detail-box-title-header">{data.title}</h3>
              <p>{data.description}</p>
            </div>
            <div className="comment-box">
              <ul className="comment-box-devider">
                <li className="comment-box-padded">
                  <div className="comment-box-padded-space">
                    <img
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
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

import { Link } from "react-router-dom";

function List({ feedbacks }) {
  const { data, status } = feedbacks;
  return (
    <div className="list">
      <ul className="list-ul">
        {status === "success" &&
          data.map(function (feedback) {
            return (
              <li className="list-li" key={feedback.id}>
                <div className="list-li-container">
                  <Link to={`/feedback/${feedback.id}`}>
                    <p className="list-title">{feedback.title}</p>
                  </Link>
                  <p className={`list-status ${feedback.status.toLowerCase()}`}>
                    {feedback.status}
                  </p>
                  <p className="list-description">{feedback.description}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default List;

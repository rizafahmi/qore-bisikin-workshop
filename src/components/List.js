function List({ feedbacks }) {
  const { data, status } = feedbacks;
  return (
    <div className="list">
      <ul className="list-ul">
        {status === "success" &&
          data.map(function (feedback) {
            return (
              <li className="list-li">
                <div className="list-li-container">
                  <p className="list-title">{feedback.title}</p>
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

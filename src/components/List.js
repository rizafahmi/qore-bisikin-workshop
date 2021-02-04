function List() {
  return (
    <div className="list">
      <ul className="list-ul">
        <li className="list-li">
          <div className="list-li-container">
            <p className="list-title">Version history for projects</p>
            <p className="list-status progress">IN PROGRESS</p>
            <p className="list-description">
              Ini adalah teks contoh untuk latihan tailwind
            </p>
          </div>
        </li>
        <li className="list-li">
          <div className="list-li-container">
            <p className="list-title">Share projecct with selected people</p>
            <p className="list-status icebox">ICEBOX</p>
            <p className="list-description">
              Ini adalah teks contoh untuk latihan tailwind
            </p>
          </div>
        </li>
        <li className="list-li">
          <div className="list-li-container">
            <p className="list-title">Sort people by recently active</p>
            <p className="list-status done">DONE</p>
            <p className="text-sm font-normal text-gray-600">
              Ini adalah teks contoh untuk latihan tailwind
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default List;

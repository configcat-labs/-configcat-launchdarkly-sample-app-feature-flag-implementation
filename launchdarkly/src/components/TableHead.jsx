import DataContext from "../context/DataContext";
import { useContext, useRef } from "react";

const TableHead = () => {
  const { newStudent, setNewStudent, setSearch, handleNewStudent } =
    useContext(DataContext);
  const focusRef = useRef();
  return (
    <thead>
      <tr className="thead">
        <th colSpan="3">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Students</label>
            <input
              autoFocus
              type="search"
              name=""
              ref={focusRef}
              role="searchbox"
              id="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </th>
        <th className="thead" colSpan="3">
          <form onSubmit={handleNewStudent}>
            <label htmlFor="add-student">New Student</label>
            <input
              id="add-student"
              type="text"
              placeholder="add student"
              value={newStudent}
              required
              onChange={(e) => setNewStudent(e.target.value)}
            />
            <button
              type="submit"
              className="new-student-btn"
              aria-label="Add Student"
              onClick={() => focusRef.current.focus()}
            >
              Add Student
            </button>
          </form>
        </th>
      </tr>
      <tr className="thead">
        <th scope="col" colSpan="1" className="table-id">
          Id
        </th>
        <th scope="col" colSpan="2">
          Name
        </th>
        <th scope="col" colSpan="1" className="table-crud">
          Is Active
        </th>
        <th scope="col" colSpan="1" className="table-crud">
          Edit
        </th>
        <th scope="col" colSpan="1" className="table-crud">
          Delete
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;

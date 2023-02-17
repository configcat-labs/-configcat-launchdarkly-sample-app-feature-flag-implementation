import DataContext from "../context/DataContext";
import { useContext } from "react";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

function TableBody() {
  const { students, search, deleteStudent, changeActive, handleEditStudent } =
    useContext(DataContext);
  return (
    <tbody>
      {students.length ? (
        students
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((student) => (
            <tr key={student.id}>
              <td data-label="Id" colSpan="1" className="table-id">
                {student.id}
              </td>
              <td
                data-label="Name"
                colSpan="2"
                className={student.isActive ? "ckecked" : ""}
              >
                {student.name}
              </td>
              <td
                data-label="Active"
                colSpan="1"
                className="table-crud checkbox"
              >
                <input
                  type="checkbox"
                  id={student.id}
                  checked={student.isActive}
                  onChange={() => changeActive(student.id)}
                />
              </td>
              <td data-label="Edit" colSpan="1" className="table-crud">
                <button onClick={() => handleEditStudent(student.id)}>
                  <BsPencilFill />
                </button>
              </td>
              <td data-label="Delete" colSpan="1" className="table-crud">
                <button onClick={() => deleteStudent(student.id)}>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))
      ) : (
        <tr>
          <td colSpan="6" className="table-empty-msg">
            Student list is empty
          </td>
        </tr>
      )}
      {students.length &&
      !students.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ).length ? (
        <tr>
          <td colSpan="6" className="table-empty-msg">
            No Matches
          </td>
        </tr>
      ) : null}
    </tbody>
  );
}

export default TableBody;

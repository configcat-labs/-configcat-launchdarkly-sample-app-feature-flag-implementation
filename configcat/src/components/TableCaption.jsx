import DataContext from "../context/DataContext";
import { useContext, useEffect, useState } from "react";

const TableCaption = ( ) => {
  const { students } = useContext(DataContext);
  const [countOfStudents, setCountOfStudents] = useState(0);
  const [countOfActiveStudents, setCountOfActiveStudents] = useState(0);
  const [countOfInactiveStudents, setCountOfInactiveStudents] = useState(0);

  useEffect(() => {
    const studentCount = JSON.parse(localStorage.getItem("students")) || [];
    setCountOfStudents(studentCount.length);
    let activeCount = 0;
    let inactiveCount = 0;
    studentCount.forEach((student) => {
      if (student.isActive) {
        activeCount++;
      } else {
        inactiveCount++;
      }
    });
    setCountOfActiveStudents(activeCount);
    setCountOfInactiveStudents(inactiveCount);
  }, [students]);

  return (
    <>
        <caption>
          {countOfStudents
            ? `Number of students: ${countOfStudents}. Active students: ${countOfActiveStudents}. Inactive students: ${countOfInactiveStudents}`
            : "No students"}
        </caption>
    </>
  );
};

export default TableCaption;

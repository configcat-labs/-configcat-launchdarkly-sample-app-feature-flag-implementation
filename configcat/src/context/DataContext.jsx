import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [newStudent, setNewStudent] = useState("");
  const [search, setSearch] = useState("");
  const [editStudent, setEditStudent] = useState("");
  const [students, setStudents] = useState(
    localStorage.getItem("students")
      ? JSON.parse(localStorage.getItem("students"))
      : []
  );

  const deleteStudent = (id) => {
    const removeStudent = students.filter((s) => s.id != id);
    setStudents(removeStudent);
    localStorage.setItem("students", JSON.stringify(removeStudent));
  };

  const changeActive = (id) => {
    const updatedStudents = students.map((s) => {
      if (s.id === id) {
        return { ...s, isActive: !s.isActive };
      }
      return s;
    });
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const handleNewStudent = (e) => {
    e.preventDefault();
    if (!newStudent) return;
    const newStudentObject = {
      id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
      isActive: false,
      name: newStudent,
    };
    setStudents([...students, newStudentObject]);
    localStorage.setItem(
      "students",
      JSON.stringify([...students, newStudentObject])
    );
    setNewStudent("");
  };

  const handleEditStudent = (id) => {
    const newName = prompt("Edit Student Name");
    if (!newName) return;
    const updatedName = students.map((s) => {
      if (s.id === id) {
        return { ...s, name: newName };
      }
      return s;
    });
    setStudents(updatedName);
    localStorage.setItem("students", JSON.stringify(updatedName));
  };

  return (
    <DataContext.Provider
      value={{
        students,
        setStudents,
        newStudent,
        handleNewStudent,
        setNewStudent,
        editStudent,
        setEditStudent,
        handleEditStudent,
        search,
        setSearch,
        deleteStudent,
        changeActive,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

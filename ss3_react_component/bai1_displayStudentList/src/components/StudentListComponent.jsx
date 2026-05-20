import React from "react";
import { getAll } from "../service/studentService";

class StudentListComponent extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    console.log("--------didMount------");
    this.setState({
      studentList: [...getAll()],
    });
  }

  render() {
    return (
      <>
        <table className={'table table-striped table-dark'}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default StudentListComponent;

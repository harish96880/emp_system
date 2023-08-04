import React from "react";
import Button from "./Button";

export default function StudentTable() {
  return (
    <div className="mx-auto">
      <table className="table table-bordered my-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Email</th>
            <th scope="col">Register Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sriharish</td>
            <td>sriharish@gmail.com</td>
            <td>20110105</td>
            <td>
              <Button className="btn btn-success m-1" text="Update" />
              <Button className="btn btn-danger m-1" text="Delete" />
              <Button className="btn btn-primary m-1" text="Edit" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

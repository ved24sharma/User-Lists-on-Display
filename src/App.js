import "./App.css";
import React, { useState } from "react";
import JsonData from "./components/JSONDATA.json";
import ReactPaginate from "react-paginate";

function App() {
  let id;
  const [users, setUsers] = useState(JsonData.slice(0, 5));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div key={user.id} className="user">
          <h3> {user.first_name}</h3>
          <h3> {user.last_name}</h3>
          <h3> {user.email}</h3>
          <h3> {user.avatar}</h3>
          <h3> {user.id}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
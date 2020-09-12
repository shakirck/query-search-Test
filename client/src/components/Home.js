import React, { useEffect, useState } from "react";
import { listQueries } from "../helpers/api";
import Query from "./Query";
import Form from "./Form";
import Search from "./Search";
export default function Home() {
  const [data, setData] = useState({ queries: [] }); //state for storing queries/questions
  const [error, setError] = useState({ error: null });
  //state for controlling the form visibility state
  const [state, setState] = useState({
    isFormLoaded: false,
    inProgress: false,
  });

  //state for updating the state after fetching the queries
  const stateUpdate = (data) => {
    setData({ queries: data.queries });
    setState({ isFormLoaded: false, inProgress: false });
  };

  //for fetching the queries from the server when  the component is mounted
  const getQueries = async () => {
    setState({ ...state, inProgress: true });
    const data = await listQueries();
    if (data.error) {
      console.log(data);
      setError({ error: error.message });
      return;
    }
    stateUpdate(data);
    setError();

    console.log(data);
  };
  useEffect(() => {
    getQueries();
  }, []);

  const { queries } = data;

  return (
    <div className="Home">
      <Search onSearch={stateUpdate} />

      {!state.isFormLoaded && (
        <button
          className="btn"
          onClick={() => setState({ ...state, isFormLoaded: true })}
        >
          Add New Query
        </button>
      )}
      {state.isFormLoaded && <Form onUpdate={getQueries} />}
      <div className="warnings">
        {queries.length === 0 && !state.inProgress && <h3> No Results</h3>}
        {state.inProgress && !error && <h3>Loading...</h3>}
      </div>
      <ul className="queries__list">
        {queries.map((query) => (
          <li className="query__item" key={query._id}>
            <Query key={query._id} query={query} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";

import { searchQuery } from "../helpers/api";
export default function Search({ onSearch }) {
  const { register, handleSubmit } = useForm(); // for handling form submissions

  // searching among all the queries for a match
  const search = async (searchText) => {
    const searchResults = await searchQuery(searchText);
    onSearch(searchResults);
  };

  //sending the search text to the server
  const onSubmit = (data) => {
    search(data);
  };
  return (
    <div className="Search">
      <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="searchText"
          ref={register}
          placeholder="Search...."
        />

        <input className="btn" type="submit" value="search" />
      </form>
    </div>
  );
}

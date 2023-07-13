import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    console.log("검색 결과:", query);
  }, [query]);

  return (
    <div>
      <h1>검색결과:</h1>
      <p>keyword:{query}</p>
    </div>
  );
};

export default SearchResults;

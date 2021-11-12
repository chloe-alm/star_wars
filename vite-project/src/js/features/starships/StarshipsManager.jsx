import { coreModule } from "@reduxjs/toolkit/dist/query";
import React, { useState } from "react";

import { useFetchStarshipsQuery } from "../../app/services/starshipsApi";

export const StarshipsManager = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const { data, isFetching } = useFetchStarshipsQuery({ page, search });

  let nbPage;
  // count 36 page
  //limit -> 5
  //nb reuslt 36/5= 7.2-> math.ceil =8
  if (data) nbPage = Math.ceil(data.count / limit);

  //   console.log(search);

  return (
    <div>
      <h1>Star wars Starships </h1>
      <label>Search a starships</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />

      {isFetching ? (
        <div style={{ marginTop: "20px" }}>Starships loading ...</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          {page != 1 && (
            <button onClick={() => setPage(page - 1)}>{"<"}</button>
          )}
          <div style={{ margin: "0 20px" }}>
            {data?.results?.map((starships) => {
              return (
                <div key={starships.name}>
                  <p>Le nom :{starships.name}</p>
                  <p>Le model :{starships.model}</p>
                  <p>La longueur : {starships.length}</p>
                  <hr></hr>
                </div>
              );
            })}
          </div>
          {nbPage != page && (
            <button onClick={() => setPage(page + 1)}>{">"}</button>
          )}
        </div>
      )}
    </div>
  );
};

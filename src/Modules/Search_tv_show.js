import React from "react";
import axios from "axios";
import { UserContext } from "../routes";
import { useContext } from "react";
import ShowSearchTv from "./Show_search_tv";

const InfoTvShow = () => {
  const { user } = useContext(UserContext);
  const [tvShow, setTvShow] = React.useState([]);
  const [searchTvShow, setSearchTvShow] = React.useState("");

  const handleChangeTv = (event) => {
    setSearchTvShow(event.target.value);
  };

  const findTvShow = (e) => {
    e.preventDefault();
    axios
      .get(`/api/search/tv/${searchTvShow}`)
      .then((response) => response.data)
      .then((busqueda) => setTvShow(busqueda));
  };


  return (
    <>
      <form onSubmit={findTvShow} className="search">
        <div className="search">
          <input
            type="text"
            placeholder="Search tv show"
            value={searchTvShow}
            onChange={handleChangeTv}
          />
        </div>
      </form>
      <ShowSearchTv tvShow={tvShow}></ShowSearchTv>
    </>
  );
};

export default InfoTvShow;

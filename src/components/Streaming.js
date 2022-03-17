import React, { useEffect, useState } from "react";
import * as config from "../config";
import Header from "./Header";
import Footer from "./Footer";

function httpPost(e) {
  let databody = {
    artist: "Posted",
    title: "With HTTP",
    url: `${config.CLIENT_BASE_URL}/audio/audio.mp3`,
    fav: false,
  };

  fetch(`${config.API_BASE_URL}/streaming-api/tracks`, {
    method: "POST",
    body: JSON.stringify(databody),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function httpFav(id) {
  console.log(id);
  let databody = {
    fav: true,
  };

  fetch(`${config.API_BASE_URL}/streaming-api/tracks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(databody),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function httpUnfav(id) {
  console.log(id);
  let databody = {
    fav: false,
  };

  fetch(`${config.API_BASE_URL}/streaming-api/tracks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(databody),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function httpDelete(id) {
  console.log(id);
  fetch(`${config.API_BASE_URL}/streaming-api/tracks/${id}`, {
    method: "DELETE",
  });
}

function Streaming() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/streaming-api/tracks`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setTracks(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="streaming__banner">
            <aside></aside>
            <ul className="streaming__results">
              {tracks &&
                tracks.map((x) => {
                  if (x.fav) {
                    return (
                      <li key={x._id + "x"}>
                        <button className="button-play">
                          {x._id}
                          <audio controls>
                            <source src={x.url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </button>
                        <button
                          className="button-do button-fav"
                          onClick={() => httpUnfav(x._id)}
                        >
                          ❤️
                        </button>
                        <button
                          className="button-do button-del"
                          onClick={() => httpDelete(x._id)}
                        >
                          🗑️
                        </button>
                      </li>
                    );
                  } else return;
                })}
            </ul>
          </section>
          <section className="streaming__main">
            <div className="toolbar">
              <input
                type="text"
                placeholder="Search.."
                className="searchBar"
              ></input>
              <ul>
                <li>Register</li>
                <li>Log in</li>
                <li>
                  <button onClick={() => httpPost()}>Add content</button>
                </li>
              </ul>
            </div>
            <ul className="streaming__results">
              {tracks &&
                tracks.map((x) => {
                  return (
                    <li key={x._id}>
                      <button className="button-play">
                        {x._id}
                        <audio controls>
                          <source src={x.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </button>
                      <button
                        className="button-do button-fav"
                        onClick={() => httpFav(x._id)}
                      >
                        ❤️
                      </button>
                      <button
                        className="button-do button-del"
                        onClick={() => httpDelete(x._id)}
                      >
                        🗑️
                      </button>
                    </li>
                  );
                })}
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Streaming;

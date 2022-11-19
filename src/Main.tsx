import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

export const Main = () => {
  const [gifters, setGifters] = useState<string[]>([]);
  const [result, setResult] = useState<{ [key: string]: string }>({});
  const [gifter, setGifter] = useState("");
  const [gift, setGift] = useState("");
  const [gifts, setGifts] = useState<string[]>([]);
  const ref = useRef(null);

  const addGifter = () => {
    if (gifter && gift) {
      setGifters([...gifters, gifter]);
      setGifter("");
      setGifts({ ...gifts, [gifter]: gift });
      setGift("");
      if (ref) {
        ref.current.focus();
      }
    }
  };

  const removeGifter = (val: string) => {
    const newList = gifters.filter((name) => {
      return name !== val;
    });
    setGifters(newList);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addGifter();
    }
  };

  const simpleSort = () => {
    const recivers = [...gifters].sort(() => (Math.random() > 0.5 ? 1 : -1));
    const giversList = recivers.reduce((acc, name, i, arr) => {
      let reciver;
      if (i === arr.length - 1) {
        reciver = recivers[0];
      } else {
        reciver = recivers[i + 1];
      }
      return { ...acc, [name]: reciver };
    }, {});
    setResult(giversList);
  };
  return (
    <div className="App container">
      <h2>Kris Kindle</h2>
      <div className="row">
        <span className="mb-3">
          Spread some festive cheer with the gift of giving
        </span>
      </div>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="basic-addon1"
                onClick={() => addGifter()}
              >
                {"🎁"}
              </span>
            </div>
            <input
              placeholder="Name"
              value={gifter}
              onChange={(evt) => setGifter(evt.target.value)}
              onKeyPress={(evt) => handlePress(evt)}
              className="form-control"
              autoFocus
              ref={ref}
            ></input>
            <input
              placeholder="Gift"
              value={gift}
              onChange={(evt) => setGift(evt.target.value)}
              onKeyPress={(evt) => handlePress(evt)}
              className="form-control"
            ></input>
          </div>

          <ul className="list-group">
            {gifters.map((val) => {
              return (
                <li className="list-group-item p-0 m-0 names">
                  <div className="input-group">
                    <input
                      placeholder="Name"
                      value={val}
                      className="form-control"
                      disabled
                    ></input>
                    <div className="input-group-append">
                      <button
                        className="btn input-group-text btn-secondary"
                        id="basic-addon1"
                        onClick={() => removeGifter(val)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col col-sm-8">
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary mb-3"
              onClick={() => simpleSort()}
              disabled={gifters.length < 2}
            >
              Allocate
            </button>
          </div>
          <ul className="list-group">
            {isEmpty(result)
              ? null
              : gifters.map((name: string) => {
                  const reciver = result[name];
                  const personsGift = gifts[reciver];
                  const code = window.btoa(`${name}:${reciver}:${personsGift}`);

                  return (
                    <li className="list-group-item">
                      <Link to={`/answer/${code}`}>{name}</Link>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import "../pages/App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  // Debounded
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delay = 500;
    let timer;

    const debounce = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setCount((e) => e + 1);
      }, delay);
    };

    debounce();

    return () => clearTimeout(timer);
  }, [search]);

  // Non - Debounded

  const [keyword, setKeyword] = useState("");
  const [counter, setCounter] = useState(0);

  const onChangeKey = (e) => {
    setKeyword(e.target.value);
    setCounter((e) => e + 1);
  };

  const onChangeKeyword = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div class="containter w-75 mx-auto mt-5">
      <div class="card pt-5 px-5 mb-5 shadow-sm">
        <h3 className="text-center pb-3">Debounced</h3>
        <input type="text" class="form-control mx-auto mb-3" onChange={onChangeKeyword} />
        <button className="btn btn-primary w-100">Search</button>
        <div class="d-flex mt-3">
          <p className="col-6 fs-4 py-2">
            <strong>Search for</strong> : {search}
          </p>
          <p className="col-6 fs-4 py-2">
            <strong>Total search</strong> : {count}
          </p>
        </div>
      </div>
      <div class="card pt-5 px-5 shadow-sm">
        <h3 className="text-center pb-3">Non - Debounced</h3>
        <input type="text" class="form-control mx-auto mb-3" onChange={onChangeKey} />
        <button className="btn btn-primary w-100">Search</button>
        <div class="d-flex mt-3">
          <p className="col-6 fs-4 py-2">
            <strong>Search for</strong> : {keyword}
          </p>
          <p className="col-6 fs-4 py-2">
            <strong>Total search</strong> : {counter}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

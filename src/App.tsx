import axios, { CancelTokenSource } from "axios";

const App = () => {
  let cancelToken: CancelTokenSource;
  const onSearchValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled");
    }
    cancelToken = axios.CancelToken.source();
    try {
      await axios.post(`https://reqbin.com/echo/post/json`, searchValue, {
        cancelToken: cancelToken.token,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Search" onChange={onSearchValue} />
      </div>
    </div>
  );
};

export default App;

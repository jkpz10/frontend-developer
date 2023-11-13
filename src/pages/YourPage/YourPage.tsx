/* eslint-disable no-unused-vars */
import { useAppDispatch, useAppSelector } from '@/hooks/app/use-app';
import './YourPage.css';
import { incremented } from '@/store/features/counter/counter-slice';

const YourPage = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state) => state.persistedReducer);
  return (
    <div className="App">
      <header className="App-header">
        <img src="/vite.svg" className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier + Redux Toolkit
        </p>

        <div className="body">
          <button onClick={() => dispatch(incremented())}>
            🪂 Click me : {counter.value}
          </button>

          <p>
            {' '}
            Don&apos;t forgot to install Eslint and Prettier in Your Vscode.
          </p>

          <p>
            Mess up the code in <code>pages/YourPage/YourPage.tsx </code> and
            save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
    </div>
  );
};

export default YourPage;

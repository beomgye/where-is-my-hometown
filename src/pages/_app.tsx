import Global from "@/styles/global";


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
};

export default App;

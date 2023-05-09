import NextNprogress from "nextjs-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/global.scss";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <NextNprogress
        color="#FF0"
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
      />
      <Component {...pageProps} />
    </>
  );
}

import { Component } from "react";

import cosmos from "../assets/cosmos.svg"
import "./ErrorBoundary.scss";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallbackUI />;
    }

    return this.props.children;
  }
}

export function ErrorFallbackUI() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <section className="error-main">
      <div className="error-illus">
        <img alt="404 Illustration" src={cosmos} />
      </div>
      <div className="error-message">
        <h1 className="error-message__heading">Oh No! We hoped you wouldn't get here.</h1>
        <p className="error-message__text">
          E pele dear, it looks like you tried something that doesn't work.
        </p>
        <button className="error-message__backlink" onClick={refreshPage}>Go Back Home?</button>
      </div>
    </section>
  );
}

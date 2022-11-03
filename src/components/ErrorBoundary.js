import { Component } from "react";
import { Link } from "react-router-dom";

import Ex from "../assets/ex.svg";

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
      return <ErrorFallbackUI/>;
    }

    return this.props.children;
  }
}

export function ErrorFallbackUI() {
  return (
    <section className="error-main">
      <div className="error-illus">
        <img alt="404 Illustration" src={Ex}/>
      </div>
      <div className="error-message">
        <h1 className="error-message__heading">404 Bustops and Digital Sapa</h1>
        <p className="error-message__text">
          Look, you might have clicked a link to a broken page. Now we're
          confused and you're confused, can we just
        </p>
        <Link to="/repos" className="error-message__backlink">Go Back to Repositories?</Link>
      </div>
    </section>
  );
}

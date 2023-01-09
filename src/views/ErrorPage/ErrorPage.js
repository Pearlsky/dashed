import { Link } from "react-router-dom";
import ex from "../../assets/ex.svg"
const ErrorPage = () => {
    return (
        <section className="error-main">
            <div className="error-illus">
                <img alt="404 Illustration" src={ex} />
            </div>
            <div className="error-message">
                <h1 className="error-message__heading">404 Bustops and Digital Sapa</h1>
                <p className="error-message__text">
                    Look, you might have clicked a link to a broken page or a page that does not exist.
                </p>
                <Link to="/" className="error-message__backlink">Go Back Home?</Link>
            </div>
        </section>
    )
};

export default ErrorPage;
import { Link } from "react-router-dom";
import './notFound.scss';

const NotFoundPage = () => {
    return (
        <section id='pageNotFound'>
            <div className="mainContainer">
                <div className="headerContainer">
                    {/* <div className="imgContainer">
                        <img src="../../../src/assets/images/notFound.png" alt="logo" style={{ width: '100%', height: '100%' }} />
                    </div> */}
                    <h2>404</h2>
                </div>

                <h5>Oops! Looks like you took a wrong turn.</h5>
                <p>The page you’re looking for isn’t here — maybe it’s gone out of style or never existed.</p>
                <Link to='/'>Go Back</Link>
            </div>
        </section>
    );
};

export default NotFoundPage
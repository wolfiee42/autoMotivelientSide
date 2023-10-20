import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen" id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="mb-5">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link className="btn bg-gray-700 hover:bg-gray-200 hover:text-black text-white" to={'/'}>Back to Home</Link>
        </div>
    );
}
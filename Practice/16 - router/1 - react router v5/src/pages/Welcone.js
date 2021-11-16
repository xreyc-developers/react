import { Route } from "react-router";

const Welcome = () => {
    return (
        <section>
            <h1>The welcome page</h1>
            <Route path="/welcome/new-user">
                <p>Welcome, new user</p>
            </Route>
        </section>
    )
}

export default Welcome;
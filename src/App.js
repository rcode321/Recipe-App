import { Switch, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Recipe from "./pages/Recipe";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout className="App">
		<Switch>
		<Route path="/" exact>
		<AllMeetupsPage />
				</Route>
				<Route path="/new-meetup">
					<NewMeetupPage />
				</Route>
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
				<Route path="/recipes/:id">
					<Recipe />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;

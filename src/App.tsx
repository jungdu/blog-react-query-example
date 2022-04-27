import { QueryClientProvider } from "react-query";
import "./App.css";
import { queryClient } from "./react-query/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import PostList from "./components/PostList";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="p-4">
				<h1 className="text-2xl mb-4">Post App</h1>
				<PostList />
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;

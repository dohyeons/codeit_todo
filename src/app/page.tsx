import List from "@/components/List";
import getItems from "@/api/getItems";

export default async function Home() {
	const initialTodos = await getItems();

	return (
		<div className="container-main">
			<List initialTodos={initialTodos} />
		</div>
	);
}

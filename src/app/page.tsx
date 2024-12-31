import List from "@/components/List";
import getItems from "@/api/getItems";

export default async function Home() {
	const initialTodos = await getItems();

	return (
		<main className="container-main w-full min-h-screen pt-[76px] tablet:pt-[84px] px-[16px]">
			<List initialTodos={initialTodos} />
		</main>
	);
}

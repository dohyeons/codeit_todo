import Error from "@/components/Error";
import TodoDetail from "@/components/TodoDetail";
import getTodoDetail from "@/api/getTodoDetail";

export default async function Page({
	params,
}: {
	params: Promise<{ itemId: string }>;
}) {
	const itemId = (await params).itemId;

	try {
		const data = await getTodoDetail(Number(itemId));

		return <TodoDetail initialTodoDetail={data} />;
	} catch {
		return <Error />;
	}
}

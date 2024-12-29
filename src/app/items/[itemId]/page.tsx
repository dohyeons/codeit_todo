import getTodoDetail from "@/api/getTodoDetail";
import TodoDetail from "@/components/TodoDetail";

export default async function Page({
	params,
}: {
	params: Promise<{ itemId: string }>;
}) {
	const itemId = (await params).itemId;
	const res = await getTodoDetail(Number(itemId));

	return <TodoDetail initialTodoDetail={res} />;
}

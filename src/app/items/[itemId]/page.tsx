import Error from "@/components/Error";
import TodoDetail from "@/components/TodoDetail";
import getTodoDetail from "@/api/getTodoDetail";

export default async function Page({
	params,
}: {
	params: Promise<{ itemId: string }>;
}) {
	// 현 항목의 id를 불러옴.
	const itemId = (await params).itemId;

	// 상세데이터를 가져오고 실패 시 Error 컨포넌트 렌더링
	try {
		const data = await getTodoDetail(Number(itemId));
		// 성공 시 TodoDetail 컨포넌트 렌더링
		return <TodoDetail initialTodoDetail={data} />;
	} catch {
		return <Error />;
	}
}

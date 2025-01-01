// todo리스트 목록의 타입
type TodoListDetailType = {
	isCompleted: boolean;
	imageUrl: string | null;
	memo: string | null;
	name: string;
	tenantId: string;
	id: number;
};

// 투두리스트 중 항목 렌더링을 위한 타입
type TodoListType = Pick<TodoListDetailType, "name" | "id" | "isCompleted">;

type TodoDetailType = Omit<TodoListDetailType, "tenantId">;
export type { TodoListType, TodoListDetailType, TodoDetailType };

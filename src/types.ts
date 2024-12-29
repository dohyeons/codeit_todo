type TodoListDetailType = {
	isCompleted: boolean;
	imageUrl: string | null;
	memo: string | null;
	name: string;
	tenantId: string;
	id: number;
};

type TodoListType = Pick<TodoListDetailType, "name" | "id" | "isCompleted">;

export type { TodoListType, TodoListDetailType };

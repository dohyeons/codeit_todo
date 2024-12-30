import CheckBox from "@/components/List/TodoList/CheckBox";
import { TodoListDetailType } from "@/types";

export default function DetailHeader({
	todoDetail,
	refetchTodoDetail,
}: {
	todoDetail: TodoListDetailType;
	refetchTodoDetail: () => void;
}) {
	return (
		<div
			className={`w-full h-[50px] rounded ${
				todoDetail.isCompleted ? "bg-completed-light" : "bg-white"
			}  flex items-center justify-center pl-[12px] gap-[16px] border-2 border-primary-900 mb-[17px] tablet:mb-[24px] desktop:mb-[29px]`}
		>
			<CheckBox
				isDone={todoDetail.isCompleted ? true : false}
				id={todoDetail.id}
				refetchTodos={refetchTodoDetail}
			/>
			<h1 className="truncate underline decoration-1 underline-offset-2 text-large">
				{todoDetail.name}
			</h1>
		</div>
	);
}

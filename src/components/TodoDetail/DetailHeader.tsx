import CheckBox from "@/components/List/TodoList/CheckBox";
import { TodoListDetailType } from "@/types";

export default function DetailHeader({
	todoDetail,
	refetchTodoDetail,
	handleMemoNameChange,
	onMemoNameClick,
	isMemoNameChanging,
}: {
	todoDetail: TodoListDetailType;
	refetchTodoDetail: () => void;
	handleMemoNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onMemoNameClick: () => void;
	isMemoNameChanging: boolean;
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
			{isMemoNameChanging ? (
				<input
					className="text-large bg-transparent underline decoration-1 underline-offset-2"
					type="text"
					value={todoDetail.name}
					onChange={handleMemoNameChange}
					onBlur={onMemoNameClick}
				/>
			) : (
				<h1
					className="truncate underline decoration-1 underline-offset-2 text-large cursor-pointer"
					onClick={onMemoNameClick}
				>
					{todoDetail.name}
				</h1>
			)}
		</div>
	);
}

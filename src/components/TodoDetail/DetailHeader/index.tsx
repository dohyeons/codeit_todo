import CheckBox from "@/components/List/TodoList/CheckBox";
import DetailInput from "@/components/TodoDetail/DetailHeader/DetailInput";
import { TodoListDetailType } from "@/types";

export default function DetailHeader({
	todoDetail,
	changeCompleteStatus,
	handleMemoNameChange,
}: {
	todoDetail: Omit<TodoListDetailType, "tenantId">;
	changeCompleteStatus: () => void;
	handleMemoNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
				customFunction={changeCompleteStatus}
				activeToggle={false}
			/>
			<DetailInput
				name={todoDetail.name}
				handleMemoNameChange={handleMemoNameChange}
			/>
		</div>
	);
}

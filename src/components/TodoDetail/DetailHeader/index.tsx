import CheckBox from "@/components/List/TodoList/CheckBox";
import DetailInput from "@/components/TodoDetail/DetailHeader/DetailInput";
import { TodoDetailType } from "@/types";

// 상세 정보 중 name및 완료 상태인지를 렌더링하는 컴포넌트
export default function DetailHeader({
	todoDetail,
	changeCompleteStatus,
	handleMemoNameChange,
}: {
	todoDetail: TodoDetailType; // 상세 정보
	changeCompleteStatus: () => void; // 상태 중 isCompleted를 바꾸는 함수
	handleMemoNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 상태 중 name을 바꾸는 함수
}) {
	return (
		<div
			className={`w-full h-[50px] rounded ${
				todoDetail.isCompleted ? "bg-completed-light" : "bg-white"
			}  flex items-center justify-center pl-[12px] gap-[16px] border-2 border-primary-900 mb-[17px] tablet:mb-[24px] desktop:mb-[29px]`}
		>
			{/* 항목의 완료상태를 렌더링하고 바꾸기 위한 컴포넌트 */}
			<CheckBox
				isDone={todoDetail.isCompleted ? true : false}
				id={todoDetail.id}
				customFunction={changeCompleteStatus}
				activeToggle={false} // 토글을 눌렀을 때 바로 완료 상태 변경 요청을 보내지 않음
			/>
			{/* 상세 정보의 name을 렌더링하고 변경하는 컴포넌트 */}
			<DetailInput
				name={todoDetail.name}
				handleMemoNameChange={handleMemoNameChange}
			/>
		</div>
	);
}

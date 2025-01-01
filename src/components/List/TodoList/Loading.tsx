// todolist를 로딩중일 때 렌더링하는 컴포넌트
export default function Loading() {
	return (
		<div className="w-full mt-[16px]">
			<span className="text-primary-400 text-small-semi">
				데이터를 불러오고 있습니다.
			</span>
		</div>
	);
}

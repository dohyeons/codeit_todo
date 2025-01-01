"use client";

import InputForm from "@/components/InputForm";
import useTodos from "@/hooks/useTodos";
import TodoSection from "@/components/List/TodoList/TodoSection";

// 할 일 목록을 렌더링하는 컴포넌트
export default function List() {
	// todolist를 페칭하는 훅
	const { todos, isLoading, fetchTodos, ref, ref2, isError } = useTodos();

	// 할 일 목록
	const incompleteTodos = todos?.filter(todo => !todo.isCompleted);
	// 완료 목록
	const completedTodos = todos?.filter(todo => todo.isCompleted);

	return (
		<>
			{/* 새 todo를 만드는 컴포넌트 */}
			<InputForm onAdd={fetchTodos} />
			<div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px]">
				{/* 할 일 목록을 렌더링하는 컴포넌트 */}
				<TodoSection
					status="todo"
					todos={incompleteTodos}
					isError={isError}
					isLoading={isLoading}
					fetchTodos={fetchTodos}
					ref={ref}
				/>
				{/* 완료 목록을 렌더링하는 컴포넌트 */}
				<TodoSection
					status="done"
					todos={completedTodos}
					isError={isError}
					isLoading={isLoading}
					fetchTodos={fetchTodos}
					ref={ref2}
				/>
			</div>
		</>
	);
}

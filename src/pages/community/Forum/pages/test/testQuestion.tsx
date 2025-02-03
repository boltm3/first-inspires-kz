import React from 'react';
import useQuestions from '../../Api/getQuestions'; // 引入自定义的 Hook

const QuestionsList: React.FC = () => {
  const { questions, loading, error, isValidating } = useQuestions(); // 使用自定义 Hook 获取数据

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions?.map((question) => (
          <li key={question.question_id}>
            <h2>{question.title}</h2>
            <p>{question.content}</p>
            <small>Posted by User {question.user_id} on {new Date(question.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
      {isValidating && <div>Refreshing data...</div>}  {/* 显示正在重新验证数据的提示 */}
    </div>
  );
};

export default QuestionsList;

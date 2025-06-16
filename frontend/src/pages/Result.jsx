import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const calculateResults = (questions, attempts) => {
  const results = { totalMarks: 0, subjectWise: {} };
  const subjects = [...new Set(questions.map((q) => q.subject))];

  subjects.forEach((subject) => {
    results.subjectWise[subject] = { marksObtained: 0, totalMarks: 0 };
  });

  questions.forEach((question) => {
    const attempt = attempts[question.id];
    const subject = question.subject;

    results.subjectWise[subject].totalMarks += question.marks;
    if (attempt?.selectedAnswer === question.correctAnswer) {
      results.totalMarks += question.marks;
      results.subjectWise[subject].marksObtained += question.marks;
    }
  });

  return results;
};

const ResultPage = ({ testData }) => {
  const navigate = useNavigate();
  const { questions, attempts, testMetadata } = testData || {};

  if (!testData) {
    return <div>No test data available.</div>;
  }

  const results = calculateResults(questions, attempts);
  const totalMarks = testMetadata.totalMarks;
  const overallPercentage = ((results.totalMarks / totalMarks) * 100).toFixed(
    2
  );

  const subjectChartData = Object.keys(results.subjectWise).map((subject) => ({
    name: subject,
    marksObtained: results.subjectWise[subject].marksObtained,
    totalMarks: results.subjectWise[subject].totalMarks,
  }));

  return (
    <div className="font-sans bg-[#F5F3F0] min-h-screen text-gray-900 relative">
  
      <section className="py-8 bg-white shadow-md ">
        <div className="container sm:mx-auto  px-4 text-center">
          <h2 className="text-3xl font-bold text-[#B8772E]">Your Score</h2>
          <p className="text-5xl font-bold text-blue-600 my-2">
            {results.totalMarks}/{totalMarks}
          </p>
          <p className="text-lg text-gray-600">({overallPercentage}%)</p>
        </div>
       
      </section>
      <div className="text-center mt-8 absolute -top-8 right-0 sm:top-2 sm:right-2">
          <button
            onClick={() => navigate("/user/dashboard")}
            className="bg-[#B8772E] text-white p-2 sm:py-3 sm:px-6 rounded-lg hover:bg-[#A56826] transition"
          >
            Back to Dashboard
          </button>
        </div>
   
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B8772E] mb-12">
            Subject-wise Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <BarChart width={400} height={300} data={subjectChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="marksObtained"
                fill="#8884d8"
                name="Marks Obtained"
              />
              <Bar dataKey="totalMarks" fill="#82ca9d" name="Total Marks" />
            </BarChart>

            
            <PieChart width={400} height={300}>
              <Pie
                data={subjectChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="marksObtained"
              >
                {subjectChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B8772E] mb-12">
            Question-wise Analysis
          </h2>
          <div className="space-y-4">
            {questions.map((question) => {
              const attempt = attempts[question.id];
              const isCorrect =
                attempt?.selectedAnswer === question.correctAnswer;
              const status = !attempt
                ? "Not Attempted"
                : isCorrect
                ? "Correct"
                : "Incorrect";

              return (
                <div
                  key={question.id}
                  className={`p-4 rounded-lg ${
                    status === "Correct"
                      ? "bg-green-100 text-green-800"
                      : status === "Incorrect"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="font-medium">{question.text}</p>
                  <p>
                    Your Answer:{" "}
                    {attempt
                      ? question.options[attempt.selectedAnswer]
                      : "Not Attempted"}
                  </p>
                  <p>
                    Correct Answer: {question.options[question.correctAnswer]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

   
      <footer className="p-4 text-center bg-white mt-6 shadow-md">
        <p className="text-sm text-gray-500">
          © 2025 NSS IIT Roorkee - JEE/NEET Test Platform
        </p>
      </footer>
    </div>
  );
};

export default ResultPage;

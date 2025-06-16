import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Trash } from "lucide-react";

export default function AdminPanel() {
  const [tests, setTests] = useState([]);
  const [newTest, setNewTest] = useState({ title: "", subject: "", duration: "", date: "" });
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    options: ["", "", "", ""],
    correctAnswer: 0,
    subject: "",
    marks: 0,
  });

  const handleAddQuestion = () => {
    if (!newQuestion.text || newQuestion.options.some((opt) => !opt)) return;
    setQuestions([...questions, { ...newQuestion, id: Date.now() }]);
    setNewQuestion({ text: "", options: ["", "", "", ""], correctAnswer: 0, subject: "", marks: 0 });
  };

  const handleSubmitTest = () => {
    if (!newTest.title || !newTest.subject || !newTest.duration || !newTest.date || questions.length === 0) return;
    setTests([...tests, { ...newTest, id: Date.now(), questions }]);
    setNewTest({ title: "", subject: "", duration: "", date: "" });
    setQuestions([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1 className="text-2xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Admin Panel
      </motion.h1>
      
      <div className="mb-6 p-4 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Create Test</h2>
        <input className="w-full p-2 border rounded" placeholder="Test Title" value={newTest.title} onChange={(e) => setNewTest({ ...newTest, title: e.target.value })} />
        <input className="w-full p-2 border rounded mt-2" placeholder="Subject" value={newTest.subject} onChange={(e) => setNewTest({ ...newTest, subject: e.target.value })} />
        <input className="w-full p-2 border rounded mt-2" placeholder="Duration" value={newTest.duration} onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })} />
        <input className="w-full p-2 border rounded mt-2" type="date" value={newTest.date} onChange={(e) => setNewTest({ ...newTest, date: e.target.value })} />
      </div>

      <div className="mb-6 p-4 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Add Questions</h2>
        <input className="w-full p-2 border rounded" placeholder="Question Text" value={newQuestion.text} onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })} />
        {newQuestion.options.map((option, index) => (
          <input key={index} className="w-full p-2 border rounded mt-2" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => {
            const opts = [...newQuestion.options];
            opts[index] = e.target.value;
            setNewQuestion({ ...newQuestion, options: opts });
          }} />
        ))}
        <input className="w-full p-2 border rounded mt-2" type="number" placeholder="Correct Answer Index" value={newQuestion.correctAnswer} onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: Number(e.target.value) })} />
        <input className="w-full p-2 border rounded mt-2" type="number" placeholder="Marks" value={newQuestion.marks} onChange={(e) => setNewQuestion({ ...newQuestion, marks: Number(e.target.value) })} />
        <button className="w-full mt-2 p-2 bg-green-500 text-white rounded flex items-center justify-center" onClick={handleAddQuestion}>
          <PlusCircle size={16} className="mr-2" /> Add Question
        </button>
      </div>
      
      <div className="mb-6 p-4 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Preview Test</h2>
        <p className="font-semibold">{newTest.title}</p>
        <p className="text-sm text-gray-500">{newTest.subject} - {newTest.duration} - {newTest.date}</p>
        <ul className="list-disc ml-6 mt-2">
          {questions.map((q, index) => (
            <li key={index} className="text-sm">{q.text}</li>
          ))}
        </ul>
        <button className="w-full mt-4 p-2 bg-blue-500 text-white rounded" onClick={handleSubmitTest}>Submit Test</button>
      </div>
    </div>
  );
}

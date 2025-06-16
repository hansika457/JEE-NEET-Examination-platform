import React from "react";
import TestInterface from "./pages/TestInterface";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import ResultPage from "./pages/Result";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import HomeLayout from "./components/dashboard/Laylout";
import Upcoming from "./pages/Upcoming";
import Bookmarks from "./pages/Bookmark";
import AdminPanel from "./pages/AdminPanel";
const App = () => {
  const resultData = {
    questions: [
      {
        id: '1',
        text: 'A particle moves in a straight line with constant acceleration. If its initial velocity is u and it travels a distance s in time t, then its final velocity v is given by:',
        options: [
          'v² = u² + 2as',
          'v = u + at',
          'v = s/t',
          'v = u + s/t'
        ],
        correctAnswer: 0,
        subject: 'physics',
        marks: 4
      },
      {
        id: '2',
        text: 'A particle moves in a straight line with constant acceleration. If its initial velocity is u and it travels a distance s in time t, then its final velocity v is given by:',
        options: [
          'v² = u² + 2as',
          'v = u + at',
          'v = s/t',
          'v = u + s/t'
        ],
        correctAnswer: 0,
        subject: 'physics',
        marks: 4
      },
      {
        id: '3',
        text: 'A particle moves in a straight line with constant acceleration. If its initial velocity is u and it travels a distance s in time t, then its final velocity v is given by:',
        options: [
          'v² = u² + 2as',
          'v = u + at',
          'v = s/t',
          'v = u + s/t'
        ],
        correctAnswer: 0,
        subject: 'physics',
        marks: 4
      },
      {
        id: '4',
        text: 'A particle moves in a straight line with constant acceleration. If its initial velocity is u and it travels a distance s in time t, then its final velocity v is given by:',
        options: [
          'v² = u² + 2as',
          'v = u + at',
          'v = s/t',
          'v = u + s/t'
        ],
        correctAnswer: 0,
        subject: 'physics',
        marks: 4
      },
      {
        id: '5',
        text: 'A particle moves in a straight line with constant acceleration. If its initial velocity is u and it travels a distance s in time t, then its final velocity v is given by:',
        options: [
          'v² = u² + 2as',
          'v = u + at',
          'v = s/t',
          'v = u + s/t'
        ],
        correctAnswer: 0,
        subject: 'physics',
        marks: 4
      },
      {
        id: '6',
        text: 'What is the pH of a 0.1M HCl solution?',
        options: [
          '1',
          '2',
          '7',
          '14'
        ],
        correctAnswer: 0,
        subject: 'chemistry',
        marks: 4
      },
      {
        id: '7',
        text: 'What is the pH of a 0.1M HCl solution?',
        options: [
          '1',
          '2',
          '7',
          '14'
        ],
        correctAnswer: 0,
        subject: 'chemistry',
        marks: 4
      },
      {
        id: '8',
        text: 'What is the pH of a 0.1M HCl solution?',
        options: [
          '1',
          '2',
          '7',
          '14'
        ],
        correctAnswer: 0,
        subject: 'chemistry',
        marks: 4
      },
      {
        id: '9',
        text: 'What is the pH of a 0.1M HCl solution?',
        options: [
          '1',
          '2',
          '7',
          '14'
        ],
        correctAnswer: 0,
        subject: 'chemistry',
        marks: 4
      },
      {
        id: '10',
        text: 'What is the pH of a 0.1M HCl solution?',
        options: [
          '1',
          '2',
          '7',
          '14'
        ],
        correctAnswer: 0,
        subject: 'chemistry',
        marks: 4
      },
      {
        id: '11',
        text: 'If f(x) = x² + 2x + 1, what is f\'(x)?',
        options: [
          '2x + 2',
          'x + 2',
          '2x',
          'x + 1'
        ],
        correctAnswer: 0,
        subject: 'mathematics',
        marks: 4
      },
      {
        id: '12',
        text: 'If f(x) = x² + 2x + 1, what is f\'(x)?',
        options: [
          '2x + 2',
          'x + 2',
          '2x',
          'x + 1'
        ],
        correctAnswer: 0,
        subject: 'mathematics',
        marks: 4
      },
      {
        id: '13',
        text: 'If f(x) = x² + 2x + 1, what is f\'(x)?',
        options: [
          '2x + 2',
          'x + 2',
          '2x',
          'x + 1'
        ],
        correctAnswer: 0,
        subject: 'mathematics',
        marks: 4
      },
      {
        id: '14',
        text: 'If f(x) = x² + 2x + 1, what is f\'(x)?',
        options: [
          '2x + 2',
          'x + 2',
          '2x',
          'x + 1'
        ],
        correctAnswer: 0,
        subject: 'mathematics',
        marks: 4
      }
    ],
    attempts: {
      1: {
        questionId: "1",
        selectedAnswer: 0,
        isBookmarked: false,
        status: "attempted",
        timeSpent: 120,
      },
      2: {
        questionId: "2",
        selectedAnswer: 1,
        isBookmarked: true,
        status: "marked-attempted",
        timeSpent: 60,
      },
      3: {
        questionId: "3",
        selectedAnswer: null,
        isBookmarked: false,
        status: "not-visited",
        timeSpent: 0,
      },
    },
    testMetadata: {
      totalMarks: 12,
      timeRemaining: 0,
    },
  };
  return (
    <div className="h-screen w-screen overflow-hidden overflow-y-scroll bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<HomeLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<History />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Route>

        <Route path="/auth/:mode" element={<AuthPage />} />
        <Route path="/test" element={<TestInterface />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/result" element={<ResultPage testData={resultData} />} />
      </Routes>
    </div>
  );
};

export default App;

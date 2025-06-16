import React, { useState, useEffect } from 'react';
import { Clock, BookmarkPlus, Flag, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockQuestions = [
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
];

const subjects = [
  { id: 'physics', name: 'Physics', color: 'blue' },
  { id: 'chemistry', name: 'Chemistry', color: 'green' },
  { id: 'mathematics', name: 'Mathematics', color: 'purple' }
];

const TestInterface = () => {
  const [testState, setTestState] = useState({
    currentQuestion: 0,
    timeRemaining: 10800, 
    attempts: {},
    currentSubject: 'physics',
    isSubmitModalOpen: false
  });
 const navigate = useNavigate()
  useEffect(() => {
    const timer = setInterval(() => {
      setTestState(prev => ({
        ...prev,
        timeRemaining: Math.max(0, prev.timeRemaining - 1)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer) => {
    const question = mockQuestions[testState.currentQuestion];
    setTestState(prev => ({
      ...prev,
      attempts: {
        ...prev.attempts,
        [question.id]: {
          ...prev.attempts[question.id],
          questionId: question.id,
          selectedAnswer: answer,
          status: prev.attempts[question.id]?.status === 'marked' ? 'marked-attempted' : 'attempted',
          timeSpent: 0
        }
      }
    }));
  };

  const toggleBookmark = (questionId) => {
    setTestState(prev => ({
      ...prev,
      attempts: {
        ...prev.attempts,
        [questionId]: {
          ...prev.attempts[questionId],
          questionId,
          isBookmarked: !prev.attempts[questionId]?.isBookmarked,
          status: prev.attempts[questionId]?.status || 'not-visited',
          selectedAnswer: prev.attempts[questionId]?.selectedAnswer || null,
          timeSpent: prev.attempts[questionId]?.timeSpent || 0
        }
      }
    }));
  };

  const toggleMarkForReview = (questionId) => {
    setTestState(prev => ({
      ...prev,
      attempts: {
        ...prev.attempts,
        [questionId]: {
          ...prev.attempts[questionId],
          questionId,
          status: prev.attempts[questionId]?.selectedAnswer !== undefined
            ? 'marked-attempted'
            : 'marked',
          selectedAnswer: prev.attempts[questionId]?.selectedAnswer || null,
          timeSpent: prev.attempts[questionId]?.timeSpent || 0
        }
      }
    }));
  };

  const getQuestionStatusColor = (idx) => {
    const question = mockQuestions[idx];
    const attempt = testState.attempts[question.id];

    if (testState.currentQuestion === idx) return 'bg-blue-600 text-white';
    if (!attempt) return 'bg-gray-100 text-gray-600';
    
    switch (attempt.status) {
      case 'attempted':
        return 'bg-green-600 text-white';
      case 'marked':
        return 'bg-yellow-600 text-white';
      case 'marked-attempted':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const switchSubject = (subject) => {
    const firstQuestionOfSubject = mockQuestions.findIndex(q => q.subject === subject);
    if (firstQuestionOfSubject !== -1) {
      setTestState(prev => ({
        ...prev,
        currentSubject: subject,
        currentQuestion: firstQuestionOfSubject
      }));
    }
  };

  const getSubjectQuestions = (subject) => {
    return mockQuestions.filter(q => q.subject === subject);
  };

  const getSubjectProgress = (subject) => {
    const questions = getSubjectQuestions(subject);
    const attempted = questions.filter(q => 
      testState.attempts[q.id]?.status === 'attempted' || 
      testState.attempts[q.id]?.status === 'marked-attempted'
    ).length;
    return `${attempted}/${questions.length}`;
  };

  const handleSubmit = () => {
    const totalQuestions = mockQuestions.length;
    const attemptedQuestions = Object.values(testState.attempts).filter(
      attempt => attempt.selectedAnswer !== null
    ).length;

    setTestState(prev => ({ ...prev, isSubmitModalOpen: true }));
  };

  const confirmSubmit = () => {
    // Here you would typically submit the test data to your backend
      navigate("/result")
    
    // You could redirect to a results page here
  };

  const currentQuestion = mockQuestions[testState.currentQuestion];

  return (
    <div className="h-full w-full bg-gray-50">
    
      <header className="bg-white shadow-sm  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className=" text-lg sm:text-2xl font-bold text-gray-900">Mock Test</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-red-600" />
                <span className="text-red-600 font-semibold">{formatTime(testState.timeRemaining)}</span>
              </div>
              <button
                onClick={handleSubmit}
                className="inline-flex items-center px-2 sm:px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                End & Submit
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
     
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex sm:space-x-8" aria-label="Subjects">
              {subjects.map(subject => (
                <button
                  key={subject.id}
                  onClick={() => switchSubject(subject.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${testState.currentSubject === subject.id
                      ? `border-${subject.color}-500 text-${subject.color}-600`
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="flex items-center sm:space-x-2">
                    <BookOpen className="h-5  sm:w-5" />
                    <span>{subject.name}</span>
                    <span className="ml-2 py-0.5 sm:px-2.5 text-xs rounded-full bg-gray-100">
                      {getSubjectProgress(subject.id)}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Question {testState.currentQuestion + 1}
                  </span>
                  <span className="text-sm text-gray-500">
                    {subjects.find(s => s.id === currentQuestion.subject)?.name}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleBookmark(currentQuestion.id)}
                    className={`p-2 rounded-lg ${
                      testState.attempts[currentQuestion.id]?.isBookmarked
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <BookmarkPlus className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => toggleMarkForReview(currentQuestion.id)}
                    className={`p-2 rounded-lg ${
                      testState.attempts[currentQuestion.id]?.status === 'marked' ||
                      testState.attempts[currentQuestion.id]?.status === 'marked-attempted'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Flag className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-lg text-gray-800 mb-8">{currentQuestion.text}</p>
              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left p-4 rounded-lg border ${
                      testState.attempts[currentQuestion.id]?.selectedAnswer === idx
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + idx)}.</span> {option}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setTestState(prev => ({ ...prev, currentQuestion: Math.max(0, prev.currentQuestion - 1) }))}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Previous
                </button>
                <button
                  onClick={() => setTestState(prev => ({ ...prev, currentQuestion: Math.min(mockQuestions.length - 1, prev.currentQuestion + 1) }))}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Next
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            </div>
          </div>

       
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Question Palette</h2>
              <div className="space-y-6">
                {subjects.map(subject => (
                  <div key={subject.id}>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">{subject.name}</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {getSubjectQuestions(subject.id).map((question, idx) => {
                        const globalIdx = mockQuestions.findIndex(q => q.id === question.id);
                        return (
                          <button
                            key={question.id}
                            onClick={() => setTestState(prev => ({ ...prev, currentQuestion: globalIdx }))}
                            className={`relative h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium ${getQuestionStatusColor(globalIdx)}`}
                          >
                            {globalIdx + 1}
                            {testState.attempts[question.id]?.isBookmarked && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </main>

    
      {testState.isSubmitModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Submit Test</h3>
            <p className="text-sm text-gray-500 mb-4">
              Are you sure you want to submit your test? This action cannot be undone.
            </p>
            <div className="mt-4 flex space-x-3">
              <button
                onClick={confirmSubmit}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Yes, submit test
              </button>
              <button
                onClick={() => setTestState(prev => ({ ...prev, isSubmitModalOpen: false }))}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestInterface;
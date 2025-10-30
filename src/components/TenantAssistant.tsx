import { useState } from 'react';

export default function TenantAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });

      const data = await response.json();
      setAnswer(data.response);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('Sorry, there was an error getting a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">NYC Tenant Rights Assistant</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about your tenant rights..."
        className="w-full p-3 border rounded mb-4"
        rows={4}
      />
      <button
        onClick={askQuestion}
        disabled={loading || !question.trim()}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:bg-gray-400"
      >
        {loading ? 'Getting Answer...' : 'Get Answer'}
      </button>
      {answer && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  );
}
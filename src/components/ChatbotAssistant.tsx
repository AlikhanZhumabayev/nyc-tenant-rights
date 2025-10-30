import { useState } from 'react';
import { MessageSquare, Send, X, Bot, User, HelpCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { findResponse } from '../lib/chatbot-knowledge';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface ChatbotAssistantProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ChatbotAssistant({ open, onOpenChange }: ChatbotAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I'm your NYC Tenant Rights Assistant. I can help you understand your rights, eviction processes, and connect you with resources. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    "My landlord locked me out",
    "I have no heat or hot water",
    "How do I file an HPD complaint?",
    "What is rent stabilization?",
    "I'm facing eviction",
    "My landlord is harassing me",
    "How do I get Section 8?",
    "Can I have roommates?",
    "My apartment has mold",
    "I need a free lawyer"
  ];

  const getBotResponse = (userMessage: string): string => {
    return findResponse(userMessage);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      sender: 'bot',
      text: getBotResponse(inputValue),
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
    
    // Scroll to bottom after messages update
    setTimeout(() => {
      const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }
    }, 100);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: question,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      sender: 'bot',
      text: getBotResponse(question),
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    
    // Scroll to bottom after messages update
    setTimeout(() => {
      const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[85vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-4 pb-3 border-b shrink-0">
          <DialogTitle className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-gray-900">Tenant Rights Assistant</div>
              <div className="text-sm text-gray-500">Powered by NYC tenant protection laws</div>
            </div>
          </DialogTitle>
          <DialogDescription className="sr-only">
            AI-powered chatbot to help you understand NYC tenant rights, eviction processes, and connect with legal resources
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="space-y-4 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="bg-blue-100 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 break-words ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap overflow-wrap-anywhere">{message.text}</div>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="bg-purple-100 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-4 w-4 text-purple-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Quick Questions */}
        <div className="px-4 py-3 border-t border-b bg-gray-50 shrink-0 max-h-32 overflow-y-auto">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <span className="text-xs text-gray-600">Quick Questions:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {quickQuestions.map((question, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-100 text-xs py-1 px-2"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </Badge>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t shrink-0">
          <div className="flex gap-2">
            <Input
              placeholder="Ask about your tenant rights..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shrink-0"
              disabled={!inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2 text-center space-y-1">
            <p className="text-xs text-gray-500">
              This chatbot provides general information. For legal advice, contact a lawyer.
            </p>
            <p className="text-xs text-gray-400">
              Powered by <a href="https://briefcasebrain.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">Briefcase AI</a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

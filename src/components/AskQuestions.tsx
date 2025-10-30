"use client"

import { useState } from "react"
import { Send, Bot, User, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"
import { Badge } from "./ui/badge"
interface Message {
  id: number
  sender: "user" | "bot"
  text: string
  timestamp: Date
}

export default function AskQuestions() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I'm your NYC Tenant Rights Assistant. I can help you understand your rights, eviction processes, and connect you with resources. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(false)

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
    "I need a free lawyer",
  ]

  const getBotResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      return data.response || 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('Error:', error);
      return 'Sorry, there was an error getting a response. Please try again.';
    }
  }

  const handleSend = async () => {
    if (!inputValue.trim() || loading) return

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setLoading(true)

    try {
      const botResponseText = await getBotResponse(userMessage.text)
      const botResponse: Message = {
        id: messages.length + 2,
        sender: "bot",
        text: botResponseText,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      console.error('Error getting bot response:', error)
      const errorResponse: Message = {
        id: messages.length + 2,
        sender: "bot",
        text: "Sorry, there was an error getting a response. Please try again.",
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setLoading(false)
    }

    // Scroll to bottom after messages update
    setTimeout(() => {
      const scrollArea = document.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight
      }
    }, 100)
  }

  const handleQuickQuestion = async (question: string) => {
    if (loading) return

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: question,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      const botResponseText = await getBotResponse(question)
      const botResponse: Message = {
        id: messages.length + 2,
        sender: "bot",
        text: botResponseText,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      console.error('Error getting bot response:', error)
      const errorResponse: Message = {
        id: messages.length + 2,
        sender: "bot",
        text: "Sorry, there was an error getting a response. Please try again.",
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setLoading(false)
    }

    // Scroll to bottom after messages update
    setTimeout(() => {
      const scrollArea = document.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight
      }
    }, 100)
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-900">Ask Questions</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Get instant answers to your tenant rights questions. Our assistant can help you understand your rights,
          eviction processes, and connect you with resources.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-gray-900">Tenant Rights Assistant</div>
              <CardDescription>Powered by NYC tenant protection laws</CardDescription>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Chat Messages */}
          <ScrollArea className="h-[400px] w-full rounded-lg border p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="bg-blue-100 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 break-words ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap overflow-wrap-anywhere">{message.text}</div>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <div className="bg-purple-100 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-4 w-4 text-purple-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Questions */}
          <div className="p-4 rounded-lg bg-gray-50 border">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
              <span className="text-sm text-gray-600">Quick Questions:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`text-xs py-1 px-2 ${
                    loading
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:bg-blue-100"
                  }`}
                  onClick={() => !loading && handleQuickQuestion(question)}
                >
                  {question}
                </Badge>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about your tenant rights..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shrink-0"
                disabled={!inputValue.trim() || loading}
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              This assistant provides general information. For legal advice, contact a lawyer.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

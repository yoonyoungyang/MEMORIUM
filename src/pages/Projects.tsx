import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const initialChats = [
  {
    id: 0,
    text: 'Hello!',
    user: 'computer',
  },
  {
    id: 1,
    text: 'Hi!',
    user: 'user',
  },
  {
    id: 2,
    text: 'How are you?',
    user: 'computer',
  },
]

const Projects: React.FC = () => {
  const [chatText, setChatText] = useState('')
  const [chats, setChats] = useState(initialChats)
  const [loading, setLoading] = useState(false)

  const sendButton = () => {
    if (!chatText) return

    const newChats = [
      ...chats,
      { id: chats.length, text: chatText, user: 'user' },
    ]
    setChats(newChats)
    setChatText('')
    setLoading(true)

    // Simulate computer response after a delay
    setTimeout(() => {
      const computerResponse = {
        id: newChats.length,
        text: 'I am doing great!',
        user: 'computer',
      }
      setChats([...newChats, computerResponse])
      setLoading(false)
    }, 2000)
  }

  return (
    <>
      <Header />
      <div className="pt-20">
        {' '}
        {/* Add padding-top to avoid content overlap */}
        <section
          id="services"
          className="w-full h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/img/hero-bg.jpeg')" }}
        >
          <div className="container mx-auto">
            <div className="chatbot-container bg-gray-800 bg-opacity-30 shadow-md overflow-hidden flex flex-col mx-auto w-full md:w-3/4 h-[750px]">
              <div className="chatbot-header text-white text-center py-4 text-xl font-bold">
                Chat with AI!
              </div>
              <div className="chatbox flex flex-col justify-between h-full">
                <div
                  className="chat-content flex-grow p-4 overflow-y-auto"
                  id="chat-content"
                >
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`mb-4 p-4 rounded-lg max-w-75 relative ${
                        chat.user === 'computer'
                          ? 'bg-gray-300 text-black self-start ml-4'
                          : 'bg-blue-600 text-white self-end mr-4'
                      }`}
                      style={{
                        borderRadius:
                          chat.user === 'computer'
                            ? '15px 15px 15px 0'
                            : '15px 15px 0 15px',
                      }}
                    >
                      {chat.text}
                      {chat.user === 'computer' ? (
                        <div className="absolute top-0 left-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-gray-300 border-b-[10px] border-b-transparent"></div>
                      ) : (
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-blue-600 border-b-[10px] border-b-transparent"></div>
                      )}
                    </div>
                  ))}
                  {loading && (
                    <div className="self-start bg-gray-300 text-black p-4 rounded-lg max-w-75 relative ml-4">
                      Computer is typing...
                      <div className="absolute top-0 left-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-gray-300 border-b-[10px] border-b-transparent"></div>
                    </div>
                  )}
                </div>
                <div className="typingbox flex p-4 bg-gray-100 border-t border-gray-300">
                  <input
                    className="typing-input flex-grow p-2 border border-gray-300 rounded-lg mr-2"
                    id="inputbox"
                    value={chatText}
                    onChange={(e) => setChatText(e.target.value)}
                    type="text"
                    placeholder="Enter your message"
                    disabled={loading}
                  />
                  <button
                    className="send-button bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    id="addbutton"
                    onClick={sendButton}
                    disabled={loading}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            {loading && (
              <div
                id="loading"
                className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 text-gray-800 text-2xl"
              >
                Loading...
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Projects

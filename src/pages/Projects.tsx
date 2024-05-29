import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'

const initialChats = [
  {
    content:
      '안녕하세요! 저는 당신만의 특별한 향수를 만들어드리는 Memorium의 인공지능 챗봇 입니다.!',
    role: 'assistant',
  },
  {
    content:
      '간단한 대화를 통해 당신의 이야기를 듣고, 그에 맞는 향을 찾아드리겠습니다. 당신에게 어울리는 향수와 함께 추억을 담아 가세요!',
    role: 'assistant',
  },
  {
    content: '그럼 지금부터 시작해 볼까요? 추구하는 이미지가 무엇인가요?',
    role: 'assistant',
  },
]

const Projects: React.FC = () => {
  const [chatText, setChatText] = useState('')
  const [chats, setChats] = useState(initialChats)
  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)

  const sendButton = () => {
    if (!chatText) return

    const newChats = [...chats, { content: chatText, role: 'user' }]

    axios({
      method: 'post',
      url: `http://localhost:4000/ai/chats`,
      data: { chats: newChats },
    }).then(function (response) {
      if (response.data.finish === true) {
        setChats([
          ...newChats,
          { content: '대화가 끝났습니다.', role: 'assistant' },
        ])
        setFinished(true)
      } else {
        setChats([
          ...newChats,
          { content: response.data.nextQuestion, role: 'assistant' },
        ])
      }
    })

    setChats(newChats)
    setChatText('')
    // setLoading(true)
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
                  {chats.map((chat, idx) => (
                    <div
                      key={chat.content + idx}
                      className={`mb-4 p-4 rounded-lg max-w-75 relative ${
                        chat.role === 'assistant'
                          ? 'bg-gray-300 text-black self-start ml-4'
                          : 'bg-blue-600 text-white self-end mr-4'
                      }`}
                      style={{
                        borderRadius:
                          chat.role === 'assistant'
                            ? '15px 15px 15px 0'
                            : '15px 15px 0 15px',
                      }}
                    >
                      {chat.content}
                      {chat.role === 'assistant' ? (
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
                    onKeyDown={(e) => e.key === 'Enter' && sendButton()}
                    disabled={loading}
                  >
                    Send
                  </button>
                </div>
              </div>
              {finished === true ? (
                <button title="다음 페이지 이동 버튼">다음 페이지 버튼</button>
              ) : null}
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

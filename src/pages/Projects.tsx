import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Projects: React.FC = () => (
  <>
    <Header />
    <div className="pt-20">
      {" "}
      {/* Add padding-top to avoid content overlap */}
      <section id="services" className="services py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="section-title text-center pb-8">
            <h2 className="text-sm font-bold bg-pink-100 text-pink-600 px-4 py-1 inline-block rounded-full">
              MAKE SCENT
            </h2>
            <h3 className="text-4xl font-bold mt-4">
              인공지능과 대화를 나눠보세요!
            </h3>
          </div>
          <div className="chatbot-container bg-white rounded-lg shadow-md overflow-hidden flex flex-col mx-auto w-full md:w-3/4 h-[600px]">
            <div className="chatbot-header bg-blue-600 text-white text-center py-4 text-xl font-bold">
              Chat with Us!
            </div>
            <div className="chatbox flex flex-col justify-between h-full">
              <div
                className="chat-content flex-grow p-4 overflow-y-auto"
                id="chat-content"
              ></div>
              <div className="typingbox flex p-4 bg-gray-100 border-t border-gray-300">
                <input
                  className="typing-input flex-grow p-2 border border-gray-300 rounded-lg mr-2"
                  id="inputbox"
                  type="text"
                  placeholder="Enter your message"
                />
                <button
                  className="send-button bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  id="addbutton"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div
            id="loading"
            className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 text-gray-800 text-2xl invisible"
          >
            loading...
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
)

export default Projects

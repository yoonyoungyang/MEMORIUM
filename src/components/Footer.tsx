import React from "react"

const Footer: React.FC = () => (
  <footer id="footer" className="bg-gray-200 text-gray-800 shadow-lg">
    <div className="footer-top py-10">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex justify-between">
          <div className="me-md-auto">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>SCENT_CAPSTONE1</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by Chaemin Sim, Yoonyoung Yang
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="#"
      className="back-to-top fixed right-4 bottom-4 bg-pink-600 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-pink-500 transition-opacity duration-400 invisible opacity-0"
    >
      <i className="bi bi-arrow-up-short text-3xl"></i>
    </a>
  </footer>
)

export default Footer

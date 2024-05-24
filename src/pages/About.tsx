import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const About: React.FC = () => (
  <>
    <Header />
    <div className="pt-20">
      {" "}
      {/* Add padding-top to avoid content overlap */}
      <section id="about" className="about py-20 bg-white">
        <div className="container mx-auto">
          <div className="section-title text-center pb-8">
            <h2 className="text-sm font-bold bg-pink-100 text-pink-600 px-4 py-1 inline-block rounded-full">
              About
            </h2>
            <h3 className="text-4xl font-bold mt-4">
              Learn More <span className="text-pink-600">About Us</span>
            </h3>
            <p className="mt-4 font-semibold">
              안녕하세요, 저희는 team. SCENT입니다.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex-1 text-lg">
              <p>
                저희는 향수 공방의 디지털화를 목표로, 인공지능이 관람자의 향
                취향을 파악한 후 주어져 있는 향료를 배합하여 하나의 향을
                제작하는 것입니다.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <i className="ri-check-double-line text-pink-600 text-xl mr-2"></i>
                  관람자들에게 잊지 못할 기억을 선물하는 것
                </li>
                <li className="flex items-center">
                  <i className="ri-check-double-line text-pink-600 text-xl mr-2"></i>
                  관람자 분들의 취향에 맞는 향수를 제작해드리는 것
                </li>
                <li className="flex items-center">
                  <i className="ri-check-double-line text-pink-600 text-xl mr-2"></i>
                  웹을 통해 관람자 분들과 대화하는 것
                </li>
              </ul>
            </div>
            <div className="flex-1 text-lg">
              <p>
                저희는 캡스톤 1을 하면서 '우린 아직 관심사나 진로를 확실히
                정하지 못했으니 할 수 있는 한 여러 기술을 사용해보자'라는
                마음으로 시작했고 정말 다양한 기술을 사용했습니다.
              </p>
              <a
                href="/projects"
                className="btn-learn-more inline-block bg-pink-600 text-white py-2 px-8 rounded-full mt-4 hover:bg-pink-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
)

export default About

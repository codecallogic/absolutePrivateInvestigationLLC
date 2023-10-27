import { useState, useEffect } from 'react'
import SVG from '../files/svg'
import { PUBLIC_FILES } from '../config'

//// COMPONENTS
import DesktopNav from '../components/client/navigation'
import Carousel from '../components/client/carousel'
import Footer from '../components/client/footer'
import Scene from '../components/client/scene'

const Home = ({}) => {
  
  return (
    <>
    <div className="home">
      <DesktopNav />
      <Scene />
      
      <div className="home-section-1 wrapper" style={{backgroundImage: `url('/media/home/absurdbulbs.jpeg')`}}>
        <div className="home-section-1-cover" style={{backgroundImage: `url('./media/home/city-welcome-backdrop.png')`}}></div>
        <div className="home-section-1-content">
          <h1 className="home-section-1-title">Welcome</h1>
          <p>Welcome to Absolute Private Investigations LLC, a veteran-owned private investigation agency dedicated to upholding the values of integrity, honesty and accountability. For over two decades, API has conducted thousands of investigations servicing the legal and insurance industries. Since our inception in 1999, we have grown from humble beginnings to one of the most trusted names in the industry. API is currently licensed, insured and bonded in New York, New Jersey, North Carolina, South Carolina and Florida. With a vast network of highly trained investigators in these States, we are able to handle your claim with precision and expertise. </p>
        </div>
      </div>

      <div className="home-section-2 wrapper">
        <div className="home-section-2-cover" style={{backgroundImage: `url('/media/home/sectiontwo.png')`}}></div>
        <div className="home-section-2-content">
          <h1 className="home-section-2-title">Research Thrust Areas</h1>
          <p>CATSUS involves 22 faculty members from six interdisciplinary departments at Cal State LA who lead efforts in 4 research thrust areas. It is expected to provide research training to more than 200 students at Cal State LA over its funding period. Several projects address issues of energy and water sustainability in urban areas. CATSUS provides funding for faculty and student fellows to develop novel and transformative research related to energy systems and management in buildings, advanced materials for energy and water applications, and resilience of urban water bodies, to attain urban sustainability.</p>
          <div className="home-section-2-content-items">
            <div 
              className="home-section-2-content-items-item"
              role="button"
              // onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
            >
              <div className="home-section-2-content-items-item-box">
                <div>Consistent Communication</div>
                <span>We believe communication with our clients is paramount and ensures you will have piece of mind that your assignment is in the best hands.</span>
              </div>
            </div>
            <div 
              className="home-section-2-content-items-item"
              role="button"
              // onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
            >
              <div className="home-section-2-content-items-item-box">
                <div>A Personalized Approach</div>
                <span>We recognize that every case is unique, with its own complexities and sensitivities. That’s why we take a personalized approach, tailoring our investigative strategies to meet your specific needs and objectives.</span>
              </div>
            </div>
            <div 
              className="home-section-2-content-items-item"
              role="button"
              // onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
            >
              <div className="home-section-2-content-items-item-box">
                <div>Thorough Reporting </div>
                <span>When you choose API, you can expect surveillance reports that are not only accurate and detailed but also presented in a manner that is clear, concise and easy to read.</span>
              </div>
            </div>
            <div 
              className="home-section-2-content-items-item"
              role="button"
              // onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
            >
              <div className="home-section-2-content-items-item-box">
                <div>Credible Witnesses</div>
                <span>API is always prepared and we ensure that our investigators present themselves as professional and credible witnesses.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section-3 wrapper">
        <div className="home-section-3-cover" style={{backgroundImage: `url('/media/home/sectionthree.png')`}}></div>
        <div className="home-section-3-contents">
          <h1 className="home-section-3-title">Surveillance</h1>
          <p>At Absolute Private Investigations, we specialize in providing top-notch surveillance services to meet the diverse needs of our clients. Our team of highly skilled investigators are adept at obtaining video footage in a vast array of situations. API has obtained favorable footage in all possible environments such as cities, rural areas and the suburbs. In addition our investigators are adept at obtaining prolonged covert video in all settings. API has obtained covert video in gyms, supermarkets, construction sites, underground subway stations, churches, casinos and more. At our company, we prioritize providing comprehensive on-the-job training for our surveillance investigators. We understand that practical experience is invaluable in delving the necessary skills and expertise required for effective surveillance operations. Through continuous feedback and evaluation, we ensure that our investigators receive the guidance they need to refine their skills and build confidence in their abilities. Our hiring process is highly selective and our employee retention record is immaculate, well above the industry norm. Not only do we ensure our investigators are highly trained and can perform at an elite level, our employees stay with our company due to our professional, ethical and fair business practices. We welcome the opportunity to discuss what Absolute Private Investigations can do for you and we will be more than happy to demonstrate our abilities to you with the assignment of an initial case.</p>
        </div>
      </div>

      <div className="home-section-3 wrapper">
        <div className="home-section-3-cover" style={{backgroundImage: `url('/media/home/sectionfour.png')`}}></div>
        <div className="home-section-3-contents">
          <h1 className="home-section-3-title">Tactical Trace</h1>
          <p>Our TacticalTrace background and social media search provides an in depth report detailing the subject’s background and digital footprint. Rather than just scratching the surface, our TacticalTrace dives deeper into located records and ensures that you are provided with all of the information available regarding your assignment.</p>
        </div>
      </div>

      <div className="home-section-3 wrapper">
        <div className="home-section-3-cover" style={{backgroundImage: `url('/media/home/sectionfive.png')`}}></div>
        <div className="home-section-3-contents">
          <h1 className="home-section-3-title">Liability Investigations</h1>
          <p>At Absolute Private Investigations we offer exceptional liability investigation services to meet the diverse needs of our clients. Our services include statements, witness locates and insured locates. Whether you are dealing with insurance claims, workplace accidents or personal injury cases or experienced investigators possess the knowledge and expertise to uncover crucial evidence and assist in determining liability. API uses various databases and search tools such as vehicle sighting searches to locate and make contact with witnesses and insured parties. Lost contact with your insured? Not a problem, you can trust that our company will be persistent and creative when finding our subject.</p>
        </div>
      </div>

      <div className="home-section-3 wrapper">
        <div className="home-section-3-cover" style={{backgroundImage: `url('/media/home/sectionsix.png')`}}></div>
        <div className="home-section-3-contents">
          <h1 className="home-section-3-title">Process Serving</h1>
          <p>At our company, we specialize in providing exceptional process servicing to assist individuals, businesses, and legal professionals in their legal proceedings. Our dedicated team understands the critical importance of timely and accurate delivery of subpoenas. We have developed a streamlined process that ensures efficient service of subpoenas while maintaining strict adherence to legal protocols and privacy regulations. Our experienced process servers are well-versed in navigating complex legal environments and locating hard-to-find individuals. With a commitment to professionalism and attention to detail, we prioritize accuracy and reliability in every step of the process. From tracking and documenting the delivery to providing comprehensive proof of service, our goal is to facilitate the legal process and support the smooth progress of your case. When it comes to subpoena servicing, you can trust our company to handle the task with efficiency, confidentiality, and the highest level of professionalism.</p>
        </div>
      </div>


      {/* <div className="home-section-4 wrapper-3">
        <div className="home-section-4-contents">
          <h1 className="home-section-4-title">Announcements</h1>
          <Carousel news={news} setNews={setNews}></Carousel>
          <div className="home-section-4-button-container">
            <div className="home-section-4-button" onClick={() => window.location = '/news'}>
              <span>See All Announcements</span>
              <SVG svg={'chevron-right'}></SVG>
            </div>
          </div>
        </div>
      </div> */}

      <div className="home-section-5 wrapper">
        <div className="home-section-5-cover" style={{backgroundImage: `url('/media/home/partners.png')`}}></div>
        <div className="home-section-5-contents">
          <h1 className="home-section-5-title">Partners</h1>
          <div className="home-section-5-items">
              <div className="home-section-5-items-item">
                <img src="/media/home/partnerone.png" alt="Lancer"/>
              </div>
              <div className="home-section-5-items-item">
                <img src="/media/home/partnertwo.jpg" alt="Travelers" />
              </div>
              <div className="home-section-5-items-item">
                <img src="/media/home/partner2.png" alt="National Clain Services" />
              </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
    </>
  )
}

export default Home


const Footer = ({}) => {
  
  return (
    <div className="footer">
      <div className="footer-cover" style={{backgroundImage: `url('/media/home/footertwo.png')`}}></div>
      <div className="footer-contents wrapper">
        <h1 className="footer-title">Contact</h1>
        <div className="footer-columns">
          <div className="footer-columns-column">
            <strong>Location</strong>
            <span>P.O. Box 300</span>

            <span>Port Jefferson Station</span>
            <span>New York, 11776</span>
            <strong>Phone</strong>
            <span>(631) 474-1095</span>
            <strong>Email</strong>
            <span>info@absolutepi1.com</span>
          </div>
          <div className="footer-columns-column">
            <strong>Menu</strong>
            <a href="/research" >Research</a>
            <a href="/resources" >Resources</a>
            <a href="/about" >About</a>
            {/* <a href="/apply" >Apply</a> */}
            <a href="/news" >Announcements</a>
          </div>
          <div className="footer-columns-column">
            <span>&#169; Copyright 2022. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import "./workcard.css";

export default function WorkCard() {
  return (
    <div className="work-card">
      <div className="container-1">
        <div className="work-card-container">
          <img
            src="/webdevelopment.jpg"
            alt="no-image"
            className="webdevelopment-image"
          />
          <div className="work-card-content-container">
            <h3 className="work-card-heading">Webdevelopment and design</h3>
            <p>
              we craft digital experiences that captivate, convert, and inspire.
              From stunning visuals to seamless functionality, we blend
              creativity with technology to deliver websites that not only look
              amazing but perform even better
            </p>
            <button className="work-card-btn">Learn More</button>
          </div>
        </div>
        <div className="work-card-container">
          <img src="/content-2.jpg" alt="no-image" className="content-image" />
          <div className="work-card-content-container">
            <h3 className="work-card-heading">
              Content Creation and Copywriting
            </h3>
            <p>
              our content creation and copywriting services are designed to give
              your brand a voice that resonates. Whether it's punchy headlines,
              persuasive product descriptions, or engaging blog posts, we turn
              ideas into words that connect, engage, and drive conversions.
            </p>
            <button className="work-card-btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className=" container-2">
        <div className="work-card-container">
          <img src="/ad.jpg" alt="no-image" className="ad-image" />
          <div className="work-card-content-container">
            <h3 className="work-card-heading">Ad Campeign Creation</h3>
            <p>
              we create laser-focused ad campaigns that deliver maximum ROI.
              From creative concepts to targeted strategies, we combine data and
              innovation to craft ads that capture attention, spark engagement,
              and convert leads into loyal customers.{" "}
            </p>
            <button className="work-card-btn">Learn More</button>
          </div>
        </div>

        <div className="work-card-container">
          <img
            src="/social-media-1.jpg"
            alt="no-image"
            className="socialmedia-image"
          />
          <div className="work-card-content-container">
            <h3 className="work-card-heading">Social Media Management</h3>
            <p>
              we turn social media platforms into powerful tools for engagement,
              growth, and brand loyalty. From crafting captivating content to
              managing your online community, we create social strategies that
              get your brand noticed and keep your audience talking.{" "}
            </p>
            <button className="work-card-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./home.css";
import RecentPosts from "./home/recentPosts";
export default function Home() {
  return (
    <>
      <div className='container-header'>
        <div className='header'>
          <div className='header-grid'>
            <div>
              <div
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                }}
              >
                <div>Hi, I am Galih, </div>
                <div>Backend Developer</div>
              </div>
              <div
                style={{
                  textAlign: "justify",
                  marginTop: 40,
                  paddingRight: 40,
                }}
              >
                I am a professional <strong>back end developer</strong> who
                thrives on challenges. I have a strong desire to expand my
                knowledge, always eager to explore new technologies. I am
                interested in and have experience in various
                industries/businesses, including{" "}
                <strong>
                  marketplace, financial, AI, information technology and others.
                </strong>
              </div>
            </div>
            <div className='photo-container'></div>
          </div>
        </div>
      </div>
      <RecentPosts />
    </>
  );
}

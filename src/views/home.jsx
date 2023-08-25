import { Helmet } from "react-helmet";
import "./home.css";
import RecentPosts from "./home/recentPosts";
import Profile from "./Profile";
import ToDoList from "./exercise-m-6/ToDoList";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Galih Setyawan</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <div className='container-header'>
        <div className='header'>
          <div className='header-grid'>
            <div className='info-container'>
              <div
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                }}
              >
                <div className='name'>Hi, I am Galih, </div>
                <div className='job'>Backend Developer</div>
              </div>
              <div className='description'>
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

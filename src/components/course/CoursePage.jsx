import { useState, useEffect } from 'react';
import { Container, Ratio, Row, Col } from 'react-bootstrap';

import { getDatabase, ref, child, get } from "firebase/database";

import Post from './Post';
import './CoursePage.css';

function CoursePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "posts/")).then((snapshot) => {
      const data = snapshot.val();
      const postsArray = data ? Object.values(data) : [];
      console.log("SETTING POSTS TO: " + postsArray);
      setPosts(postsArray);
    });
  }, []);

  return (
    <Container fluid className="d-flex flex-column align-items-center p-5">
      <h1 className="page-title">Introducing Gradient</h1>
      <h2 className="page-subtitle">Group 44: Aryan Kalia | Dhruv Upadhyay | Mohamed Goha | Saksham Ahuja</h2>
      {/* <Ratio aspectRatio="16x9" style={{ maxWidth: '90%' }}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Ratio> */}

      {/* <div className="course-page-divider"></div> */}

      <Row style={{ width: '90%' }}>
        <Col sm={12} lg={6} className="p-3">
          <h2>What is Gradient?</h2>
          <div className="small-divider"></div>
          <p>
            We're building a new manufacturing method to build medical casts faster and make them more comfortable.
          </p>
          <p>
            Conventional casts are unhygienic, and uncomfortable - often, moisture and sweat can get trapped against the skin when wearing these casts, causing skin irritation and infection.
            Under Canada's already-strained medical system, dealing with complications from casts can be frustrating for both the recovering user and the healthcare provider.
          </p>
          <p>
            Using dynamic thermoforming technology, we're building a cast that's breathable, washable, and even removable.
          </p>
        </Col>
        <Col sm={12} lg={6} className="p-3">
          <h2>What is this site?</h2>
          <div className="small-divider"></div>
          <p>This is a blog for the MTE 482 course that shows the progress our group has made over the past few months in building Gradient.</p>
          <strong><p>This site is intended for capstone professors only. Please do not distribute as it may contain sensitive IP.</p></strong>
          <p>Looking for our <a style={{color: "rgb(0, 217, 255)"}} href="https://ring-diascia-8a8.notion.site/e9f5e88d51244b42928055a13674efc1?v=6aae393196134838bbc31bf9d476bda8&pvs=4">log book</a>?</p>
        </Col>
      </Row>

      <div className="course-page-divider"></div>

      {posts && posts.map((post, index) => {
        return (
          <>
            <div className="post-container" key={index}>
            <Post content={post} index={index} />
            {/* {index+1 != posts.length-1 && <div className="posts-divider" ></div>} */}
            </div>
            <br/>
          </>
        )
      })}

      <div id="test-bed"></div>

    </Container>
  );
}

export default CoursePage;

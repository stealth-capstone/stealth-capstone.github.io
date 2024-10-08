import logo from './../../assets/logo.svg';
import './CoursePage.css';

function CoursePage() {
    return (
        <div className="course-page">
        <header className="course-page-header">
          <img src={logo} className="course-logo" alt="logo" />
          <p>
            UWaterloo Mechatronics Capstone Project
          </p>
          <p
            className="course-paragraph"
          >
            Aryan Kalia | Dhruv Upadhyay | Mohamed Goha | Saksham Ahuja
          </p>
          <p
            className="course-paragraph"
          >
            Problem Statement: Conventional medical casts are unhygenic, uncomfortable, and lack breathability. We're working on a solution
            that improves patient experience with casts while addressing the challenges associated with urgent care, including time-sensitivity,
            quick turnaround, and minimal personnel/resource usage.
          </p>
          <a className="course-paragraph course-link"
              href="https://ring-diascia-8a8.notion.site/e9f5e88d51244b42928055a13674efc1?v=6aae393196134838bbc31bf9d476bda8&pvs=4">
              See log book
          </a>
        </header>
      </div>  
    );
}

export default CoursePage;

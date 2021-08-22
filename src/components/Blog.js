import "../styles/Blog.scss";
import { FaMediumM } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function blogLinkClick(link) {
  const url = link;
  window.open(url, "_blank");
}

function Blog() {
  return (
    <div className="Blog" id="blogs">
      <h1 className="blog-header">Blogs</h1>
      <hr className="blog-divider" />
      <div>
        <div className="blog-plate">
          <div className="blog-layout">
            <span className="blog-body">
              <h4 className="blog-title">
                Send Emails using ReactJS from EmailJS
              </h4>
              <p className="blog-desc">
                Yes, you read it right ! Finally a functionality that lets you
                send email from your ReactJS based frontend to your mail...
              </p>
              <div>
                <button className="read-more">Read More Here: </button>
                &nbsp; &nbsp;
                <button
                  className="urls"
                  onClick={() => {
                    blogLinkClick(
                      "https://samflab.medium.com/send-emails-using-reactjs-from-emailjs-c0a64a57e36b"
                    );
                  }}
                >
                  <FaMediumM />
                </button>
                &nbsp;
                <button className="urls"
                onClick={() => {
                  blogLinkClick(
                    "https://samflab.hashnode.dev/send-emails-using-reactjs-from-emailjs"
                  );
                }}
                >
                  <SiHashnode />
                </button>
              </div>
            </span>
          </div>
          <div className="blog-layout">
            <span className="blog-body">
              <p className="blog-title">
                Smallest Positive Missing Number in an Unsorted Array
              </p>
              <p className="blog-desc">
                We have an array consisting of negative and positive numbers, we
                have to finding the smallest missing positive number from the
                given array...
              </p>
              <div>
                <button className="read-more">Read More Here: </button>
                &nbsp; &nbsp;
                <button
                  className="urls"
                  onClick={() => {
                    blogLinkClick(
                      "https://samflab.medium.com/smallest-positive-missing-number-in-an-unsorted-array-8f8a0439fb09"
                    );
                  }}
                >
                  <FaMediumM />
                </button>
                &nbsp;
              </div>
           
            </span>
          </div>
          <div className="blog-layout">
            <span className="blog-body">
              <h4 className="blog-title">
                Inserting Node into a Sorted Doubly Linked List
              </h4>
              <p className="blog-desc">
                Recently, I was solving some coding questions on Hackerrank and
                I came across this problem. I realised that this problem
                lacked...
              </p>
              <div>
                <button className="read-more">Read More Here: </button>
                &nbsp; &nbsp;
                <button
                  className="urls"
                  onClick={() => {
                    blogLinkClick(
              "https://samflab.medium.com/inserting-node-into-a-sorted-doubly-linked-list-67c638c4ec21"
                    );
                  }}
                >
                  <FaMediumM />
                </button>
                &nbsp;
              </div>
           
            </span>
          </div>
          <div className="blog-layout">
            <span className="blog-body">
              <h4 className="blog-title">Responsive Text in Flutter</h4>
              <p className="blog-desc">
                Have you ever come across a situation where you realized you
                have to resize your text according to different screen sizes?
                Unfortunately...
              </p>
              <div>
                <button className="read-more">Read More Here: </button>
                &nbsp; &nbsp;
                <button
                  className="urls"
                  onClick={() => {
                    blogLinkClick(
              "https://samflab.medium.com/responsive-text-in-flutter-744fc830a9cd"
                    );
                  }}
                >
                  <FaMediumM />
                </button>
                &nbsp;
              </div>
              
            </span>
          </div>
          <div className="blog-layout">
            <span className="blog-body">
              <h4 className="blog-title">Our Train of Thoughts</h4>
              <p className="blog-desc">
                It might seem like a vague question but have you ever put some
                thought into it? Being consumed by our thoughts and our thoughts
                consuming us...
              </p>
              <div>
                <button className="read-more">Read More Here: </button>
                &nbsp; &nbsp;
                <button
                  className="urls"
                  onClick={() => {
                    blogLinkClick(
              "https://samflab.medium.com/us-and-our-thoughts-76321f6a7801"
                    );
                  }}
                >
                  <FaMediumM />
                </button>
                &nbsp;
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

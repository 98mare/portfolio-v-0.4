import React, { useEffect, useState } from 'react'
import './WorkPage.css'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import WebsiteView from '../../Components/WebsiteView'
import MobileView from '../../Components/MobileView'
import workData from '../Data/WorkData.json'

function WorkPage(props) {
  // console.log(workData);
  // console.log(props)
  const [post, setPost] = useState({
    id: '',
    workDone: '',
    clientName: '',
    coverImage: '',
    webViewImage: '',
    mobileViewImageOne: '',
    mobileViewImageTwo: '',
    publishDate: '',
    clientDetail: ''
  });

  const [postId, setPostId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = workData.data.find(post => post.id == postId);
    setPost(post);
    setPostId(postId);
  }, [post, props.match.params.postId]);

  if (post.coverImage == "") return null;
  if (post.webViewImage == "") return null;
  if (post.mobileViewImageOne == "") return null;
  if (post.mobileViewImageTwo == "") return null;


  return (
    <>
      <NavBar />
      <div className='workpage-container'>
        <h3>{post.clientName}</h3>
        <p>Nothing said by the clientDetail</p>

        <div className="web-view-container">
          <div className="website-view">
            <WebsiteView potato={post.webViewImage} />
          </div>
          <div className="website-detail">
            <p>{post.clientDetail}</p>
            <h4>Date</h4>
            <p>{post.publishDate}</p>
            <h4>Client name</h4>
            <p>{post.clientName}</p>
            <button>Visit Site</button>
            <div className="mobile-view" style={{ marginTop: '80px' }}>
              <MobileView image={post.mobileViewImageOne} />
            </div>
            <div className="mobile-view" style={{ marginTop: '80px' }}>
              <MobileView image={post.mobileViewImageTwo} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WorkPage

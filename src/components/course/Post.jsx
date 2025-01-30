import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Ratio } from 'react-bootstrap';
import {Image as BootstrapImage} from 'react-bootstrap';

import './Post.css';

import { getStorage, ref, getDownloadURL } from "firebase/storage";

function PostText(props) {
    return (
        <Col lg={6} md={12} sm={12} xs={12} className="my-auto">
            {/* <h3 className="post-title">{props.title}</h3> */}
            <h4 className="post-subtitle mb-3">{props.date}</h4>
            <p className="post-text">{props.body}</p>
        </Col>
    );
}

function PostMedia(props) {
    const [imgInfo, setImgInfo] = useState({
        imgTypes: null,
        begin: false,
        imgSrcs: null
    });

    const [rows, setRows] = useState([]);
    
    useEffect(() => {
        // Determine URLs and orientations of images
        if (props.content.images) {
            let orientations = {};
            let srcDef = {};

            for (const img of Object.keys(props.content.images)) {
                let loadImg = new Image();
                const storage = getStorage();
                const imgRef = ref(storage, "assets/" + props.content.images[img]);
                getDownloadURL(imgRef).then(url => {
                    loadImg.src = url;
                    document.getElementById("test-bed").appendChild(loadImg);
                    loadImg.onload = () => {
                        if(loadImg.height/loadImg.width < 1.1 && loadImg.height/loadImg.width > 0.9) {
                            orientations[img] = "square";
                        } else if (loadImg.height/loadImg.width > 1.1) {
                            orientations[img] = "height";
                        } else {
                            orientations[img] = "width"
                        }
                        srcDef[img] = loadImg.src;
                        loadImg.remove();
                        setImgInfo({ imgTypes: orientations, begin: true, imgSrcs: srcDef });
                    }
                }).catch(err => (console.error(err)));
            }
        }
    }, []);

    useEffect(() => {
        setRows([]);

        const getImageURL = (imgId) => {
            let url = "";
            if (imgInfo.begin)
                url = imgInfo.imgSrcs[imgId];
            return url;
        };


        // Generate rows of images and videos
        if (props.content.video && typeof props.content.video != 'string') {
            for (const video of Object.keys(props.content.video)) {
                setRows((oldRows) =>
                    [...oldRows, 
                        <Row>
                            <Col>
                                {
                                    <Ratio aspectRatio="16x9">
                                        <embed src={props.content.video[video]} />
                                    </Ratio>
                                }
                                <br/>
                            </Col>
                        </Row>
                    ]
                );
            }
        } else if (props.content.video) {
            setRows((oldRows) =>
                [...oldRows, 
                    <Row>
                        <Col>
                            {props.content.video &&
                                <Ratio aspectRatio="16x9">
                                    <embed src={props.content.video} />
                                </Ratio>
                            }
                            <br/>
                        </Col>
                    </Row>
                ]
            );
        }
        
        if(props.content.images && Object.keys(props.content.images).length > 0) {
            let imgRows = [];
            let imgCols = [];

            for(const imgId of Object.keys(props.content.images)) {
                if(imgInfo.begin && (imgInfo.imgTypes[imgId] == "height" || imgInfo.imgTypes[imgId] == "square")) {
                    imgCols.push(
                            <BootstrapImage fluid src = {getImageURL(imgId)} className="mx-auto w-auto d-block post-media" />
                    );
                } else if(imgInfo.begin && imgInfo.imgTypes[imgId] == "width") {
                    imgRows.push(
                            <Col className="my-auto">
                                <BootstrapImage fluid src={getImageURL(imgId)} className="mx-auto w-auto d-block post-media"/>
                            </Col>
                    );
                } else {
                    imgCols.push(
                        <BootstrapImage fluid src = {getImageURL(imgId)} className="mx-auto w-auto d-block post-media" />
                    );
                }
            }
            setRows((oldRows) =>
                [...oldRows, 
                    <Row className="d-flex justify-content-center">
                        {imgCols.map((key, index) => (
                            <Col className="my-auto">{key}</Col>
                        ))}
                        {imgRows.length > 0 && <Col>
                        {imgRows.map((key, index) => (
                            <Row className="my-1">{key}</Row>
                        ))}
                        </Col>}
                    </Row>
                ]
            );
        }
    }, [imgInfo]);

    return (
        <Col lg={6} md={12} sm={12} xs={12} className="my-auto">
            {rows}
        </Col>
    );
}

function Post(props) {
    
    const [windowSize, setWindowSize] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    });
    const updateWindowDimensions = () => {
        setWindowSize({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    };
    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    const getPostContent = () => {
            if(windowSize.windowWidth <= 992 || props.index % 2 == 0) {
                return(
                    <Row className="my-5">
                        {<PostText title={props.content.title} date={props.content.date} body={props.content.body} />}
                        {<PostMedia content={props.content.media} />}
                    </Row>
                );            
            } else {
                return(
                    <Row className="my-5 text-right">
                        {<PostMedia content={props.content.media} />}
                        {<PostText title={props.content.title} date={props.content.date} body={props.content.body} />}
                    </Row>
                );
            }
    }

    return(
        <div style={{width: '75%'}} id={props.id}>
            {getPostContent()}
        </div>
    );
}

export default Post;
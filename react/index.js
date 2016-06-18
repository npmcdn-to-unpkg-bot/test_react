import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Links from './links_components';
import Gallery from './gallery_components';
import Footer from './gallery_components';

/* Add Showcase after others are done */
ReactDOM.render(<Gallery type="none"/>, document.querySelector('.gallery_container'));
ReactDOM.render(<Links type="photo" />, document.querySelector('.content_container'));
ReactDOM.render(<Footer />, document.querySelector('.footer_container'));
/*
<div class=".showcase_container"></div>
<div class=".content_container"></div>
<div class=".footer_container"></div>
*/
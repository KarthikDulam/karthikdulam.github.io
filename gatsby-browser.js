/* eslint-disable no-var */
/* eslint-disable prefer-template */
/* eslint-disable one-var */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// gatsby-browser.js

import $ from 'jquery';

export const onClientEntry = () => {
  document.addEventListener('DOMContentLoaded', function() {
    var cursor = $('<div>').addClass('cursor');
    $('body').append(cursor);

    $('body').mousemove(function(e) {
      var x = e.pageX - 6, // Adjust for half of the cursor width
        y = e.pageY - 6; // Adjust for half of the cursor height

      cursor.css({
        left: x + 'px',
        top: y + 'px',
      });
    }).mouseleave(function() {
      cursor.hide();
    }).mouseenter(function() {
      cursor.show();
    });
  });
};

// CSS styles for the cursor
const cursorStyle = `
  .cursor {
    position: absolute; /* Set to absolute position to update only when mouse moves */
    width: 20px; /* Adjust the size of the cursor */
    height: 20px; /* Adjust the size of the cursor */
    border-radius: 50%; /* Makes the cursor a circle */
    border: 2px solid white; /* Border to create a pure white circle */
    pointer-events: none; /* Ensures the cursor doesn't interfere with mouse events */
    z-index: 9999; /* Ensures the cursor is above other elements */
    box-sizing: border-box; /* Include border in the width and height calculation */
  }
`;

// Inject CSS styles into the document
const styleNode = document.createElement('style');
styleNode.innerHTML = cursorStyle;
document.head.appendChild(styleNode);

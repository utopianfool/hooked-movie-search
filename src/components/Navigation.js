import React from "react";

const Navigation = (props) => {
  return (
    <nav>
        <a class="logo-link" href="https://utopianfool.co.uk">
            <div class="logo">
                <div class="logo-wrap"><img src="images/fool-logo.png" alt="Utopian Fool Logo"/></div>
                <h1>The Utopian Fool</h1>
            </div>
        </a>
        <ul class="nav-links">
            <li>
                <a href="https://utopianfool.co.uk/about" title="Learn more about the Utopian Fool">About</a>
            </li>
            <li>
                <a href="https://utopianfool.co.uk/blog" title="">Blog</a>
            </li>
            <li>
                <a class="drop-down" href="https://utopianfool.co.uk/projects" title="Browse Utopian Fool's portfolio">Projects &#9660;</a>
                <ul class="sub-menu">
                </ul>
            </li>
        </ul>
        <div class="social-links">
            <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/utopianfool"><img src="images/github.png" alt="github"/></a>
            <a title="CodePen" target="_blank" rel="noopener noreferrer" href="https://codepen.io/utopianfool"><img src="images/codepen.png" alt="codepen"/></a>
            <a title="Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/utopianfool"><img src="images/twitter.png" alt="twitter"/></a>
        </div>
        <div class="burger">
            <div class="bar-1"></div>
            <div class="bar-2"></div> 
            <div class="bar-3"></div>           
        </div>
    </nav>
  );
};

export default Navigation;
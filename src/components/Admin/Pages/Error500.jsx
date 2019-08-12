import React from 'react';
import '../../../assets/scss/error404.scss';

export default function Error500() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>5<span>00</span></h1>
        </div>
        <h2>Internal error. Something went wrong.</h2>
        <form className="notfound-search">
          <input type="text" placeholder="Search..." />
          <button type="button"><span></span></button>
        </form>
      </div>
	  </div>
  );
}
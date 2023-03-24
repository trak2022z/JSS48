"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    let b = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('promise one is done!')
        }, 5000)
    });
    b.then(console.log);
  }

})()
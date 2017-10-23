"use strict";

let mehs= null;

function install_oschooser()
{
  let oses= {'redmond' : 'Windows', 'mac' : 'Mac', 'unix' : 'Linux/*BSD'};
  let blocks= document.getElementsByClassName('osdiverse');

  for (let blockidx=0; blockidx<blocks.length; blockidx++) {
    let block= blocks[blockidx];

    let options= block.getElementsByClassName('osoption');

    let show= function(name) {      
      for (let optidx=0; optidx < options.length; optidx++) {
        let option= options[optidx];
        let optname= option.classList[1].substr(2);

        option.style.display= (name == optname) ? 'block' : 'none';
      }

      let tabs= block.getElementsByClassName('ostab');
      for (let tabidx=0; tabidx < tabs.length; tabidx++) {
        let tab= tabs[tabidx];
        let optname= tab.classList[1].substr(3);

        tab.style.backgroundColor=
          (name == optname) ? 'rgba(255, 255, 255, 0.66)' : 'rgba(255, 255, 255, 0.07)';
      }
    }
    
    for (let optidx=0; optidx < options.length; optidx++) {
      let option= options[optidx];
      let optname= option.classList[1].substr(2);

      let txt= document.createTextNode(oses[optname]);
      let a= document.createElement('a');
      a.appendChild(txt);
      a.classList.add('ostab');
      a.classList.add('ost' + optname)

      a.onclick= function() {
        show(optname);
      }

      block.insertBefore(a, block.firstChild);

      if (optidx==0) {
        show(optname);
      }
    }
  }
}

setTimeout(install_oschooser, 1);




 
    
  function displayHome() {
    document.getElementById('navHome').style.display = 'none';
    document.getElementById('navProjects').style.display = 'block';
    document.getElementById('navAbout').style.display = 'block';
    document.getElementById('navContact').style.display = 'block';
  }
  function displayProjects() {
    document.getElementById('navHome').style.display = 'block';
    document.getElementById('navProjects').style.display = 'none';
    document.getElementById('navAbout').style.display = 'block';
    document.getElementById('navContact').style.display = 'block';
  }

  function displayAbout() {
    document.getElementById('navHome').style.display = 'block';
    document.getElementById('navProjects').style.display = 'block';
    document.getElementById('navAbout').style.display = 'none';
    document.getElementById('navContact').style.display = 'block';
  }

  function displayContact() {
    document.getElementById('navHome').style.display = 'block';
    document.getElementById('navProjects').style.display = 'block';
    document.getElementById('navAbout').style.display = 'block';
    document.getElementById('navContact').style.display = 'none';
  }
 

};

export default NavbarFunctions;

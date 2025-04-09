function toggleDropdown(id, event) {
    event.preventDefault(); 
    const submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
  }
  
  window.onclick = function(event) {
    const buttons = ['submenu', 'submenu2', 'submenu3', 'galeri', 'daftar'];
  
    buttons.forEach(id => {
      const submenu = document.getElementById(id);
    
      if (submenu && !event.target.closest('.cta-button')) {
        submenu.style.display = "none";
      }
    });
  };
  
  
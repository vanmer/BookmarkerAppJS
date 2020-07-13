// Listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

// Save bookmark
function saveBookmark(e) {
  // Get form values
  var siteName = document.getElementById("siteName").value;
  var siteURL = document.getElementById("siteURL").value;

  var bookmark = {
    name: siteName,
    url: siteURL
  }

  // // Local Storage Test
  // localStorage.setItem('test', 'Hola chica!');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

  

  // Prevent form from submitting
  e.preventDefault();
}

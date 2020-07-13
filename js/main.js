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

  /*
    // Local Storage Test
    localStorage.setItem('test', 'Hola chica!');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */

  // Test if bookmark is null
  if (localStorage.getItem('bookmarks') === null) {
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add boomark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Prevent form from submitting
  e.preventDefault();
}

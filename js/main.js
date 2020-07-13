// LISTEN FOR FORM SUBMIT
document.getElementById("myForm").addEventListener("submit", saveBookmark);

// SAVE BOOKMARK
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
  if (localStorage.getItem("bookmarks") === null) {
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

  // Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// DELETE BOOKMARK
function deleteBookmark(url) {
  // Get bookmark from localStorage;
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop through the bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

// FETCH BOOKMARKS
function fetchBookmarks() {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarkSResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'
                                  '</h3>'+
                                  '</div>';
  }

}

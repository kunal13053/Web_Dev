document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
  // Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

  //   we will save site names and site urls as array of objects, where each object is defined as follows:
  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  //   //   Local storage Test
  //   localStorage.setItem('test', 'Hello World');
  //   console.log(localStorage.getItem('test'));
  //   localStorage.removeItem('test');
  //   console.log(localStorage.getItem('test'));

  //   Test if bookmark is null
  if (localStorage.getItem('bookmarks') === null) {
    // Initialise array
    var bookmarks = [];
    //Add the bookmark from the to bookmarks, which is a JSON array
    bookmarks.push(bookmark);
    // set to Local Storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // .stringify will take our json array and turn it into string
  } else {
    //   Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); //.parse will turn string back to JSON
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // .stringify will take our json array and turn it into string
  }

  //   Clear form
  document.getElementById('myForm').reset();

  //   Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// Delete Bookmarks
function deleteBookmark(url) {
  //   Get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); //.parse will turn string back to JSON

  //   Loop through bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  //   Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // .stringify will take our json array and turn it into string

  //   Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
  //   Get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); //.parse will turn string back to JSON

  //   Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //   Build output
  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      '<div class="alert alert-default">' +
      '<h3>' +
      name +
      ' ' +
      '<a class="btn btn-secondary" target="_blank" href="' +
      url +
      '">Visit1</a>' +
      ' ' +
      '<a onclick="deleteBookmark(\'' +
      url +
      '\')" class="btn btn-danger" href="#"> Delete </a>' +
      '</h3>' +
      '</div>';
  }
}

function validateForm(siteName, siteUrl) {
  //   Validation to prevent user to fill the empty form
  if (!siteName || !siteUrl) {
    alert('Please fill in the form');
    return false;
  }

  //   Validation to check whether only url is entered in site url
  //   No logic behind below 2 lines(see Regex for url)
  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert('Please use a valid url');
    return false;
  }

  return true;
}

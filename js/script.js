
function changeBackground() {
  var hero = document.querySelector('.hero');
  fetch('https://source.unsplash.com/featured/?Bali')
    .then(response => {
      hero.style.backgroundImage = `url('${response.url}')`;
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}

var crossButtonClicked = false;

document.addEventListener('DOMContentLoaded', function() {
    var posts = document.querySelectorAll('.blog-post');
  
    posts.forEach(function(post) {
    var div = post.querySelector('div');

    div.style.display = 'none';

    post.querySelector('img').addEventListener('click', function() {
      div.style.display = div.style.display === 'none' ? 'block' : 'none';
    });

    var likeButton = post.querySelector('.like-button');
    var dislikeButton = post.querySelector('.dislike-button');

    likeButton.addEventListener('click', function() {
      alert('You liked this post!');
    });

    dislikeButton.addEventListener('click', function() {
      alert('You disliked this post.');
    });
  });
});

var crossButtonClicked = false;

function toggleVisibility(clickedElement) {
    var posts = document.querySelectorAll('.blog-post');
    for (var i = 0; i < posts.length; i++) {
        if (posts[i] !== clickedElement) {
            posts[i].style.display = 'none';
            posts[i].querySelector('.data').style.display = 'none'; // Hide the data section of other posts
        } else {
            // console.log(posts[i]);
        }
    }

    var dataSection = clickedElement.querySelector('.data');
    dataSection.style.display = 'block'; // Ensure data section is displayed

    if (!crossButtonClicked) {
        var viewCounter = dataSection.querySelector('.view-counter');

        var views = parseInt(viewCounter.innerText.replace('Views: ', '')) || 2500;
        views++;
        viewCounter.innerText = 'Views: ' + views;
    }

    var createButton = document.querySelector('.create-button');
    var linkImage = document.querySelector('.link-image');
    createButton.style.display = 'none'; // Hide create button when displaying single post
    linkImage.style.display = 'none';

    var editButton = document.querySelector('.edit-button');
    var deleteButton = document.querySelector('.delete-button');


    editButton.style.display = 'inline-block'; // Show edit button
    deleteButton.style.display = 'inline-block'; // Show delete button

    document.querySelector('.cross-button').style.display = 'inline-block'; // Show the cross button
    crossButtonClicked = true;
}

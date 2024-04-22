
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

function showAllPosts() {
    var posts = document.querySelectorAll('.blog-post');
    for (var i = 0; i < posts.length; i++) {
        posts[i].style.display = 'inline-block';
        posts[i].querySelector('.data').style.display = 'none'; // Show the data section
    }

    var createButton = document.querySelector('.create-button');
    var linkImage = document.querySelector('.link-image');

    createButton.style.display = 'block'; // Show create button when displaying all posts
    linkImage.style.display = 'block';


    var editButtons = document.querySelectorAll('.edit-button');
    var deleteButtons = document.querySelectorAll('.delete-button');
    for (var i = 0; i < editButtons.length; i++) {
        editButtons[i].style.display = 'none'; // Hide edit buttons
        deleteButtons[i].style.display = 'none'; // Hide delete buttons
    }

    document.querySelector('.cross-button').style.display = 'none'; // Hide the cross button
    crossButtonClicked = false;
}

function displayCSV(data, title) {
            const rows = data.split('\n');
            let html = `<h2>${title}</h2><table border="2">`;

            rows.forEach(row => {
                const columns = row.split(',');
                html += '<tr>';
                columns.forEach(column => {
                    html += `<td>${column}</td>`;
                });
                html += '</tr>';
            });

            html += '</table>';
            document.getElementById('excelData').innerHTML += html;
        }

const commentsCSV = `CommentID,VisitorID,PageURL,CommentText,Timestamp
1,1,https://blog.com/post1,Great tips! Can't wait to try them out,19-04-2024 08:05
2,2,https://blog.com/post1,Thanks for the helpful tips!,19-04-2024 09:05
3,3,https://blog.com/post2,Interesting article!,19-04-2024 10:05`;

// CSV data
const linksCSV = `LikeDislikeID,VisitorID,PageURL,Action,Timestamp
1,2,https://blog.com/post1,Like,19-04-2024 09:10
2,3,https://blog.com/post1,Like,19-04-2024 10:10
3,4,https://blog.com/post2,Like,19-04-2024 11:10
4,5,https://blog.com/post3,Like,19-04-2024 12:10
5,6,https://blog.com/post4,Like,19-04-2024 13:10
6,7,https://blog.com/post5,Like,19-04-2024 14:10
7,8,https://blog.com/post6,Like,19-04-2024 15:10`;

// CSV data
const visitorsCSV = `VisitorID,Name,Email,Timestamp,Age,Gender,Location
1,John,john@example.com,19-04-2024 08:00,30,Male,New York
2,Mary,mary@example.com,19-04-2024 09:00,25,Female,Los Angeles
3,Alice,alice@example.com,19-04-2024 10:00,35,Female,Chicago
4,Bob,bob@example.com,19-04-2024 11:00,28,Male,Houston
5,Emma,emma@example.com,19-04-2024 12:00,40,Female,San Francisco
6,James,james@example.com,19-04-2024 13:00,45,Male,Miami
7,Lily,lily@example.com,19-04-2024 14:00,22,Female,Seattle`;

// Display CSV data
displayCSV(linksCSV, 'Likes Data');
displayCSV(visitorsCSV, 'Visitors Data');
displayCSV(commentsCSV, 'Comments Data');

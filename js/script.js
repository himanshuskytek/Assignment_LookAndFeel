
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

// Function to add event listeners to a single blog post element
function addEventListenersToPost(post) {
    var div = post.querySelector('div');
    var likeButton = post.querySelector('.like-button');
    var dislikeButton = post.querySelector('.dislike-button');

    div.style.display = 'none';

    post.querySelector('img').addEventListener('click', function() {
        div.style.display = div.style.display === 'none' ? 'block' : 'none';
    });

    likeButton.addEventListener('click', function() {
        alert('You liked this post!');
    });

    dislikeButton.addEventListener('click', function() {
        alert('You disliked this post.');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var posts = document.querySelectorAll('.blog-post');

    posts.forEach(function(post) {
        addEventListenersToPost(post);
    });
});


//document.addEventListener('DOMContentLoaded', function() {
//    var posts = document.querySelectorAll('.blog-post');
//
//    posts.forEach(function(post) {
//    var div = post.querySelector('div');
//
//    div.style.display = 'none';
//
//    post.querySelector('img').addEventListener('click', function() {
//      div.style.display = div.style.display === 'none' ? 'block' : 'none';
//    });
//
//    var likeButton = post.querySelector('.like-button');
//    var dislikeButton = post.querySelector('.dislike-button');
//
//    likeButton.addEventListener('click', function() {
//      alert('You liked this post!');
//    });
//
//    dislikeButton.addEventListener('click', function() {
//      alert('You disliked this post.');
//    });
//  });
//});

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

        var views = parseInt(viewCounter.innerText.replace('Views: ', '')) || 0;
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

const commentsCSV = `CommentID,VisitorID,PageURL,CommentText,Timestamp,Upvotes,Downvotes
1,1,https://blog.com/post1,Great tips! Can't wait to try them out,19-04-2024 08:05,20,5
2,2,https://blog.com/post1,Thanks for the helpful tips!,19-04-2024 09:05,15,2
3,3,https://blog.com/post2,Interesting article!,19-04-2024 10:05,10,0`;

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
displayCSV(commentsCSV, 'Comments Data');
displayCSV(linksCSV, 'Likes Data');
displayCSV(visitorsCSV, 'Visitors Data');


    function deleteArticle() {
        var posts = document.querySelectorAll('.blog-post');
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].style.display !== 'none') {
                posts[i].remove();
            }
        }
        var editButton = document.querySelector('.edit-button');
        var deleteButton = document.querySelector('.delete-button');

        editButton.style.display = 'none';
        deleteButton.style.display = 'none';
    }

    function openEditPopup() {
        var popup = document.getElementById("editPopup");
        popup.style.display = "block";
    }

    function closeEditPopup() {
        var popup = document.getElementById("editPopup");
        popup.style.display = "none";
    }

function editArticle() {
    var blog_n = null;
    var posts = document.querySelectorAll('.blog-post');

    // Find the first visible post
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].style.display !== 'none') {
            blog_n = posts[i];
            break;
        }
    }

    // If a visible post is found, proceed with editing
    if (blog_n) {
        var newImgSrc = document.getElementById("newImgSrc").value;
        var newHeading = document.getElementById("newHeading").value;
        var newData = document.getElementById("newData").value;

        // Change image src if newImgSrc is provided
        if (newImgSrc.trim() !== '') {
            var img = blog_n.querySelector('img');
            if (img) {
                img.src = newImgSrc;
            }
        }

        // Change heading text
        var heading = blog_n.querySelector('h3');
        if (heading) {
            heading.textContent = newHeading;
        }

        // Change data paragraph text
        var data = blog_n.querySelector('.data');
        if (data) {
            var paragraphs = data.querySelectorAll('.blog-info');
            if (paragraphs.length > 0) {
                paragraphs[0].textContent = newData;
            }
        }
    }
}

// Get the create button element
var createButton = document.querySelector(".create-button");

// Attach click event listener to the create button
createButton.addEventListener("click", openCreatePopup);

// Function to open the create popup
function openCreatePopup() {
    var popup = document.getElementById("createPopup");
    popup.style.display = "block";
}

// Function to close the create popup
function closeCreatePopup() {
    var popup = document.getElementById("createPopup");
    popup.style.display = "none";
}

// Function to create a new blog post
function createBlogPost() {
    var newImgSrc = document.getElementById("createnewImgSrc").value;
    var newHeading = document.getElementById("createnewHeading").value;
    var newData = document.getElementById("createnewData").value;

    // Create new blog post container
    var blogPostContainer = document.createElement("article");
    blogPostContainer.classList.add("blog-post");

    // Create image element
    var img = document.createElement("img");
    img.src = newImgSrc;
    img.alt = "Blog Image";

    // Create heading element
    var heading = document.createElement("h3");
    heading.textContent = newHeading;

    // Create data container element
    var dataContainer = document.createElement("div");
    dataContainer.classList.add("data");

    // Create paragraph element for data
    var paragraph = document.createElement("p");
    paragraph.textContent = newData;

    var likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.innerHTML = "&#x1F44D; Like";

    // Create dislike button
    var dislikeButton = document.createElement("button");
    dislikeButton.classList.add("dislike-button");
    dislikeButton.innerHTML = "&#x1F44E; Dislike";

    // Create view counter span element
    var viewCounterSpan = document.createElement("span");
    viewCounterSpan.classList.add("view-counter");
    viewCounterSpan.textContent = "Views: " + 1;

    dataContainer.appendChild(paragraph);
    dataContainer.appendChild(likeButton);
    dataContainer.appendChild(dislikeButton);
    dataContainer.appendChild(viewCounterSpan);

    // Append elements to the blog post container
    blogPostContainer.appendChild(img);
    blogPostContainer.appendChild(heading);
    blogPostContainer.appendChild(dataContainer);

    // Add toggle visibility function
    blogPostContainer.setAttribute("onclick", "toggleVisibility(this)");

    // Append the new blog post container to the blog container
    var blogContainer = document.getElementById("blogContainer");
    blogContainer.appendChild(blogPostContainer);

    // Add event listeners to the newly created post
    addEventListenersToPost(blogPostContainer);
//
//    chartLabels.push('New Post');
//
//    // Update the chart's data with the new labels array
//    viewsChart.data.labels = chartLabels;
//
//    // Update the chart
//    viewsChart.update();
    // Close the popup after creating the blog post
    closeCreatePopup();
}

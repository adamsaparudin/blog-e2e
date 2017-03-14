$(document).ready(function() {
  getArticle()
})

function getArticle() {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/articles',
    body: 'json',
    success: (data) => {
      $('#article').empty()
      data.forEach(function(article) {
        $('#article').append(`<div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                  <div class="caption">
                                    <h3>${article.title}</h3>
                                    <p>${article.details}</p>
                                    <p><button onclick="deleteArticle('http://localhost:3000/articles/${article.slug}')" class="btn btn-default delete-article-btn">Delete</button>
                                      <button url='http://localhost:3000/articles/${article.slug}' id='article-btn' class="btn btn-primary" data-toggle='modal' data-target='#editArticle'>Edit Shit</button>
                                    </p>
                                  </div>
                                </div>
                              </div>`)
      })
    }
  })
}

function createArticle() {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/articles',
    data: $('#article-form').serialize(),
    success: (data) => {
      $('#article-form').trigger("reset")
      getArticle()
    }
  })
}

function deleteArticle(url) {
  $.ajax({
    method: 'DELETE',
    url: url,
    success: (data) => {
      getArticle()
    }
  })
}

$(document).on('click', '#article-btn', function() {
  let url = $(this).attr("url")
  $('#article-edit-form').append(`<button id="edit-article-btn" class="btn btn-primary" onclick="editArticle('${url}')" data-dismiss="modal">Go Edit</button>`)
})


function editArticle(url) {
  $.ajax({
    method: 'PUT',
    url: url,
    data: $('#article-edit-form').serialize(),
    success: (data) => {
      $('#article-edit-form').trigger("reset")
      getArticle()
    }
  })
}

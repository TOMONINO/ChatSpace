$(document).on('turbolinks:load', function() {
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var image = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message">
                  <div class="talkerInfo">
                    <div class="talkerInfo__userName">
                      ${ message.user_name }
                    </div>
                    <div class="talkerInfo__postedTime">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="lowerMessage">
                    <p class="lowerMessage__content">
                      ${ content }
                    </p>
                      ${ image }
                  </div>
                </div>`
  return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href;
    $.ajax({
      url: href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.mainMessages').append(html);
      $('#new_message')[0].reset();
      $('.mainMessages').animate({ scrollTop: $('.mainMessages')[0].scrollHeight }, 'fast');
    })
    .fail(function(data){
      alert('Error');
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false);
    })
  })
});
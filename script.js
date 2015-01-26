var start = function() {
  var makeSlide = function(){
    var url = $(".gist-content .meta .actions .button-group")
              .first()
              .find(".raw-url")
              .attr("href");
    $("body").html("");
    $.get(url, function(md){
      $("body").html($("<textarea />").attr("id","source").text(md));
      remark.create();
    });
  }
  var url = $(".gist-content .meta")
            .filter(function(i, obj){return $(obj).find("strong.file-name").text() == "~style.css";})
            .find(".raw-url").attr("href")
  $.get(url+"/raw/style.css")
  .then(function(style){
    $("head").append($("<style />").text(style));
    makeSlide();
  }).fail(makeSlide);
}

$(function(){
  var btn = $("<a />")
            .attr("class", "minibutton")
            .text("▶プレゼンテーションを開始")
            .on("click", start);
  $(".gist-content .meta .button-group").first().prepend(btn);
});

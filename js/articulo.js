jQuery(document).ready(function () {
    console.log("ready!");
    var url = window.location.href;
    id = url.substring(url.indexOf("id=") + 3, url.length);
    console.log(id);
    showArticle(id);
    showListArticles(id);
});

function showArticle(id) {
    var elementToAdd = "";
    elementToAdd = "<div class=\"row\"> <div class=\"element-event-title mt-4 col-md-12\">" + newsList[id].title + "</div> <div class=\"col-md-12 my-3 event-date\">" + newsList[id].date + "</div><div class=\"col-md-12\"><div class=\"event-tags-container\">";
    for (var j = 0; j < newsList[id].tags.length; j++) {
        elementToAdd += "<a href=\"#\" class=\"event-tag\">" + newsList[id].tags[j] + "</a>";
    }
    elementToAdd += "</div><div class=\"row\"><div class=\"article-audio my-3 col-md-12\"><audio controls><source src=\"" + newsList[id].audio + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio> </div>";
    elementToAdd += "<div class=\"col-md-12 event-image "+newsList[id].imageIdentif+"\"><div class=\"image-container\"><img src=\"" + newsList[id].image + "\" class=\"img-fluid\" alt=\"imagen " + newsList[id].title + "\">" + "<span class=\"event-icon\"></span>";
    elementToAdd += "<div class=\"caption-image\"><span class=\"caption-desc\">" + newsList[id].captionDescription + "</span><span class=\"caption-autor\">" + newsList[id].captionAutor + "</span></div></div></div>";
    elementToAdd += "<div class=\"element-event-body mt-4 col-md-12\">" + newsList[id].body + "</div></div>"
    elementToAdd += "</div>"

    $("#article-container").html(elementToAdd);
}

function showListArticles(id) {
    var related="<div class=\"related-articles mb-5 row\"><div class=\"element-event-title mt-5 mb-4 col-md-12\">Información relacionada</div>";
    elementToAdd = "<div class=\"row\"><div class=\"col-md-12 title-section-container\"><h4>ÚLTIMOS COMUNICADOS</h4></div> <div class=\"offset-1 col-10 recent-news-container\"> <div class=\"row\">"
    for (var i = 0; i < newsList.length; i++) {
        if(newsList[id].imageIdentif==newsList[i].imageIdentif){
            related+="<div class=\"col-lg-6 my-3\"><div class=\"row h-100\"><div class=\"col-12\"><a href=\"./articulo.html?id="+i+"\" class=\"related-article\"><div class=\"row h-100\"><div class=\"col-sm-4 col-lg-6 col-xl-5 px-0 overflow-hidden\"><div class=\"event-image "+newsList[i].imageIdentif+"\" style=\"background-image: url('" + newsList[i].image + "')\"><span class=\"event-icon\"></span></div></div>";
            related+="<div class=\"col-sm-8 col-lg-6 col-xl-7 py-3\"><div class=\"event-date\"><small>" + newsList[i].date + "</small></div><div class=\"event-tags-container my-2\">";
            for (var j = 0; j < newsList[i].tags.length; j++) {
              related+="<button class=\"event-tag\"><small>" + newsList[i].tags[j] + "</small></button>";
            }
            related+="</div><div class=\"element-event-title mb-2\"><small>" + newsList[i].title.substring(0,25) + "</small></div><div class=\"element-event-body\">" + newsList[i].body.substr(0, 100) + "...</div>";
            related+="</div></div></a></div></div></div>"
        }
        console.log(i);
        if (newsList[i].type == "new") {
            elementToAdd += "<a class=\"col-md-12 section-link\" href=\"./articulo.html?id=" + i + "\"><div class=\"row\"><div class=\"col-md-12 date\">" + newsList[i].date + "</div><div class=\"col-md-12 title\">" + newsList[i].title + "</div></div></a>";
        }
    }
    related+="</div>"
    elementToAdd += "<a class=\"col-md-12 press-link\" href=\"./prensa.html\">Ver todos los comunicados</a></div>";
    elementToAdd += "</div>"

    jQuery("#recent-article-container").html(elementToAdd);
    jQuery("#related-articles").html(related);
}

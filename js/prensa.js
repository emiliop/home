var pageSize = 4;
var page = 0;

jQuery(document).ready(function() {
    console.log("ready! prensa");

    showPrensaList();
  })


function paginatorMove(reference) {
    if (reference == "prev") {
        page--;
        page=page<0?0:page;
    } else {
        if (reference == "next") {
            page++;
            var maxPageValue=(newsList.length % pageSize == 0 ? newsList.length / pageSize : Math.ceil((newsList.length / pageSize)))-1;
            page=(maxPageValue<page?maxPageValue:page);
        }
        else {
            page=reference;
        }
    }
    console.log(page);
    showPrensaList();
}

function showPrensaList() {
    var elementToAdd = "";
    var maxElements=((page * pageSize) + pageSize>newsList.length?newsList.length:(page * pageSize) + pageSize);
    for (var i = (page * pageSize); i < maxElements; i++) {
        var tempElement = "<div class=\"event-container\"> <div class=\"col-md-12 event-date\">" + newsList[i].date + "</div><div class=\"col-md-12\"><div class=\"row event-tags-container mt-3 mb-4\"><div class=\"col-12 d-flex\">";
        for (var j = 0; j < newsList[i].tags.length; j++) {
            tempElement += "<a href=\"#\" class=\"event-tag\">" + newsList[i].tags[j] + "</a>";
        }
        tempElement += "</div></div> <div class=\"row element-event-container\">"
        tempElement += "<div class=\"col-md-3 image-container\"><div class=\"event-image "+newsList[i].imageIdentif+"\"><img src=\"" + newsList[i].image + "\" class=\"img-fluid\"alt=\"imagen " + newsList[i].title + "\">" + "<span class=\"event-icon\"></span></div></div>";
        tempElement += "<div class=\"col-md-9 element-event-text\"><div class=\"element-event-title mb-2\">" + newsList[i].title + "</div><div class=\"element-event-body\">" + newsList[i].body.substr(0, 150) + "...</div>";
        tempElement += "<div class=\"element-event-see-more\"><a type=\"button\" class=\"btn btn-primary btn-blue-light\" href=\"./articulo.html?id="+i+"\">Leer articulo</a></div></div> </div>"
        tempElement += "</div><hr class=\"gray-semilight my-4\"></div>"

        elementToAdd += tempElement;
    }
    elementToAdd += "<div class=\"col-12 paginator\">";
    var elementsInPaginator = (newsList.length % pageSize == 0 ? newsList.length / pageSize : (newsList.length / pageSize) + 1);
    //yes I know, this should not work for more than 10 elements
    elementToAdd += "<button class=\"btn btn-link paginator-element btn-prev\" onclick=\"paginatorMove('prev')\"><</button>";
    for (var i = 1; i < elementsInPaginator; i++) {
        elementToAdd+="<button type=\"button\" class=\"btn btn-link paginator-element";
        if (i != page + 1) {
            var temp=i-1;
            elementToAdd+="\" onclick=\"paginatorMove("+temp+")\"";
        }else{
            elementToAdd+=" prensa-paginator-active\"";
        }
        elementToAdd+=">"+i+"</button>";
    }
    elementToAdd += "<button class=\"btn btn-link paginator-element btn-next\" onclick=\"paginatorMove('next')\">></button>"
    elementToAdd += "</div>"
    jQuery("#news-container").html(elementToAdd);
    jQuery('html,body').scrollTop(1);
}

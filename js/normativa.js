var pageSize = 7;
var page = 0;

jQuery(document).ready(function() {
    console.log("ready! normativa");

    showList();
    showListArticles();
  });

function paginatorMoveNormativa(reference) {
    if (reference == "prev") {
        page--;
        page = page < 0 ? 0 : page;
    } else {
        if (reference == "next") {
            page++;
            var maxPageValue = (normativityDocs.length % pageSize == 0 ? normativityDocs.length / pageSize : Math.ceil((normativityDocs.length / pageSize))) - 1;
            page = (maxPageValue < page ? maxPageValue : page);
        }
        else {
            page = reference;
        }
    }
    console.log(page);
    showList();
}

function showList() {
    var elementNormativityToAdd = "";
    var maxElements = ((page * pageSize) + pageSize > normativityDocs.length ? normativityDocs.length : (page * pageSize) + pageSize);
    for (var i = (page * pageSize); i < maxElements; i++) {
        var tempElement = "<div class=\"event-container row\"><div class=\"col-md-12\">";
        tempElement += "<div class=\"row element-law-container\">";
        tempElement += "<div class=\"col-md-8 element-event-text\"><div class=\"event-date\">" + normativityDocs[i].date + "</div><div class=\"element-event-body mb-2\">" + normativityDocs[i].text + "</div>";
        tempElement += "</div> <div class=\"col-md-4 event-date\"><a type=\"button\" class=\"btn btn-outline-primary transparency-button-document\" target=\"_blank\" href=\"" + normativityDocs[i].link + "\">Descargar documento</a></div></div><hr class=\"gray-semilight my-4\"></div></div>";
        elementNormativityToAdd += tempElement;
    }
    elementNormativityToAdd += "<div class=\"col-12 paginator\">";
    var elementsInPaginator = (normativityDocs.length % pageSize == 0 ? normativityDocs.length / pageSize : (normativityDocs.length / pageSize) + 1);
    //yes I know, this should not work for more than 10 elements
    elementNormativityToAdd += "<button class=\"btn btn-link paginator-element btn-prev\" onclick=\"paginatorMoveNormativa('prev')\"><</button>";
    for (var i = 1; i < elementsInPaginator; i++) {
        elementNormativityToAdd+="<button type=\"button\" class=\"btn btn-link paginator-element";
        if (i != page + 1) {
            var temp=i-1;
            elementNormativityToAdd+="\" onclick=\"paginatorMoveNormativa("+temp+")\"";
        }else{
            elementNormativityToAdd+=" prensa-paginator-active\"";
        }
        elementNormativityToAdd+=">"+i+"</button>";
    }
    elementNormativityToAdd += "<button class=\"btn btn-link paginator-element btn-next\" onclick=\"paginatorMoveNormativa('next')\">></button>"
    elementNormativityToAdd += "</div>"
    jQuery("#news-container2").html("<h1 class=\"element-event-title my-4\">Resultados de la búsqueda</h1>" + elementNormativityToAdd);
    jQuery('html,body').scrollTop(1);
}

function showListArticles() {
    var elementObservatoyToAdd = "";
    elementObservatoyToAdd = "<div class=\"row\"><div class=\"col-md-12 title-section-container\"><h4>NORMATIVA RECIENTE</h4></div> <div class=\"offset-1 col-10 recent-news-container\"> <div class=\"row\">"
    for (var i = 0; i < 4; i++) {
        console.log(i);
        elementObservatoyToAdd += "<a class=\"col-md-12 section-link\" href=\"./articulo.html?id=" + i + "\"><div class=\"row\"><div class=\"col-md-12 date\">" + normativityDocs[i].date + "</div><div class=\"col-md-12 title\">" + normativityDocs[i].text + "</div></div></a>";
    }
    elementObservatoyToAdd += "</div></div>";

    jQuery("#recent-article-container").html(elementObservatoyToAdd);
}

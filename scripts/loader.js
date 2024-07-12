// games.forEach(game => {
for (var i = 0; i < games.length; i++) {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.innerText = games[i];
    fieldset.append(legend);
    
    var description = document.createElement("p");
    var span = document.createElement("span");
    span.className = "bold";
    span.innerText = games[i];
    description.append(span, " ", descriptions[i]);
    fieldset.append(description);

    var download = document.createElement("p");
    download.innerText = "Download ";
    var a = document.createElement("a");
    a.href = "#";
    a.download = "./games/" + games[i] + ".zip";
    a.innerText = "*here";
    a.title = "For Windows only";
    download.append(a);
    fieldset.append(download);

    var container = document.createElement("div");
    container.className = "container";
    var image = document.createElement("img");
    image.src = "./images/" + games[i] + ".png";
    var ratio = image.width / image.height;
    image.width = 150;
    image.height = image.width / ratio;
    container.append(image);
    
    fieldset.append(container);
    document.body.append(fieldset);
}
// });
var image1 = document.querySelector(".image-1");

var image2 = document.querySelector(".image-2");

var image3 = document.querySelector(".image-3");

var image4 = document.querySelector(".image-4");

var image5 = document.querySelector(".image-5");

image1.addEventListener("click", function(){

    image2.classList.remove("image-selected");

    image3.classList.remove("image-selected");

    image4.classList.remove("image-selected");

    image1.classList.add("image-selected");

    image5.classList.add("image-1");

    image5.classList.remove("image-2");
    image5.classList.remove("image-3");
    image5.classList.remove("image-4");

    image5.classList.add("image-1");

});

image2.addEventListener("click", function(){

    image1.classList.remove("image-selected");

    image3.classList.remove("image-selected");

    image4.classList.remove("image-selected");

    image2.classList.add("image-selected");

    image5.classList.remove("image-1");
    image5.classList.remove("image-3");
    image5.classList.remove("image-4");

    image5.classList.add("image-2");

});

image3.addEventListener("click", function(){

    image1.classList.remove("image-selected");

    image2.classList.remove("image-selected");

    image4.classList.remove("image-selected");

    image3.classList.add("image-selected");

    image5.classList.remove("image-1");
    image5.classList.remove("image-2");
    image5.classList.remove("image-4");

    image5.classList.add("image-3");

});

image4.addEventListener("click", function(){

    image1.classList.remove("image-selected");

    image2.classList.remove("image-selected");

    image3.classList.remove("image-selected");

    image4.classList.add("image-selected");

    image5.classList.remove("image-1");
    image5.classList.remove("image-2");
    image5.classList.remove("image-3");

    image5.classList.add("image-4");

});


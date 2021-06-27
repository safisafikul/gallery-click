const img = document.querySelector(".img-main");

let images = [
    {"src" : "https://images.unsplash.com/photo-1624771683361-fa8b7a420fff?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "alt" : "Umbrella"},
    {"src" : "https://images.unsplash.com/photo-1624737867865-64c6a64ae299?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "alt" : "Eggle"},
    {"src" : "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "alt" : "Dell"},
    {"src" : "https://images.unsplash.com/photo-1502090154121-caf9968dcd04?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "alt" : "Nature"},
    {"src" : "https://images.unsplash.com/photo-1621570074981-ee6a0145c8b5?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "alt" : "MS"},
    {"src" : "https://images.unsplash.com/photo-1624703308618-f5c483d68797?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "alt" : "Lighten"},
];

function loadImage() {
    let src = img.getAttribute("src");
    let imageInfo = images[Math.floor(Math.random() * images.length)];
    while (src === imageInfo.src) {
        imageInfo = images[Math.floor(Math.random() * images.length)];
    }
    img.setAttribute("src", imageInfo.src);
    img.setAttribute("alt", imageInfo.alt);
}

img.addEventListener("click", () => {
    loadImage();
});

document.body.addEventListener("keydown", e => {
    if (e.key === " ") {
        loadImage();
    }
});

loadImage();
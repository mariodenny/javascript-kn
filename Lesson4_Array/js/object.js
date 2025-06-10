// Data untuk sebuah blog
data = {
    "id": 1,
    "title": "Belajar Object JS",
    "categories": ["Tech", "Coding", "IT"],
    "likes": 240,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam ut nulla ullamcorper condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultricies, risus eu consequat malesuada, sapien mi fringilla massa, a ultrices mauris ex at massa. Nunc posuere luctus diam, sed interdum sem euismod at. Donec facilisis diam dolor, et pulvinar purus convallis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla nisl ante, fermentum sit amet accumsan ac, mollis sit amet sapien. Donec varius, diam vel pharetra vestibulum, velit ipsum mollis lacus, fermentum interdum felis nibh quis diam. Phasellus varius gravida ex sed aliquam. Aliquam finibus porttitor orci id finibus. Ut scelerisque nibh vel turpis ullamcorper bibendum. Ut porttitor odio porttitor, aliquet tellus et, pellentesque dolor. Nullam elit orci, ullamcorper eget enim quis, rutrum vulputate sapien. In venenatis tellus aliquam, placerat orci sed, interdum felis. Donec molestie, nisi eu venenatis lacinia, odio quam faucibus turpis, vel maximus elit massa a tortor. Etiam vel libero maximus, bibendum est vitae, faucibus ante. "
}

// console.log(data);

// Fetch ke depamm
title = data.title
content = data.content
likes = data.likes
categoryPlaceholder = document.getElementById("categoryRender")

document.getElementById("title").innerHTML = title
document.getElementById("content").innerHTML = content
document.getElementById("likes").innerHTML = likes
// Category array jadi harus di loop
categories = data.categories
ul = document.createElement("ul")
document.getElementById("categoryRender").appendChild(ul)
categories.forEach(category)   

categories.forEach(category => {
    console.log(category);
   
});


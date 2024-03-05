arrayimg = ["imagenes/png-jpg/edificio2.jpg", "imagenes/png-jpg/Ballena Beluga.jpg",
"imagenes/png-jpg/edificio1.png"]
i = 0

function imgchange(num) {
    console.log(arrayimg.length)
    console.log(num)
    let img1 = document.getElementById("imgcrs")
switch (num) {
    case 1:
        i++
        if (i > arrayimg.length-1) {
            i = 0
        }
        img1.src = arrayimg[i]
        console.log("index: " + i)
        break;
    case -1:
        i--
        if (i == -1) {
            i = 2
        }
        img1.src = arrayimg[i]
        console.log("index: " +  i)
        break;
}
}
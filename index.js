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
            if (i > arrayimg.length - 1) {
                i = 0;
            }
            img1.src = arrayimg[i]
            break;
        case -1:
            i--
            if (i == -1) {
                i = 2
            }
            img1.src = arrayimg[i]
            break;
    }
}

function imgchooser(num2) {
    let img1 = document.getElementById("imgcrs")
    img1.src = arrayimg[num2]
}

function imgt() {
    console.log("ala")
    for (let j = 0; j < arrayimg.length; j++) {
        let img2 = document.getElementById("thumbnailcrs")
        let img3 = document.createElement("img")
        img3.setAttribute("onclick", `imgchooser(${j})`)
        console.log(img3)
        img3.src = arrayimg[j]
        img2.appendChild(img3)
    }
}
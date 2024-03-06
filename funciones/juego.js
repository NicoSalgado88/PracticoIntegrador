let random
let i
arrayquiz =
    [{ image: "../imagenes/png-jpg/juego/delfín.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", a4: "D" },
    ]

function quizmaker() {
    random = Math.floor(Math.random() * 10);
    while (i == random) {
        random = Math.floor(Math.random() * 10);
    }

    let gamediv = document.getElementById("gamediv")
    let gamediv1 = document.createElement("p")
    gamediv1.innerText = "¿Qué animal marino es este?"
    gamediv.appendChild(gamediv1)

    //image
    let gameimg1 = document.createElement("img")
    gameimg1.setAttribute("src", arrayquiz[random].image)
    gameimg1.setAttribute("class", "quiz")
    gamediv.appendChild(gameimg1)

    //buttons
    let random2 = Math.floor(Math.random() * 4);
    let gamebtn1 = document.createElement("div")
    let gamebtn2 = document.createElement("div")
    let gamebtn3 = document.createElement("div")
    let gamebtn4 = document.createElement("div")
    gamebtn1.setAttribute("class", "quizb")
    gamebtn2.setAttribute("class", "quizb")
    gamebtn3.setAttribute("class", "quizb")
    gamebtn4.setAttribute("class", "quizb")
    switch (random2) {
        case 0:
            gamebtn1.innerText = arrayquiz[random].a1
            gamebtn2.innerText = arrayquiz[random].a2
            gamebtn3.innerText = arrayquiz[random].a3
            gamebtn4.innerText = arrayquiz[random].a4
            break;
        case 1:
            gamebtn1.innerText = arrayquiz[random].a2
            gamebtn2.innerText = arrayquiz[random].a3
            gamebtn3.innerText = arrayquiz[random].a4
            gamebtn4.innerText = arrayquiz[random].a1
            break;
        case 2:
            gamebtn1.innerText = arrayquiz[random].a3
            gamebtn2.innerText = arrayquiz[random].a4
            gamebtn3.innerText = arrayquiz[random].a1
            gamebtn4.innerText = arrayquiz[random].a2
            break;
        case 3:
            gamebtn1.innerText = arrayquiz[random].a3
            gamebtn2.innerText = arrayquiz[random].a1
            gamebtn3.innerText = arrayquiz[random].a2
            gamebtn4.innerText = arrayquiz[random].a3
            break;
    }
    gamediv.appendChild(gamebtn1)
    gamediv.appendChild(gamebtn2)
    gamediv.appendChild(gamebtn3)
    gamediv.appendChild(gamebtn4)
    i++
}
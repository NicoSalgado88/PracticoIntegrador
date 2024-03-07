let random
let i = 0

gamediv = null
gamediv1 = null
gamebtn1 = null
gamebtn2 = null
gamebtn3 = null
gamebtn4 = null
gameimg1 = null

arrayquiz =
    [{ image: "../imagenes/png-jpg/juego/delfín.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    { image: "../imagenes/png-jpg/juego/lobomarino.jpg", a1: "A", a2: "B", a3: "C", ac: "D" },
    ]

function divmaker() {
    //text
    gamediv = document.getElementById("gamediv")
    gamediv1 = document.createElement("p")
    gamediv1.innerText = "¿Qué animal marino es este?"
    gamediv.appendChild(gamediv1)
    //button
    gamebtn1 = document.createElement("div")
    gamebtn2 = document.createElement("div")
    gamebtn3 = document.createElement("div")
    gamebtn4 = document.createElement("div")
    gamebtn1.setAttribute("class", "quizb")
    gamebtn2.setAttribute("class", "quizb")
    gamebtn3.setAttribute("class", "quizb")
    gamebtn4.setAttribute("class", "quizb")
    //img
    gameimg1 = document.createElement("img")
    quizmaker()
    //span
    
}

function quizmaker() {
    if (i == 3) {
        return;
    }
    random = Math.floor(Math.random() * 10);
    while (i == random) {
        random = Math.floor(Math.random() * 10);
    }

    //image
    gameimg1.setAttribute("src", arrayquiz[random].image)
    gameimg1.setAttribute("class", "quiz")
    gamediv.appendChild(gameimg1)

    //answers
    let random2 = Math.floor(Math.random() * 4);
    switch (random2) {
        case 0:
            gamebtn1.innerText = arrayquiz[random].a1
            gamebtn2.innerText = arrayquiz[random].a2
            gamebtn3.innerText = arrayquiz[random].a3
            gamebtn4.innerText = arrayquiz[random].ac
            gamebtn1.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "wrong()")
            gamebtn4.setAttribute("onclick", "correct()")
            break;
        case 1:
            gamebtn1.innerText = arrayquiz[random].a2
            gamebtn2.innerText = arrayquiz[random].a3
            gamebtn3.innerText = arrayquiz[random].ac
            gamebtn4.innerText = arrayquiz[random].a1
            gamebtn1.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "wrong()")
            gamebtn4.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "correct()")
            break;
        case 2:
            gamebtn1.innerText = arrayquiz[random].a3
            gamebtn2.innerText = arrayquiz[random].ac
            gamebtn3.innerText = arrayquiz[random].a1
            gamebtn4.innerText = arrayquiz[random].a2
            gamebtn1.setAttribute("onclick", "wrong()")
            gamebtn4.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "correct()")
            break;
        case 3:
            gamebtn1.innerText = arrayquiz[random].ac
            gamebtn2.innerText = arrayquiz[random].a1
            gamebtn3.innerText = arrayquiz[random].a2
            gamebtn4.innerText = arrayquiz[random].a3
            gamebtn4.setAttribute("onclick", "wrong()")
            gamebtn2.setAttribute("onclick", "wrong()")
            gamebtn3.setAttribute("onclick", "wrong()")
            gamebtn1.setAttribute("onclick", "correct()")
            break;
    }
    gamediv.appendChild(gamebtn1)
    gamediv.appendChild(gamebtn2)
    gamediv.appendChild(gamebtn3)
    gamediv.appendChild(gamebtn4)
    i++
}

function correct() {
    alert("YAY!")
    quizmaker()
}

function wrong() {
    alert("Eh...")
    quizmaker()
}
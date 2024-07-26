const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {

    image.addEventListener("click", (e) => {
        
        image.classList.add("active");

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("Start");

        let time = setTimeout(() => {

            gameContainer.classList.remove("Start");
            image.classList.add("active");

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            //generating random number 0 t0 2

            let randomnumber = Math.floor(Math.random() * 3);

            let cpuImages = [
                "./images/rock.png",
                "./images/paper.png",
                "./images/scissor.png",
            ];

            cpuResult.src = cpuImages[randomnumber];

            let cpuValue = ["R", "P", "S"][randomnumber];
            let userValue = ["R", "P", "S"][index];

            let outComes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let outComeValue = outComes[userValue + cpuValue];

            result.textContent =
                userValue === cpuValue
                    ? "Match Draw"
                    : `${outComeValue} Won !! `;
        }, 2500);
    });
});

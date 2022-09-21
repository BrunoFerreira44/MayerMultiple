const config = {
    type: 'slider', // Slider ou Carousel
    startAt: 0, // Começar em qual slide
    focusAt: 0, // Foco em qual slide
    bound: true, // Não deixa espaço em branco nos ultimos slides
    hoverpause: true, // Para o autoplay quando deixa o mouse em cima do card
    animationDuration: 800, // Duração da animação de troca de slide
    autoplay: 5000, // Trocar automaticamente de slide
    rewind: true, // Rebobinar o slider quando chegar ao fim
    rewindDuration: 1500, // Duração da rebobinada
    breakpoints: {
        600: { // Abaixo de
            perView: 1,
            peek: { // - Quantidade de pixels dos slides que vão aparecer
                before: 0,
                after: 40,
            },
        },
        3000: { // Abaixo de
            perView: 2,
            focusAt: 0,
        },
    }
}

new Glide('.glide', config).mount();
window.onload = () => {
    controller.displayResults(model.baseURL)
}

const model = {
    baseURL: "https://pokeapi.co/api/v2/pokemon?limit=50",

    getData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // TODO Show results on page
                controller.displayResults(data, view.main)

                // TODO Next/Prev Buttons

                // TODO Detail view

                // TODO Jump to page


                console.log(data)
            });
    },
}

// https://pokeapi.co/docs/v2#resource-listspagination-section

const view = {
    main: document.querySelector('#pokeList'),

    renderPokemonList(data) {

    }

}

const controller = {
    displayResults(url) {
        // Display list of results within selector
        model.getData(url)
        view.renderPokemonList(data)
    },
}
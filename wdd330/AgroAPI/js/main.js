import {
    buildMap,
    changeMap
} from "./map.js";


    // MAIN FUNCTION CALLER
    function main() {
        // Initial Builds w/Default Values
        window.addEventListener('load', buildMap);


        // Event Listeners
        document.querySelector('#polygonSelector').addEventListener('change', changeMap);
        document.querySelector('#imageTypeSelector').addEventListener('change', changeMap);
    }

main()
let elSearchInput = document.querySelector(".search-input")
let elPokemonList = document.querySelector(".pokemon-list")
let elSelectedData = document.querySelector(".selected-pokemon")

function renderPokemons(arr,list) {
    list.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "w-[250px] text-center bg-gray-400 rounded-md"
        elItem.innerHTML = `
            <img src=${item.img} alt=${item.name} width="200" height="200"/>
            <span class="text-white-400">#${item.num}</span>
            <h2 class="font-bold text-[22px] my-[10px]">${item.name}</h2>
        `
        list.append(elItem)

        elItem.addEventListener("click", function(e){
            elSelectedData.innerHTML = `
                <img src=${item.img} alt=${item.name} width="400" height="400"/>
                <div class="flex flex-col text-center">
                <span class="text-white-400 text-[20px]">#${item.num}</span>
                <h2 class="font-bold text-[22px] my-[10px] text-[40px]">${item.name}</h2>
                </div>
            `
        })
    });
}
renderPokemons(pokemons, elPokemonList)

elSearchInput.addEventListener("input", function(e){
    const value = e.target.value
    const filterData = pokemons.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.num.includes(value))
    renderPokemons(filterData, elPokemonList)
})
// function SingleCoffee(prop) {
//     return (
//         <p>{prop.entireObject.title} --- {prop.entireObject.description}</p>
//     )
// }

//destructured way below
function SingleCoffee({entireObject}) {
    return (
        <p>{entireObject.title} --- {entireObject.description}</p>
    )
}


function CoffeesComponent() {

    const coffeesArray = [
        { title: 'Americano', description: 'Dark tasy yummy coffee' },
        { title: 'Cafecito', description: 'Dark tasy yummy coffee' },
        { title: 'Cortadito', description: 'Dark tasy yummy coffee' },
        { title: 'Cubano', description: 'Dark tasy yummy coffee' },
        { title: 'Cappuccino', description: 'Dark tasy yummy coffee' },
        { title: 'Latte', description: 'Dark tasy yummy coffee' },
        { title: 'Mocha', description: 'Dark tasy yummy coffee' },
        { title: 'Espresso', description: 'Dark tasy yummy coffee' },
    ]

    
    return (
        <div>
            <h1>Coffees Component here</h1>
            {coffeesArray.map((oneCoffee) => {
                console.log(oneCoffee)
                return (
                    // <SingleCoffee title={oneCoffee.title} description={oneCoffee.description}/>
                    <SingleCoffee entireObject={oneCoffee} />
                )
            })}
            <p>each coffee title Americano</p>
            <p>each coffee title Cafecito</p>
            <p>each coffee title Cortadito</p>
        </div>

    )
}
export default CoffeesComponent
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
        { id:1 ,title: 'Americano', description: 'Dark tasy yummy coffee' },
        { id:2 ,title: 'Cafecito', description: 'Dark tasy yummy coffee' },
        { id:3 ,title: 'Cortadito', description: 'Dark tasy yummy coffee' },
        { id:4 ,title: 'Cubano', description: 'Dark tasy yummy coffee' },
        { id:5 ,title: 'Cappuccino', description: 'Dark tasy yummy coffee' },
        { id:6 ,title: 'Latte', description: 'Dark tasy yummy coffee' },
        { id:7 ,title: 'Mocha', description: 'Dark tasy yummy coffee' },
        { id:8 ,title: 'Espresso', description: 'Dark tasy yummy coffee' },
    ]

    
    return (
        <div>
            <h1>Coffees Component here</h1>
            {/*coffeesArray.map((oneCoffee) => {
                console.log(oneCoffee)
                return (
                    // <SingleCoffee title={oneCoffee.title} description={oneCoffee.description}/>
                    <SingleCoffee entireObject={oneCoffee} />
                )
            })*/}
            {coffeesArray.map(oneCoffee => <SingleCoffee key={oneCoffee.id} entireObject={oneCoffee} />)}
            <button onClick={() => console.log('Do you love react yet?')}>Get some data </button>
        </div>

    )
}
export default CoffeesComponent
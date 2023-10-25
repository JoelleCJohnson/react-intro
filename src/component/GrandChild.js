
const GrandChild = (props) => {
    const yearBorn = 2023 - props.age
    return (
        <div>
            I'm GrandKid {props.firstName}
            and I'm {props.age} years old! I was born in {yearBorn}. This is my pet {props.pet}
        </div>
    )
}

function ChildComponent() {
    return (
        <div>
            <h2>Hi I'm child</h2>
            <GrandChild firstName={'Joe'} age={10} pet={'🐢'} />
            <GrandChild firstName={'John'} age={12} pet={'🐶'} />
            <GrandChild firstName={'Rosie'} age={1} pet={'🐈'} />
            <GrandChild firstName={'Timmy'} age={3} pet={'🐹'} />
        </div>
    )
}

export default ChildComponent
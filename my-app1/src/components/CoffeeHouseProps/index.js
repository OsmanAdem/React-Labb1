import './style.css'

function CoffeeHouseProps(props) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#F5F5F5'
            }}
        >
            <h1 className="props">Welcome to {props.Coffee}!</h1>
        </div>
    )
}

export default CoffeeHouseProps

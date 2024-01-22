function Main(props) {
    return(
        <div>
            <h1>Stock Data For Today</h1>
            <ul>
                <li>Microsoft: {props.microsoftValue}</li>
                <li>Twitter: {props.twitterValue}</li>
                <li>Amazon: {props.amazonValue}</li>
            </ul>
        </div>
    )
}

export default Main;
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean

}


export const Greet = (props: GreetProps) =>{
    const {messageCount = 0 } = props
    return(
        <div>
            {props.isLoggedIn ? `<h1> Hello World, ${props.name}! You are ${messageCount} years old </h1>`:
            'Welcome Programming' }
        </div>
    )    
}
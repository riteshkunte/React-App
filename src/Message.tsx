//PascalCasing naming convention folled
function Message(){
    //JSX: javascript xml
    //babeljs.io --> convert the html code into js component
    const name = 'Ritesh';
    if(name)
        return <h1>Hello World  {name}</h1>
    else
    return <h1>Hello World </h1>
}

export default Message;
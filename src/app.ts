// ? other way to define decorator function
function Logger ( logString: string ) {
    return function ( constructor: Function ) {
        console.log( '1' )
        console.log( logString )
        console.log( constructor )
    }
}


function WithTemplate ( template: string, hookId: string ) {
    return function ( constructor: any ) {
        console.log( '2' )
        const hookEl = document.getElementById( hookId )!
        const p = new constructor()
        if ( hookEl ) {
            hookEl.innerHTML = template
            hookEl.querySelector( 'h2' )!.textContent = p.name
        }
    }
}



@Logger( 'LOGGING - PERSON' )
@WithTemplate( '<h2>My first hook</h2>', 'app' )
class Person {
    name = 'Max'
    constructor () {
        console.log( 'Creating person object...' )
    }
}

const person = new Person()
console.log( person )
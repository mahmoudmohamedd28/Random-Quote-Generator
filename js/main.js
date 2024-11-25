// m7tageen container m7mel kol 7aga w m3 kol dosa ytl3 haga random 
// bs hnkhzn ezay ba2a ==> Container tany

// container fady
var container=``        

// container feh el quotes
var ArrQuotes =[ `<p class="fs-1">
                    “Be yourself; everyone else is already taken.”
                </p>
                <p class="fs-1" >-- Oscar Wilde</p>`
                ,` <p class="fs-1">
                    “So many books, so little time.”
                </p>
                <p class="fs-1">-- Frank Zappa</p>` ,`<p class="fs-1">
                    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
                </p>
                <p class="fs-1" >-- Albert Einstein</p>` ,`<p class="fs-1">
                    “Don’t walk in front of me… I may not follow
                    Don’t walk behind me… I may not lead
                    Walk beside me… just be my friend”
                </p> 
                <p class="fs-1" >-- Albert Camus</p>`,`<p class="fs-1">
                “You only live once, but if you do it right, once is enough.”
                </p>
                <p class="fs-1" >-- Mae West</p>`,`<p class="fs-1">
                 “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
                 </p>
                 <p class="fs-1" >-- Maya Angelou</p>`,`<p class="fs-1">
                “A friend is someone who knows all about you and still loves you.”
                </p>
                <p class="fs-1" >-- Elbert Hubbard</p>`]

// kol dosa ==> wahda bs ely tzhr
function NewQuote () {
    
    for(  i=0  ;  i<ArrQuotes.length  ; i++ ){
        
        var x = Math.floor(Math.random(i) * 7)
        
        if (x==Math.floor(Math.random(i-1) * 7) ){
            x==Math.floor(Math.random(i+3) * 7); 
        }
        else if (x==Math.floor(Math.random(i+1)*7) ) {
            x==Math.floor(Math.random(i+5) * 7) 
        }
        
        container = ArrQuotes[x]
    }
        
    document.getElementById('quotes').innerHTML = container
    console.log(container);
    
}
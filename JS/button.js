const parentButtonDiv = document.querySelector('.ButtonDiv')
const childButtonDiv = parentButtonDiv.querySelectorAll('button') 
const Title = document.querySelector('.Title')

const button = []

button.push(Title)

childButtonDiv.forEach((buttons) => {
  button.push(buttons)
})
 




const textContent = document.querySelector('.textContent');
const contentDiv = textContent.querySelectorAll('article');


// button = là ou est stocké les boutons
// contentDiv = là est stocké le contenu de chaque catégorie


function repeatButtonForEach() {
  let showContentDiv;
 
        button.forEach((buttons, index) => {
           
                if (contentDiv[index].classList.contains("show")) {
                  
                  showContentDiv = contentDiv[index]
                  
                }
                
                buttons.addEventListener("click", function(){
                          
                  if (contentDiv[index].classList.contains("hidden")) {
                    if (showContentDiv) {
                      showContentDiv.classList.remove("show");
                      showContentDiv.classList.add("hidden");                  
                    }

                    
                    setTimeout(() => {
                      contentDiv[index].classList.remove("hidden");
                      contentDiv[index].classList.add("show");
                    }, 501);
                    
            
                    showContentDiv = contentDiv[index];
                  } else {
                    return
                  }
                  
                })
                
        })

}

repeatButtonForEach()
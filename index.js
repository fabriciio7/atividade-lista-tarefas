function abrirGaveta(){
    let overflow = document.querySelector("#overflow");
    let gaveta = document.querySelector("#gaveta");
    overflow.classList.add("ativa");
    gaveta.classList.add("ativa")
}

function fecharGaveta(){
    let overflow = document.querySelector("#overflow");
    let gaveta = document.querySelector("#gaveta");
    overflow.classList.remove("ativa");
    gaveta.classList.remove("ativa")
}

function confirmarDeletar(){
    confirm("Deseja realmente apagar?"); 
}


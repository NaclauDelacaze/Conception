const Users = {

    utilisateur:{
        "email":[],
        "nom": [],
        "password":[],
        "message":[],
        "id":[]

    }
}



$(document).ready(function(){

    $("#subm").click(function(){


        let email = $("#email").val()
        let nom = $("#username").val()
        let msg = $("#message").val()
        let password = $("#mdp").val()

        if(email && nom && msg && password != ""){

            Users.utilisateur.email.push(email)
            Users.utilisateur.nom.push(nom)
            Users.utilisateur.message.push(msg)
            Users.utilisateur.password.push(password)

        }else{
            console.log("remplir les champs")
        }
    

        console.log(Users)
    })

    $("#btn2").click(function(){


        let newemail= document.getElementById("email2").value
        let newpassword= document.getElementById("password2").value
        let newemessage= document.getElementById("famillier").value


        for (let index = 0; index < Users.utilisateur.email.length && 
            index < Users.utilisateur.message.length && 
            index < Users.utilisateur.password.length ; index++ ) {

            if (newemail== Users.utilisateur.email[index] 
                && newpassword==Users.utilisateur.password[index]
                && newemessage==Users.utilisateur.message[index]){
            
                // document.body.innerHTML="<h1> Bienvenue sur le site Savana</h1><br>"
                

                // document.write('<h1> Bienvenue sur le site Savana</h1><br>')
                // document.write('<a href="./page2.html"><button id="btn3">Cliquez-moi!</button></a>')
              
                window.open("./page2.html")
                         
                document.write('<h1> Bienvenue sur le site Savana</h1><br>')
                document.write('<a href="./page2.html"><button id="btn3">Cliquez-moi!</button></a>')
              

                }else{

                alert("veuillez ressaisir vos données!")
            }        
            
        }

    })

})



// alert("bienvenue")


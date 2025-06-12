      let na=document.getElementsByTagName("nav")
        let myitem=document.getElementsByClassName("right");

        let ico=document.getElementsByClassName("Brazil");


        let contact=document.querySelector("#contact-form")
        let uname=document.querySelector("#name-form")
        let email=document.querySelector("#email-form")
        let message=document.querySelector("#textarea-form")
        let people=document.querySelector("#number-form")
        let dates=document.querySelector("#date-form")
        let form_parent=document.querySelector(".sec5 .innerr")
        


       if(contact)
       {
         contact.addEventListener("submit",(e)=>{
            e.preventDefault()
             let oldError = form_parent.querySelector(".error");
      if (oldError) {
        console.log(oldError); 
        oldError.parentNode.removeChild(oldError);
      }
      let error=[];
      
            if(uname.value.length<3)
            {
                error.push("Name Should Be Atleast 4 Alphabet")
            }
            if(!email.value.includes("@") && email.value.length<10)
            {
                error.push("Enter Valid Email")
            }
            if(message.value.length<10)
            {
                error.push("Message Length is too Short")
            }
            if(parseInt(people.value)>6)
            {
                error.push("Can't Edit More Than 6 People")
            }
            if(parseInt(people.value) <1)
            {
                error.push(" 1 Is Minimum")
            }
            if (error.length > 0) {
        let adder = document.createElement("section");
        adder.setAttribute("class", "error");
        adder.style.width="100%"
        adder.style.padding = "20px";
        adder.style.margin="20px 0";
        adder.style.boxShadow="5px 10px  20px #d5dbdb "
        adder.style.color = "black";

        let list = document.createElement("ul");
        adder.append(list);
        form_parent.append(adder);

        error.forEach((msg) => {
          let li = document.createElement("li");
          li.innerText = msg;
          list.append(li);
        });
      } else {
        alert("Form submitted successfully!");
        contact.reset();
      }
            
        })
       }
    
        ico[0].addEventListener("click",()=>{
            ico[0].classList.toggle("fa-xmark");
             ico[0].classList.toggle("fa-bars");
             console.log("run")
             myitem[0].classList.toggle("navmov")
           
        })
let upr=document.querySelectorAll(".box_sec3 .num")
let containers=document.querySelector(".box_sec3")

console.log(containers.offsetHeight)
let run=false
console.log()
window.addEventListener("scroll",()=>{
    if(window.scrollY>containers.offsetTop-containers.offsetHeight-800 && run==false)
    {
        run=true;
        let stop=false
if(!stop)
{
stop=true
 upr.forEach((ron)=>
    {
        let target=parseInt(ron.getAttribute("data-count"))
        let count=0
        let interr=setInterval(()=>
{
   
    if(count<target)
{
    ron.innerHTML=++count;
}
else {
        clearInterval(interr);
    }
},40)
    })

}
    }
})

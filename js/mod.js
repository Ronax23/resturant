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
        

    //   form validation
       if(contact)
       {
         contact.addEventListener("submit",(e)=>{
            e.preventDefault()
             let oldError = form_parent.querySelector(".error");
      if (oldError) {
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
    


    //    nav tricks
        ico[0].addEventListener("click",()=>{
            ico[0].classList.toggle("fa-xmark");
             ico[0].classList.toggle("fa-bars");
             console.log("run")
             myitem[0].classList.toggle("navmov")
           
        })



        // counter
let upr=document.querySelectorAll(".box_sec3 .num")
let containers=document.querySelector(".box_sec3")

let run=false
if(containers)
{
    window.addEventListener("scroll",()=>{
    if(window.scrollY>containers.offsetTop-containers.offsetHeight-500 && run==false)
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
}


// contact form
let contact_parent=document.querySelector(".contact-sec2 .inner")
let contact_forms=document.querySelector("#contactus-form")


if(contact_forms)
{
    let namer=contact_forms.querySelector("#named-form")
let emailer=contact_forms.querySelector("#emailed-form")
let subjecter=contact_forms.querySelector("#subject-form")
let tex=contact_forms.querySelector("#textareas-form")
contact_forms.addEventListener("submit",(e)=>{
    e.preventDefault()
    let errors=document.querySelector(".error")
    if(errors)
    {
        errors.remove()
    }
     let errorTray=[]

     if(namer.value.length<4)
     {
        errorTray.push("Name Length Too Short")
     }
     if(emailer.value.length<8|| !emailer.value.includes("@"))
     {
        errorTray.push("Enter Valid Email Address")
     }
     if(subjecter.value.length<4)
     {
        errorTray.push("Subject Should Have Atleast 4 Alphabet")
     }
     if(tex.value.length<4)
     {
        errorTray.push("Message Should Have Atleast 4 Alphabet")
     }

     if(errorTray.length>0)
     {
        let doms=document.createElement("ul")
        doms.setAttribute("class","error")
        doms.style.width="100%"
        doms.style.padding = "20px";
        doms.style.margin="20px 0";
        doms.style.boxShadow="5px 10px  20px #d5dbdb "
        doms.style.color = "black";
        doms.style.textAlign="left"
        contact_parent.append(doms)
        errorTray.forEach(alias=>{
            let lists=document.createElement("li")
            lists.innerHTML=alias
            doms.append(lists)
        })
     }
     else{
        alert("Submitted")
        contact_forms.reset();
     }
})
}



    // setter dats
      let lunch=[5,6,7]
      let bf=[0,3,5]
      let dinner=[3,0,2]
     
        let tray=document.querySelectorAll(".sec4 .con4 .div30")
        let content=document.querySelectorAll(".sec4 .con4-part")

       if(tray)
       {
         tray.forEach((etr,i)=>{
            
            etr.addEventListener("click",()=>{
                tray.forEach(rexha=>{rexha.classList.remove("active_border")})
                etr.classList.add("active_border")
                     if(i==0)
                     {
                        content.forEach(lover=>{lover.style.display="flex"})
                        lunch.forEach(vw=>{ content[vw].style.display="none"})
                     }
                     else if(i==1)
                     {
                        content.forEach(lover=>{lover.style.display="flex"})
                        bf.forEach(vw=>{ content[vw].style.display="none"})
                     }
                     else if(i==2)
                     {
                        content.forEach(lover=>{lover.style.display="flex"})
                        dinner.forEach(vw=>{ content[vw].style.display="none"})
                     }
            })
        })
       }
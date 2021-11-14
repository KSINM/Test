const form = document.querySelector("form"),
      plan_1 = document.querySelector(".plan_1"),
      plan_1Price = document.querySelector(".plan_1Price"),
      plan_2 = document.querySelector(".plan_2"),
      plan_2Price = document.querySelector(".plan_2Price"),
      plan_3 = document.querySelector(".plan_3"),
      plan_3Price = document.querySelector(".plan_3Price"),
      result = document.querySelector(".chekedResult"),
      howInp = document.querySelector(".how"),
      howResInp = document.querySelector(".howResult");
   

function checkedFun(plan1,result1,howInp1,howResInp1,plan_1Price1){
    if(plan1.checked){
        result1.innerHTML = `Selected plans: ${plan1.value}`
        howResInp1.innerHTML = `$${howInp1.value * plan_1Price1.innerText} US`
        howResInp1.classList.add("blue")
    }
}

form.addEventListener("input", () =>{
    checkedFun(plan_1,result,howInp,howResInp,plan_1Price)
    checkedFun(plan_2,result,howInp,howResInp,plan_2Price)
    checkedFun(plan_3,result,howInp,howResInp,plan_3Price)
})


            

let input=document.querySelector(".email");
let submit=document.querySelector(".subscribe");
let dismiss=document.querySelector(".dismiss");
let msg=document.querySelector(".error");
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


document.addEventListener("DOMContentLoaded",()=>{
	submit.addEventListener("click",()=>{
		if(!input.value)
		{
			input.classList.add("error_sub");
			msg.classList.add("show");
		}
		else if(emailRegex.test(input.value)){
			document.querySelector(".email_success").textContent=input.value;
			input.value="";
			if(input.classList.contains("error_sub"))
				input.classList.toggle("error_sub");
			if(msg.classList.contains("show"))
				msg.classList.toggle("show");	
			document.querySelector(".signUpForm").classList.toggle("hide");
			document.querySelector(".successContainer").classList.toggle("hide");	
		}
	});
	dismiss.addEventListener("click",()=>{
		document.querySelector(".signUpForm").classList.toggle("hide");
		document.querySelector(".successContainer").classList.add("hide");

	})

});

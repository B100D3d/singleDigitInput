export class SinChar{constructor(s){this.digits=Array.from(document.querySelectorAll(s.selector)),this.resultingPassInput=document.getElementById(s.hiddenInputId),this.filledPass=!!this.resultingPassInput.value,this.fillRecieved=!1,this.recievedPass=[],this.isFilled=!1,s.debug?this.debugMode=s.debug:this.debugMode=!1,s.filledClass&&(this.filledClass=s.filledClass),this.filledPass&&this.fillRecieved&&(this.recievedPass=this.resultingPassInput.value.split(""))}processCodeInput(s){this.digits.forEach((e,i)=>{this.filledPass&&this.fillRecieved&&(e.value=this.recievedPass[i]),e.addEventListener("keydown",s=>{if("Backspace"!==s.key&&i>=0&&i<this.digits.length-1)e.value=s.key,this.filledClass&&""!==e.value&&e.classList.add(this.filledClass),this.digits[i+1].focus(),s.preventDefault(),s.stopPropagation();else if("Backspace"!==s.key&&i===this.digits.length-1)return;if(this.filledClass&&"Backspace"===s.key&&(e.classList.remove(this.filledClass),this.debugMode&&console.log("keydown","digit.value.length === 0:",0===e.value.length,"this.filledClass:",this.filledClass,s.key,e.classList)),1===e.value.length&&"Backspace"===s.key&&i>0)return this.isFilled=!1,void(e.value="");if(0===e.value.length&&"Backspace"===s.key&&i>0)this.isFilled=!1,this.digits[i-1].value="",this.digits[i-1].focus();else if("Backspace"===s.key&&0===i)return void(this.isFilled=!1)}),e.addEventListener("keyup",t=>{if(this.debugMode&&console.log("keyup",this.filledClass,e.value,i),this.filledClass&&"Backspace"===t.key&&(e.classList.remove(this.filledClass),this.debugMode&&console.log("keydown","digit.value.length === 0:",0===e.value.length,"this.filledClass:",this.filledClass,t.key,e.classList)),i===this.digits.length-1?/\d/.test(e.value)||(this.debugMode&&console.log("index === this.digits.length - 1",i),e.value="",/\d/.test(this.digits[i-1].value)||(this.digits[i-1].value="",this.digits[i-1].focus())):0===i?(this.debugMode&&console.log("index === 0",i),/\d/.test(e.value)||(e.value="")):i>0&&i<this.digits.length-1&&(this.debugMode&&console.log("index > 0 && index < this.digits.length - 1",i),/\d/.test(this.digits[i-1].value)||(this.digits[i-1].value="",this.digits[i-1].focus())),this.resultingPassInput.value="",this.digits.forEach(s=>{this.resultingPassInput.value+=s.value,this.debugMode&&console.log("result: ",this.resultingPassInput.value)}),s&&!this.isFilled&&this.resultingPassInput.value.length===this.digits.length)this.isFilled=!0,s();else{if(this.isFilled||this.resultingPassInput.value.length!==this.digits.length)return;this.debugMode&&console.log("execute action with value: ",this.resultingPassInput.value),this.isFilled=!0}})})}}

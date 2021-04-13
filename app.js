const countdownEl = document.getElementById('countdown')




// botoes
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btnf = document.getElementById('btnf')
const btnc = document.getElementById('btnc')

// muda os textos e adiciona o desafio
const xp = document.getElementById('xp')
const Experience = document.getElementById('Experience')
const descricao = document.getElementById('descricao')
const challengeNoActive = document.querySelector('.challengeNoActive')
const challengeActive = document.querySelector('.challengeActive')
const img = document.getElementById('img')

let Level = document.querySelector('.level').innerText
const levelup = document.querySelector('.level')
let level =  Number (Math.floor(Level.replace(/[^\d,]/g, '')));

 

// autoliza os desafio completo
const Completos = document.getElementById('completos')
let experienceCor = document.querySelector('.experienceCor')
let currentExperience = document.querySelector('.currentExperience')





btn2.style.display ='none'
const startingMinutes = 1;
let time = startingMinutes * 60;
let mais = 1
let valor = -99
let complete = false
let colabJson = `{"abc":[`+
`{"desafio": "Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.","img":"eye",
"xp":40},`+
`{"desafio": "Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.","img": "body",
"xp":140},`+
`{"desafio": "  Olhe o mais longe possível durante 2 minutos", "img": "eye",
"xp":220},`+
`{"desafio": "Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.","img": "body",
"xp":200}`+
`]}`
console.log(colabJson);

let c_obj = JSON.parse(colabJson)
console.log(c_obj.abc.length);
Notification.requestPermission(); 

const carproto = {
     getColo(){

       return   this.color
     }
}
let h = Object.create(carproto)

// test de herança
class Cat {
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}
const myCat  = new  Cat('loki')
console.log(myCat.getName());

const makecat = nome => ({
    getNome: () => nome
})
const mycat = makecat('loki')
console.log(mycat.getNome());

// ate aki
const a ={
    primeiro(){
        let randomChallenge = Math.floor(Math.random() * c_obj.abc.length)
        let randomXP = c_obj.abc[randomChallenge].xp
        let randomDesafio = c_obj.abc[randomChallenge].desafio
        let randomImg = c_obj.abc[randomChallenge].img
        xp.innerHTML = `Ganhe ${randomXP} de xp`,
        descricao.innerHTML = `${randomDesafio}`,
        img.src = ` icons/${randomImg}.svg `
        return randomXP ,randomDesafio,randomImg
    }
}
// outro teste de herança
const adicionaOsDesadios = {
    d(){
        
        return 3
        
    }
}
const c = {

  treceiro(){
  
     
     console.log('facil');
  }
}
 const obj = {
     ...a,
     ...c
 }
 // ate aki


function radom() {
let randomChallenge = Math.floor(Math.random() * c_obj.abc.length)
let randomXP = c_obj.abc[randomChallenge].xp
let randomDesafio = c_obj.abc[randomChallenge].desafio
let randomImg = c_obj.abc[randomChallenge].img


console.log(randomXP,'aaa');
 xp.innerHTML = `Ganhe ${randomXP} de xp`
 descricao.innerHTML = `${randomDesafio}`
 img.src = ` icons/${randomImg}.svg `




 if (Notification.permission === 'granted'){
     new Notification('Novo desafio!',
     {
         body: `Valendo ${randomXP} de xp.`,
         
         
     })
 
 }





}

function levelUp() {
   level++
   levelup.innerHTML = `level ${level}`
}

btnc.addEventListener('click',()=>{
    // reseta os botoes
    btn2.style.display ='none'
    btn3.style.display= 'none'
    btn.style.display = 'flex'
    
    // autoaliza os desafios completos 
    mais ++
    Completos.innerHTML = `${mais}`
     // converte os numeros

     var convertXP = document.getElementById('xp').innerText;
     var NumberXP = Number (convertXP.replace(/[^\d,]/g, ''));
  
     var convertcurrentExperience = currentExperience.innerText    
     let NumbercurrentExperience = Number (convertcurrentExperience.replace(/[^\d,]/g, ''));
     console.log(NumbercurrentExperience);
     
     
     
    
    //  var convertDesafiosCompletos = document.getElementById('completos').innerText;
    //  var NumberDesafiosCompletos = convertDesafiosCompletos.replace(/[^\d,]/g, '');
 
    challengeNoActive.style.display = 'flex'
    challengeActive.style.display = 'none'
   
    let experienceToNextLevel = Math.pow((level+1)*4,2)
    
    let finalExperience = NumbercurrentExperience + NumberXP
    let finalExperienceConvert = Math.abs(finalExperience); 
    let parcentToNextLevel = Math.floor(Math.round(NumbercurrentExperience *100) / experienceToNextLevel);
    if(level < 4){
        parcentToNextLevel = Math.floor(Math.round(NumbercurrentExperience *100) / experienceToNextLevel + finalExperience/100 );
        console.log(parcentToNextLevel,'saiu');
    }
    Experience.innerHTML = `${experienceToNextLevel} xp`
    experienceCor.style.width = `${parcentToNextLevel}%`
    currentExperience.innerHTML = `${finalExperienceConvert} xp`
     
    if(finalExperience > experienceToNextLevel){
        finalExperience = finalExperience - experienceToNextLevel
        experienceCor.style.width = `${parcentToNextLevel}%`
    currentExperience.innerHTML = `${parcentToNextLevel} xp`
        levelUp()
       }
    
   
    console.log(experienceToNextLevel,'experience');
    // muda o visual e o texto 
    // let finalExperience =  Number (NumberXP +experienceToNextLevel) ;
    

    //  let finalExperienceConvert = Math.abs(finalExperience); 
    //  experienceCor.style.width = `${finalExperienceConvert}%`
    //  currentExperience.innerHTML = `${finalExperienceConvert} xp`
    
  
    /*
    if(finalExperience >= experienceToNextLevel) {
        finalExperience = NumberXP - experienceToNextLevel;
        finalExperienceConvert = Math.abs(finalExperience);
        let nivel =  finalExperienceConvert/2+NumberXP
        console.log('nivel:',nivel,'finalnivel',finalExperienceConvert,'valor:', NumberXP);
        experienceCor.style.width = `${finalExperienceConvert}%`
        currentExperience.innerHTML = `${finalExperienceConvert} xp`
      
        console.log('foi',finalExperienceConvert);
        if (level > 3 ) {
            console.log(level,'level');
            let levelup =nivel + NumberXP
            console.log(levelup);
            if(levelup >= finalExperienceConvert){
                experienceCor.style.width = `${finalExperienceConvert/100}%`
                console.log('level up');
                levelUp(); 
            }
        }
      
        if(level <= 3){
            levelUp();  
        }
         
    }
    
    console.log(finalExperience,'final');
*/

    
 })


// const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
// const challenge = challenges[randomChallengeIndex];
let b = false;
 const dom = { 
    
 
     play() { 
        minutes = startingMinutes
        time = startingMinutes * 60;
       
        b = false
        complete = false
        
      if(b ==false){
        const a = setInterval(()=>{
        
        btn.style.display = 'none'
        btn2.style.display = 'flex'
        btn2.classList.add('countdownButtonActive')

       
        
        let minutes = Math.floor(time/60)
        let seconds =time % 60;
        time--;
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        
        countdownEl.innerHTML = `${minutes}:${seconds}`

        btn2.addEventListener('click',()=>{
            console.log( 'oi tudo bem')
             clearInterval(a)
             btn2.style.display ='none'
             btn.style.display = 'flex'
             minutes = '01'
             seconds = '00'
             b = true
             desafiosCompletos()
             
           
             console.log(b);
             radom()
            
          
             countdownEl.innerHTML = `${minutes}:${seconds}`
        })
        btnf.addEventListener('click',()=>{
            btn2.style.display ='none'
            btn3.style.display ='none'
            btn.style.display = 'flex'
            minutes = startingMinutes
            time = startingMinutes * 60;
            countdownEl.innerHTML = `${minutes}:${seconds}`
            clearInterval(a)
            challengeNoActive.style.display = 'flex'
            challengeActive.style.display = 'none'

          
        })
     

        const secondsvalid = seconds <= 0 && seconds < 1
        if(minutes <= 0 && minutes < 1 && secondsvalid){
      
       
            clearInterval(a)
            //radom()
            obj.primeiro()
            obj.treceiro()
            btn2.style.display ='none'
            btn.style.display ='none'
            btn3.style.display = 'flex'
            console.log(time);
            challengeNoActive.style.display = 'none'
            challengeActive.style.display = 'flex'
      

            
        }
       },1000)
    }     
     }
 }



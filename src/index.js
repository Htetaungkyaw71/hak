import "./style.css"
import platform from "./img/ground1.png"
import platformSmallTall from "./img/small11.png"
import about from "./img/about.png"
import projects from "./img/projects.png"
import contact from "./img/contact2.png"
import live from "./img/live2.png"
import video from "./img/video.png"
import ask from "./img/ask.png"
import ide from "./img/ide.png"
import github from "./img/github.png"
import football from "./img/football1.png"
import airplane from "./img/airplane.png"
import css from "./img/css1.png"
import js from "./img/js.png"
import python from "./img/python.png"
import skills from "./img/skills.png"
import name from "./img/namee.png"
import thank from "./img/thank.png"
import spriteRunLeft from "./img/spriteRunLeft.png"
import spriteRunRight from "./img/spriteRunRight.png"
import spriteStandRight from "./img/spriteStandRight.png"
import spriteStandLeft from "./img/spriteStandLeft.png"
import background from "./img/background8.png"


let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let scrollOffset = 0;
canvas.width = innerWidth;
canvas.height = innerHeight;
let currentKey;

window.addEventListener('resize',()=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

class Platform {
    constructor({x,y,image}){
        this.position = {
            x,
            y
        }
        this.image = image;
        this.width = 580;
        this.height =  125;
        
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    
    
}
class GenericObject {
    constructor({x,y,image}){
        this.position = {
            x,
            y
        }
        this.image = image;
        this.width = canvas.width;
        this.height =  canvas.height;
        
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    
    
}
class SmallObj {
    constructor({x,y,image}){
        this.position = {
            x,
            y
        }
        this.image = image;
        this.width = 290;
        this.height =  227;
        
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    
    
}
class TextObj {
    constructor({x,y,image}){
        this.position = {
            x,
            y
        }
        this.image = image;
        this.width = 600;
        this.height =  600;
        
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
  
    
}


class ProjectObj {
    constructor({x,y,image,link}){
        this.position = {
            x,
            y
        }
        this.link = link
        this.image = image;
        this.width = 600;
        this.height =  600;
        
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    click(xmouse,ymouse){
        let distance = Math.sqrt((xmouse - this.position.x)*(xmouse - this.position.x)+(ymouse - this.position.y)*(ymouse - this.position.y))
        if(distance < 400 && distance > 300){
            window.open(this.link,'_blank')
        }else{
            player.velocity.y -= 3
        }

    }  
}
class AnimateObj {
    constructor({x,y,image,range}){
        this.position = {
            x,
            y
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.image = image;
        this.width = 600;
        this.height =  600;
        this.range = range
        
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    update = ()=>{
     
        this.draw()  
        if(scrollOffset >= 3200 ){ 
            this.position.y += this.velocity.y;     
            if(this.height + this.position.y + this.velocity.y <= canvas.height){
                this.velocity.y += 0.09;
            }
            else{
                this.velocity.y = 0
            }
        }
             

       
        
    }
    
    
}

let gravity = 0.5;
class Player {
    constructor(){
    
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.frame = 0
        this.width =  66;
        this.height = 150;
        this.sprites = {
            stand:{
                right:getImg(spriteStandRight),
                left:getImg(spriteStandLeft),
                cropWidth:177,
                width:66
            },
            run:{
                right:getImg(spriteRunRight),
                left:getImg(spriteRunLeft),
                cropWidth:341,
                width:127
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = this.sprites.stand.cropWidth
     
      
    } 
    draw = ()=> {
        c.drawImage(this.currentSprite,
        this.currentCropWidth * this.frame,
        0,
        this.currentCropWidth,
        400,
        this.position.x,
        this.position.y,
        this.width,
        this.height
        )
    } 
    update = ()=>{
        this.frame++;
        if(this.frame > 59 &&( this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)){
            this.frame = 0
        }else if(this.frame > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left) ){
            this.frame = 0
        }
     
        this.draw()  
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        if(this.height + this.position.y + this.velocity.y <= canvas.height){
            this.velocity.y += gravity;
        }
        else{
            this.velocity.y = 0
        }
         
        
    }
}

let player;
let platforms;
let generic_obj;
let small_objs;
let text_objs;
let animate_objs;
let projects_objs;
let contact_obj;

function getImg(img){
    const image = new Image()
    image.src = img
    return image    
}

function init(){    
    player = new Player()
    platforms = [
        new Platform({x:-1,y:500,image:getImg(platform)}),
        new Platform({x:580 -5 ,y:500,image:getImg(platform)}),
        new Platform({x:580 *  2  - 10 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 3  - 30 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 4 - 40 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 5 - 50 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 6 - 60 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 7 - 70 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 8 - 80 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 9 - 90 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 10 - 110 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 11 - 110 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 12 - 120 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 13 - 130 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 14 - 140 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 15 - 150 ,y:500,image:getImg(platform)}),
        new Platform({x:580 * 16 - 160 ,y:500,image:getImg(platform)}),
    ]
    animate_objs = [
        new AnimateObj({x:580 * 6.5 - 65,y:-300,image:getImg(airplane)}),
        new AnimateObj({x:580 * 7 - 70,y:-300,image:getImg(css)}),
        new AnimateObj({x:580 * 7.5 - 75,y:-300,image:getImg(js)}),
        new AnimateObj({x:580 * 8 - 80,y:-300,image:getImg(python)}),
    ]
     
    generic_obj = [new GenericObject({x:-1 ,y:-1,image:getImg(background)})]
    small_objs = [
        new SmallObj({x:580 *  2  - 10,y:380,image:getImg(platformSmallTall)}),
        new SmallObj({x:580 *  6  - 60,y:380,image:getImg(platformSmallTall)}),
        new SmallObj({x:580 *  9  - 90,y:380,image:getImg(platformSmallTall)}),
    ]
    text_objs = [
        new TextObj({x:400,y:140,image:getImg(name)}),
        new TextObj({x:580 * 15.5 - 155 ,y:140,image:getImg(thank)}),
        new TextObj({x:580 *  2  - 10,y:160,image:getImg(about)}),
        new TextObj({x:580 *  6  - 60,y:160,image:getImg(skills)}),
        new TextObj({x:580 *  9  - 90,y:160,image:getImg(projects)}),
        new TextObj({x:580 *  3  - 30,y:130,image:getImg(live)}),
        new TextObj({x:580 *  4.5  - 45,y:170,image:getImg(football)}),
        new TextObj({x:580 *  14  - 140,y:125,image:getImg(contact)})
    ]


    projects_objs = [
        new ProjectObj({x:580 *  10  - 100,y:120,image:getImg(video),link:"https://chat-valley.herokuapp.com/"}),
        new ProjectObj({x:580 *  10.8  - 108,y:120,image:getImg(ask),link:"https://askme-sigma.vercel.app/"}),
        new ProjectObj({x:580 *  11.6  - 116,y:120,image:getImg(ide),link:"https://htetaungkyaw71.github.io/Online-IDE/"}),
        new ProjectObj({x:580 *  12.4  - 124,y:120,image:getImg(github),link:"https://github.com/Htetaungkyaw71"}),
    ]
  

}



let keys = {
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}

// animation

function animate(){
    requestAnimationFrame(animate)
    c.fillRect(0,0,canvas.width,canvas.height)

    generic_obj.forEach(g=>{
        g.draw();
    })
    small_objs.forEach(s=>{
        s.draw()
    })
    text_objs.forEach(t=>{
        t.draw()
    })
    projects_objs.forEach(p=>{
        p.draw()
    })
    animate_objs.forEach(a=>{
        a.update();
    })
    platforms.forEach(platform=>{
        platform.draw();
    })
    player.update();

    if((keys.right.pressed && player.position.x < 100 )){
        player.velocity.x = 5
    }else if((keys.left.pressed && player.position.x > 50) || keys.left.pressed && scrollOffset == 0 && player.position.x > 0 ){
        player.velocity.x = -5
  
    }else{
        player.velocity.x = 0
        if(keys.right.pressed){  
            platforms.forEach(platform=>{
                platform.position.x -= 5
            })
            generic_obj.forEach(g=>{
                g.position.x -= 3
            })
            small_objs.forEach(g=>{
                g.position.x -= 5
            })
            text_objs.forEach(t=>{
                t.position.x -= 5
            })
            animate_objs.forEach(a=>{
                a.position.x -= 5
            })
            projects_objs.forEach(p=>{
                p.position.x -= 5
            })

            scrollOffset += 5
        
        }else if(keys.left.pressed && scrollOffset > 0){
            platforms.forEach(platform=>{
                platform.position.x += 5
            })
            generic_obj.forEach(g=>{
                g.position.x += 3
            })
            small_objs.forEach(g=>{
                g.position.x += 5
            })
            text_objs.forEach(t=>{
                t.position.x += 5
            })
            animate_objs.forEach(a=>{
                a.position.x += 5
            })
            projects_objs.forEach(p=>{
                p.position.x += 5
            })
            scrollOffset -= 5
        
        }
        

    }
    if(scrollOffset >= 8290){
        player.velocity.x = 0
        player.position.x = 0
    }
  

    platforms.forEach(platform=>{
        if(player.height + player.position.y <= platform.position.y &&
            player.height + player.position.y + player.velocity.y >= platform.position.y
            && player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
            ){
            player.velocity.y = 0;
           
        }
    })
    small_objs.forEach(platform=>{
        if(player.height + player.position.y <= platform.position.y &&
            player.height + player.position.y + player.velocity.y >= platform.position.y
            && player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
            ){
            player.velocity.y = 0;
        }
    })

      // sprite swith
    if(keys.right.pressed && currentKey == 'right' && player.currentSprite !== player.sprites.run.right){
        player.frame = 1
        player.currentSprite = player.sprites.run.right;
        player.currentCropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width

    }
    else if(keys.left.pressed &&currentKey == 'left' && player.currentSprite !== player.sprites.run.left){
        player.currentSprite = player.sprites.run.left;
        player.currentCropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width
    }
    else if(!keys.left.pressed && currentKey == 'left' && player.currentSprite !== player.sprites.stand.left){
        player.currentSprite = player.sprites.stand.left;
        player.currentCropWidth = player.sprites.stand.cropWidth;
        player.width = player.sprites.stand.width
    }
    else if(!keys.right.pressed && currentKey == 'right' && player.currentSprite !== player.sprites.stand.right){
        player.currentSprite = player.sprites.stand.right;
        player.currentCropWidth = player.sprites.stand.cropWidth;
        player.width = player.sprites.stand.width
    }

   
}


// animation


// control

addEventListener('keydown',({keyCode})=>{
    switch (keyCode) {
        case 87:
            player.velocity.y -= 15
            break;
        case 68:
            keys.right.pressed = true
            currentKey = "right"
            break;
        case 65:
            keys.left.pressed = true
            currentKey = "left"
            break;
        default:
            break;
    }
})  

let touchX = ''
let touchsold = 30
addEventListener('touchstart',(event)=>{
    touchX = event.changedTouches[0].pageX
})
addEventListener('touchmove',(event)=>{
    const swapdistancex = event.changedTouches[0].pageX - touchX;
    if(swapdistancex < touchsold){
        keys.right.pressed = true
        keys.left.pressed = false
        currentKey = "right"
    }else{
        keys.right.pressed = false
        keys.left.pressed = true
        currentKey = "left"
    }
})

addEventListener('touchend',(event)=>{
    keys.right.pressed = false;
    keys.left.pressed = false
})


addEventListener('keyup',({keyCode})=>{
    switch (keyCode) {
        case 87:
            break;
        case 68:
            keys.right.pressed = false
            break;
        case 65: 
            keys.left.pressed = false     
            break;
        default:
            break;
    }
})  

// control
addEventListener('click',(event)=>{
    const rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    projects_objs.forEach(p=>{
        p.click(x,y)
    })
})

init()
animate()



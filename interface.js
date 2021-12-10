class Entity{
    constructor(name){
      this.name=name
    }
}

const mover = {
   move(){
       console.log()
   }
}
const attacker = {
    attack(pass){

    }
}
const hashHealth = {
    taskDamage(amount){

    }
}

class Character extends Entity{
    constructor(name,attackDamage,health){
        super(name)
        this.health=health
        this.attackDamage=attackDamage
    }
}
Object.assign(Character.prototype,mover)
Object.assign(Character.prototype,attacker)

class Wall extends Entity{
    constructor(name,health){
        super(name)
        this.health=health
        
    }
}

Object.assign(Character.prototype,mover)

Wall.move()

class heroAdventure {
    constructor(heroName, heroAge, heroType) {
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }

    attack() {
        if (this.heroType == "mago") {
            console.log(`O ${this.heroType} atacou usando magia`)
        } else if (this.heroType == 'guerreiro') {
            console.log(`O ${this.heroType} atacou usando espada`)
        } else if (this.heroType == 'monge') {
            console.log(`O ${this.heroType} atacou usando artes marciais`)
        } else if (this.heroType == 'ninja'){
            console.log(`O ${this.heroType} atacou usando shuriken`)
        } else {
            return undefined;
        }
    }
}

const newHero = new heroAdventure("Claudio", 32, "guerreiro");
newHero.attack()
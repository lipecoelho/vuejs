new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    runningGame: false,
    logs: [],
    playerScore: 0,
    monsterScore: 0,
    bgProgress: true,
    resultVisible: false,
    activeClass: false,
    msgText: "",
    cure: 3,
    attack: 3,
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    }
  },
  methods: {
    startGame() {
      this.runningGame = true,
      this.logs = [],
      this.playerLife = 100,
      this.monsterLife = 100.
      this.resultVisible = false
      this.cure = 3,
      this.attack = 3;
    },
    attacking(special){
      if(special){
        this.attack--
      }
      this.hurt('monsterLife', 7, 12, special, 'Jogador', 'Monstro', 'alert-danger');
      if(this.monsterLife > 0){
        this.hurt('playerLife', 9, 15, false, 'Monstro', 'Jogador', 'alert-success');
      }
    },
    hurt(prop, min, max, special, source, target, cls) {
      const plus = special ? 5 : 0;
      const hurt = this.getRandomInt(min + plus, max + plus);
      this[prop] = Math.max(this[prop] - hurt, 0); // nunca será negativo
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
      
    },
    heal(min, max){
      const heal = this.getRandomInt(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100)
      this.registerLog(`Jogador ganhou força de ${heal}.`, 'alert-success')
    },
    healAndHurt(){
      this.cure--
      // if(this.cure <= 0){
      //   alert("SEM CURA!")
      // }else{
      this.heal(10, 15);
      this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'alert-danger');
      // }
    },
    getRandomInt(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    },
    resetGame() {
      this.logs = [],
      this.runningGame = !this.runningGame, 
      this.playerLife = 100, 
      this.monsterLife = 100, 
      this.resultVisible = false,
      this.cure = 3,
      this.attack = 3;
    },
    registerLog(text, cls) {
      this.logs.unshift({text, cls})
    },
    hideMsg(activeClass){
      if(activeClass){
        setTimeout(()=>{
          this.activeClass = false;
        },4000)
      }
    }
  },
  watch: {
    hasResult(value) {
      if(value) {
        this.runningGame = false;
        if(this.playerLife == 0){this.monsterScore++ }
        if(this.monsterLife == 0){this.playerScore++ }
      }
    }
  }
});
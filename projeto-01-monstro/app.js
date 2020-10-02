new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    playerScore: 0,
    monsterScore: 0,
    bgProgress: true,
    resultVisible: false,
    runningGame: false,
    playerWinner: false,
    monsterWinner: false,
    ko: false,
    cure: 3,
    attack: 3,
    activeClass: false,
    alertDanger: false,
    alertSuccess: false,
    msgText: ""
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    }
  },
  methods: {
    startGame() {
      this.runningGame = true,
      this.playerLife = 100,
      this.monsterLife = 100.
      this.resultVisible = false,
      this.cure = 3,
      this.attack = 3;
      this.$refs.logs.style.display = "none"
      this.$refs.logs.firstElementChild.innerHTML = ""
    },
    attacking(special){
      this.hurt('playerLife', 9, 15, false);
      this.hurt('monsterLife', 7, 12, special);
    },
    hurt(prop, min, max, special) {
      const plus = special ? 5 : 0;
      const hurt = this.getRandomInt(min + plus, max + plus);
      this[prop] = Math.max(this[prop] - hurt, 0); // nunca será negativo
    },
    getRandomInt(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value)
      //return Math.floor(Math.random() * Math.floor(max));
    },
    resetGame() {
      this.runningGame = !this.runningGame, 
      this.playerLife = 100, 
      this.monsterLife = 100, 
      this.resultVisible = false,
      this.cure = 3,
      this.attack = 3;
      this.$refs.logs.style.display = "none"
      this.$refs.logs.firstElementChild.innerHTML = ""
    },
  },
  watch: {
    hasResult(value) {
      if(value) this.runningGame = false;
    }
  }
});
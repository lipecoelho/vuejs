new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    playerScore: 0,
    monsterScore: 0,
    colorLife: "green",
    colorDead: "red",
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
    },

    progressPlayer() {
      return {
        width: this.playerLife < 0 ? 0 : this.playerLife + '%',
        backgroundColor: this.playerLife > 25  ? 'green' : 'red'
      }
    },
    
    progressMonster() {
      return {
        width: this.monsterLife < 0 ? 0 : this.monsterLife + '%',
        backgroundColor: this.monsterLife > 25  ? 'green' : 'red'
      }
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
    btnAttack() {
      const monsterAttack = getRandomInt(12);
      const playerAttack = getRandomInt(15);

      this.playerLife =  this.playerLife <= 0 ? 0 : (this.playerLife - playerAttack);//
      this.monsterLife =  this.monsterLife <= 0 ? 0 : (this.monsterLife - monsterAttack);//
      // this.playerLife =  this.playerLife <= 0 ? 0 : (this.playerLife - 100);//
      // this.monsterLife =  this.monsterLife <= 0 ? 0 : (this.monsterLife - 98);//

      if(this.playerLife <= 0 && this.monsterLife >= 0){
        this.monsterScore++;
        //this.monsterWinner = true;
      }

      if(this.monsterLife <= 0 && this.playerLife >= 0){
        this.playerScore++;
        //this.playerWinner = true;
      }

      if(this.monsterLife <= 0 || this.playerLife <= 0){
        this.runningGame = false;
        this.resultVisible = true;
        this.playerLife = this.playerLife <= 0 ? 0 : this.playerLife;
        this.monsterLife = this.monsterLife <= 0 ? 0 : this.monsterLife; 
      }

      if(this.playerLife <= 0 && this.monsterLife <= 0) {
        this.ko = true;
        this.monsterScore++;
        this.playerScore++;
        //this.playerWinner = false; //player vence
        //this.monsterWinner = false;
      }
      
      console.log(this.playerWinner,this.monsterWinner)
      var logPlayer = 
        '<div class="my-2 d-flex"><div class="btn btn-sm btn-light w-100 rounded-right-0">Jogador atingiu o MONSTRO com '+ monsterAttack +'</div>'
        +
        '<div class="btn btn-sm btn-light w-100 mb-0 rounded-left-0 ">Monstro atingiu o JOGADOR com '+ playerAttack +'</div></div>';
        this.$refs.logs.style.display = 'block';
        this.$refs.logs.firstElementChild.innerHTML = logPlayer + this.$refs.logs.firstElementChild.innerHTML;
    },

    btnSpecialAttack(){
      const monsterSpecialAttack = getRandomInt(30);
      const playerSpecialAttack = getRandomInt(15);

      if(this.attack <= 0) {
        this.activeClass = true;
        this.alertDanger = true;
        this.msgText = "Seus ATAQUES ESPECIAIS esgotaram!"
        setTimeout(()=>{this.activeClass = false,this.alertDanger = false, this.msgText = ""},3000);
      }

      if(this.attack > 0 && this.playerLife < 60) {
        this.playerLife =  this.playerLife <= 0 ? 0 :( this.playerLife - playerSpecialAttack);
        this.monsterLife =  this.monsterLife <= 0 ? 0 : (this.monsterLife - monsterSpecialAttack);

        if(this.playerLife <= 0 && this.monsterLife >= 0){
          this.monsterScore++;
         //this.monsterWinner = true;
        }
  
        if(this.monsterLife <= 0 && this.playerLife >= 0){
          this.playerScore++;
          //this.playerWinner = true;
        }
  
        if(this.monsterLife <= 0 || this.playerLife <= 0){
          this.runningGame = false;
          this.resultVisible = true;
          this.playerLife = this.playerLife <= 0 ? 0 : this.playerLife;
          this.monsterLife = this.monsterLife <= 0 ? 0 : this.monsterLife; 
        }
  
        if(this.playerLife <= 0 && this.monsterLife <= 0) {
          this.ko = true;
          this.monsterScore++;
          this.playerScore++;
          // this.playerWinner = false; //player vence
          // this.monsterWinner = false;
        }


        this.attack--;
        var logPlayer = 
        '<div class="my-2 d-flex shadow-md shadow-sm"><div class="btn btn-sm btn-light w-100 mb-2 rounded-right-0">Jogador atingiu o MONSTRO com '+ monsterSpecialAttack +'</div>'
        +
        '<div class="btn btn-sm btn-light w-100 mb-2 rounded-left-0">Monstro atingiu o JOGADOR com '+ playerSpecialAttack +'</div></div>';
        this.$refs.logs.style.display = 'block';
        this.$refs.logs.firstElementChild.innerHTML = logPlayer + this.$refs.logs.firstElementChild.innerHTML;
      } 

      if(this.playerLife > 60) {
        this.activeClass = true
        this.alertDanger = true
        this.msgText = "Você só pode usar o ATAQUE ESPECIAL com 60% ou menos de vida!"
        setTimeout(()=>{this.activeClass = false,this.alertDanger = false, this.msgText = ""},3000);
      } 

      if(this.attack >= 1 && this.monsterLife < 60) {
        this.activeClass = true;
        this.alertSuccess = true;
        this.msgText = "Você usou " + (3 - this.attack) + " Ataque(s) Especial(ais), restam " + (this.attack) + "!";
        setTimeout(()=>{this.activeClass = false,this.alertSuccess = false, this.msgText = ""},3000);
      } 
    },
    btnCure(){
      if(this.cure == 0) {
        this.activeClass = true
        this.alertDanger = true
        this.msgText = "Suas CURAS acabaram!"
        setTimeout(()=>{this.activeClass = false,this.alertDanger = false, this.msgText = ""},3000);
      }

      if(this.playerLife > 50)  {
        this.activeClass = true
        this.alertDanger = true
        this.msgText = "Você só pode usar a CURA com menos de 50% de VIDA!"
        setTimeout(()=>{this.activeClass = false,this.alertDanger = false, this.msgText = ""},3000);
      }
      
      if(this.cure >= 1 && this.playerLife < 50) {
        this.playerLife =  this.playerLife <= 0 ? 0 :( this.playerLife + getRandomInt(8));
        this.cure--;
        this.activeClass = true;
        this.alertSuccess = true;
        this.msgText = "Você usou " + (3 - this.cure) + " cura(s), restam " + (this.cure) + "!";
        setTimeout(()=>{this.activeClass = false,this.alertSuccess = false, this.msgText = ""},3000);
        
      } 
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
      //this.playerWinner = false; //player vence
      //this.monsterWinner = false;
    },
  },
  watch: {
    hasResult(value) {
      if(value) this.runningGame = false;
    }
  }
});
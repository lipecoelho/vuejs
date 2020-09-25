new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    colorLife: "green",
    colorDead: "red",
    resultVisible: false,
    actionsVisible: false,
    winner: "",
    ko: false,
    cure: 3,
    attack: 3,
    activeClass: false,
    alertDanger: false,
    alertSuccess: false,
    msgText: ""
  },
  computed: {
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
    btnAttack() {
      this.playerLife =  this.playerLife <= 0 ? 0 : (this.playerLife - getRandomInt(15));//
      this.monsterLife =  this.monsterLife <= 0 ? 0 : (this.monsterLife - getRandomInt(12));//
      console.log(this.monsterLife,this.playerLife);
      if(this.playerLife <= 0 || this.monsterLife <= 0){
        if(this.playerLife < 0 && this.monsterLife < 0) {
          this.ko = true
        }
        this.playerLife = this.playerLife <= 0 ? 0 : this.playerLife;
        this.monsterLife = this.monsterLife <= 0 ? 0 : this.monsterLife;
        
        this.actionsVisible = false;
        this.resultVisible = true 
      }
    },
    btnSpecialAttack(){
      if(this.attack <= 0) {
        this.activeClass = true
        this.alertDanger = true
        this.msgText = "Seus ATAQUES ESPECIAIS esgotaram!"
        setTimeout(()=>{this.activeClass = false,this.alertDanger = false, this.msgText = ""},3000);
      }

      if(this.attack > 0 && this.playerLife < 60) {
        this.playerLife =  this.playerLife <= 0 ? 0 :( this.playerLife - getRandomInt(15));
        this.monsterLife =  this.monsterLife <= 0 ? 0 : (this.monsterLife - getRandomInt(30));
        this.attack--
        console.log(this.cure)
      } 

      if(this.playerLife > 60) {
        this.activeClass = true
        this.alertDanger = true
        this.msgText = "Você só pode usar o ATAQUE ESPECIAL com 60% ou menos de vida!"
        setTimeout(()=>{this.activeClass = false,this.alertDanger = false, this.msgText = ""},3000);
        
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
      this.actionsVisible = !this.actionsVisible, 
      this.playerLife = 100, 
      this.monsterLife = 100, 
      this.resultVisible = false,
      this.cure = 3,
      this.attack = 3
    }   
  },
  watch: {

  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
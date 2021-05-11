import { Component, OnInit } from '@angular/core';
import { Logica } from '../logica';
import { Status } from '../gamestatus';
import { promise } from 'protractor';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[Logica]
})

export class TableComponent implements OnInit {
 

 
  constructor(public game:Logica) {}

  ngOnInit() {
  
  }
  startGame():void{
    this.game.gameStart();
    const currentPlayer ='Turno del jugador :'+this.game.currentTurn;
    const information =document.querySelector('.status');
    if (!information) return;
     information.innerHTML= currentPlayer;
     console.log(currentPlayer)


  }
   async clickSubfield(subfield:any):Promise<void>{
 if(this.game.gameStatus===1){

  const position = subfield.currentTarget.getAttribute('position');
  this.game.setField(position,this.game.currentTurn);
  const color=this.game.getPlayerColor();
  subfield.currentTarget.classList.add(color);

  //await this.checkGameEndWinner();
  await this.game.checkGameEndWinner().then((end:boolean)=>{

    if(this.game.gameStatus===0 && end){
      const information =document.querySelector('.status');
   if (!information) return;
     information.innerHTML="El ganador es el jugador"+this.game.currentTurn;
     
     


    }
  });

  await this.game.checkGameEndFull().then((end:boolean)=>{

    if(this.game.gameStatus===0 && end){
      const information =document.querySelector('.status');
   if (!information) return;
     information.innerHTML="No hay ganador,Empate"


    }
  });

  this.game.changePlayer();
  
  
 if(this.game.gameStatus===1 ){
   const currentPlayer='Turno del jugador :'+this.game.currentTurn;
   const information =document.querySelector('.status');
   if (!information) return;
     information.innerHTML= currentPlayer;
   
               
   
 }
 
 

 }
 
 

   }

  
}

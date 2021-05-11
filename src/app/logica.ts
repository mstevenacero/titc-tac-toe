import { TrackByFunction } from "@angular/core";
import { Status } from "./gamestatus";

export class Logica {
    gamefield:Array<number>=[];
    currentTurn!: number;
    gameStatus: Status = 0;
    winSituationsOne:Array<Array<number>>=[
      [1,1,1,0,0,0,0,0,0],
      [0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,1,1,1],
      [1,0,0,1,0,0,1,0,0],
      [0,1,0,0,1,0,0,1,0],
      [0,0,1,0,0,1,0,0,1],
      [0,0,1,0,0,1,0,0,1],
      [0,0,1,0,1,0,1,0,0],
      [1,0,0,0,1,0,0,0,1],
    ];
    winSituationstwo:Array<Array<number>>=[
        [2,2,2,0,0,0,0,0,0],
        [0,0,0,2,2,2,0,0,0],
        [0,0,0,0,0,0,2,2,2],
        [2,0,0,2,0,0,2,0,0],
        [0,2,0,0,2,0,0,2,0],
        [0,0,2,0,0,2,0,0,2],
        [0,0,2,0,0,2,0,0,2],
        [0,0,2,0,2,0,2,0,0],
        [2,0,0,0,2,0,0,0,2],
      ];
  



    public constructor(){
    this.gameStatus=Status.STOP;
    this.gamefield=[0,0,0,0,0,0,0,0,0]

    }
    gameStart():void{
        this.gamefield=[0,0,0,0,0,0,0,0,0]
        this.currentTurn=this.randomPlayerStart();
        console.log(this.currentTurn);
        this.gameStatus=Status.START;
    }
    randomPlayerStart():number{
      const startPlayer= Math.floor(Math.random()*2)+1;
      return startPlayer;

    }
    setField(position:number,value:number):void{

        this.gamefield[position]=value;
        
    }
    getPlayerColor():string{

        const colorClass=(this.currentTurn===2)? 'player-one':'player-two';
        return colorClass;
    }
    changePlayer():void{


        this.currentTurn = (this.currentTurn===2)?1:2;
    }
    arrayEquals(a:Array<any>,b:Array<any>):boolean{
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length &&
        a.every((value,index)=>value===b[index]);
    }

    async checkGameEndWinner():Promise<boolean>{
        let isWinner =false;
        const checkarray =(this.currentTurn===1)? this.winSituationsOne :this.winSituationstwo;

        const currentarray: any[] =[];
        this.gamefield.forEach((subfield,index)=>{

            if(subfield != this.currentTurn){

                currentarray[index]=0;
            }else{
                currentarray[index]=subfield;


            }
        });
        checkarray.forEach((checkfield,checkindex)=>{

            if(this.arrayEquals(checkfield, currentarray)){

                isWinner=true;
            }
        })


      
        if(isWinner){
            
            this.gameEnd();

            return true;}

            else{
                return false;

            }
        }



    async checkGameEndFull():Promise<boolean>{
        let isfull =true;

        if (this.gamefield.includes(0)){

            isfull=false;
        }
        if(isfull){
            console.log('espacios llenos')
            this.gameEnd();

            return true;}

            else{
                return false;

            }
        }
        gameEnd():void{
            this.gameStatus=Status.STOP;



        }


    }


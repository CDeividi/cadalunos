import { HtmlParser, templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";



@Component({
        selector:'app-arquivo',
        templateUrl:'./arquivo.component.html',
        styleUrls:['./arquivo.component.css']
})


export class arquivoComponent{
       //auxiliares para receber inputs html
        nome:string='';
        curso:string='';
        ru:string='';

                //lista de objetos alunos inicia vazia        
       cadAlunos =[{
        nome: "",
        curso:  "",
        ru:""
       }
  
  /*     
       {
        nome: "André Paulo Andrade",
        curso:  "Lic. Matemática",
        ru:"141414"
       },

       {
        nome: "Jorge Carlos Mota",
        curso:  "Lic. Português",
        ru:"342571"
       },
       {
        nome: "Matheus Lima",
        curso:  "Engenharia Elétrica",
        ru:"192854"
       },

       {
        nome: "Luiza Sampaio",
        curso:  "Engenharia de Software",
        ru:"312654"
       } */
];
        novoAluno=false;
        insert = "Nenhum aluno inserido"; //auxiliar orientação usuário
        
        constructor(){           
              
        };              
        
                        //aguarda 3 s para habilitar botões
        
                        ngOnInit():void {
                                setTimeout(() => {
                                   this.novoAluno = true;     
                                }, 3000);                           
    
                        }  
                        
                        //função para inserir aluno na lista
        inserirNovoAluno(){
                        this.insert = "Inserindo aluno";

                        
                      if(this.nome != "" && this.curso != "" && this.ru != "" ){
                        const tempInsertAluno ={
                                nome : this.nome,
                                curso: this.curso,
                                 ru:this.ru
                        }
                        this.cadAlunos.push(tempInsertAluno);
                        }
                        
                        else if(this.nome == ""){
                                alert("Falta o campo nome.");
                        }

                        else if(this.curso == ""){
                                alert("Falta o campo curso.");
                        }

                        else if (this.ru == ""){
                                alert("Falta o campo RU.");
                        }
                  }                    
                  //função para remover aluno da lista
                  removerAluno(){
                       let i =0;
                        this.insert = "Remover Aluno"; 
                      
                      
                        this.cadAlunos.forEach(element => {
                                 
                                if(this.nome != ''){
                                                 if(element.nome == this.nome){
                                                       this.cadAlunos.splice(i,1);                                              
                                                       console.log(this.nome,i);
                                                }        
                                        }
                                        
                                       else if(this.ru != ''){
                                                if(element.ru == this.ru){
                                                      this.cadAlunos.splice(i,1);                                              
                                                      console.log(this.nome,i);
                                               }        
                                       }
                       i++;
                       });  
                }
}



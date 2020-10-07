   class Form{
       constructor(){
this.input=createInput("name");
this.button = createButton("play");
this.greetings = createElement('h3')
       }
       hide(){
           this.button.hide();
           this.input.hide();
           this.greetings.hide();
       }
       display(){
           var title = createElement('h2');
           title.html("Car Racing Gamee by Tiwi");
           title.position(130,0);
           this.input.position(130,160);
           this.button.position(250,200);
           this.button.mousePressed(()=>{
          this. input.hide();
           this. button.hide();
               var name = this.input.value();
               playerCount = playerCount+1
               player.update(name);
               player.updateCount(playerCount);
               this.greetings.html("Welcome"+ name);
               this.greetings.position(130,160)
           })
           
       }
   }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                      
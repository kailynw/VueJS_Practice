new Vue({
    el: "#app",

    data: {

        title: 'Nothing Typed',
        body: 'body paragraph',
        website: "https://www.kailynw.com",
        html: "<h1>A</h1> <h2>B</h2> <h3>C</h3>",
        x: 0,
        y: 0,
        counter: 0,
        counter2: 0,
        name: "",
        output_keydown: "",
        name2: "_________"



      },
      computed: {
          counterOutput: function(){
            this.counter2 > 5 ? "Greater than 5": "Less "
          }
      },
      
      
      methods: {
        //   Change input on type 
          changeTitle: function(event){
            this.title= event.target.value

            if(this.title==='')
                this.title="Nothing typed"
          },


          printFunction: function(){
              return this.body;

          },


         // Assignment 1
          changeName: function(event){
              this.name= event.target.value;
          },

          randomNumber: function(){
              return Math.round((Math.random()*100)+1) +"";
          },

          increase: function(){
            this.counter2++;
            
          },

          decrease(){
            this.counter2--;
          },

          updateCordinate: function(event){
            this.x= event.clientX;
            this.y= event.clientY;
          },

          alertMe: function(){
            alert("Hey you pressed enter")
          },

          alertButton: function(){
            alert("You clicked the 'Alert Button'")
          },
          keydownOutput: function(event){
            this.output_keydown= event.target.value;
          },

          changeStoryName: function(event){
            this.name2= event.target.value.toUpperCase();

          }

          


          
        
        
        }
})
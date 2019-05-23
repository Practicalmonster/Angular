import { Component ,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task : string="";
  public Todo :Object = {};

  OnChangeInput(event){
    this.task = event.target.value;
  }
  pushTask(){
    const size : number=parseInt(localStorage.getItem('TodoSize'))
    localStorage.setItem(`t${size}`,this.task)
    localStorage.setItem('TodoSize',`${size+1}`)
    this.Todo[size]= this.task
    this.task = ""
  }

  removeItem(event){
    const filteredKeys = Object.keys(this.Todo).map((e,i)=>{
      if(this.Todo[e].toString()!==event.target.innerText.toString()){
        return e
      }else{
        localStorage.removeItem(e)
      }
      
    }).filter((e)=>e)
    console.log(filteredKeys)
    const size = filteredKeys.length;
    let newObj = {}
    for(let i = 0 ; i < size ; i++){
      newObj[filteredKeys[i]] = this.Todo[filteredKeys[i]]
    }
    this.Todo = newObj;
  }

  generateArray(obj){
    return Object.values(obj)
  }

  ngOnInit() {
    if(localStorage.getItem('TodoSize')){
      const size : number = parseInt(localStorage.getItem('TodoSize'));
      for(let i = 0 ; i < size ; i++){
        const oldTask = (localStorage.getItem(`t${i}`))
        if(oldTask){
          this.Todo[`t${i}`] = oldTask
        }
      }
    }else{
      localStorage.setItem('TodoSize','0')
    }
  }
  
}

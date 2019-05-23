import {Component,Input, Output,EventEmitter} from '@angular/core'


@Component({
    selector: 'app-items', //how to use this component in other files
    templateUrl: './tasks.component.html'
})


export class TaskItems{
    @Input() tasks: string[];
    @Output() removeSelected = new EventEmitter();
    ngOnInit(){
    console.log(this.tasks)
    }
    OnClick(event){
        this.removeSelected.emit(event.target.innerText)
    }
}
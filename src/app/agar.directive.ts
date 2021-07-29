import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAgar]'
})
export class AgarDirective implements OnChanges{

  @Input('appAgar')
 // cond=false;
  set cond(val:boolean){
    if(val){
      this.viewcontainerRef.createEmbeddedView(this.templateRef);
     }else{
       this.viewcontainerRef.clear();
     }
  }

  constructor(
    private templateRef:TemplateRef<any>,
    private viewcontainerRef:ViewContainerRef) {
    }
  ngOnChanges(changes: SimpleChanges): void {
  //  if(this.cond){
  //   this.viewcontainerRef.createEmbeddedView(this.templateRef);
  //  }else{
  //    this.viewcontainerRef.clear();
  //  }
  }



}

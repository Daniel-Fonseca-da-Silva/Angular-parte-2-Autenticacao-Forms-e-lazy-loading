import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [CommonModule]
})
export class CardModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/components/directives/darken-on-hover/darken-on-hover.module";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadButtomComponent } from "./load-buttom/load-buttom.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtomComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
        
    ]
})
export class PhotoListModule {}

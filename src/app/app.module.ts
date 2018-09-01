import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ButtonComponent } from './button/button.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        AboutComponent,
        ButtonComponent,
        ProjectComponent,
        ServicesComponent,
        CertificateComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
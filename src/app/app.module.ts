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
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './Projects/projects.component';
import { HomeComponent } from './Home/home.component';
import { MachineComponent } from './Machine/machine.component';
import { FullstackComponent } from './FullStack/fullstack.component';
import { SystemComponent } from './Systems/system.component';
import { BlockchainComponent } from './Blockchain/blockchain.component';

const appRoutes: Routes = [
    { path:'', component: HomeComponent},
    { path:'projects', component: ProjectsComponent }
]

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
        FooterComponent,
        ProjectsComponent,
        HomeComponent,
        MachineComponent,
        FullstackComponent,
        SystemComponent,
        BlockchainComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        ),
        BrowserModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
1. First we created app `ng new New-Project`
2. we created app.routing.module.ts
3. Our App will Have a login,registration page, and then we will be directed to actual app which is has an Admin panel with routing to different pages. 
    - see App-Structure.png. , app.routing.module.ts. , and further child routes.
 - As you can see in app.routing.module.ts , RegistrationComponent,DashboardComponent,LoginComponent,AdminLayoutComponent,AuthLayoutComponent;
     are loaded with app load and features component is lazy loaded.
      for lazy loading to work, you need a seperate features.module.ts,its routing.module.ts. and import respective component,RouterModule,FeaturesRoutingModule.
4. I did `ng add @angular/material` in console to add angular material into my project. I have also created a module using `ng g m [module_name]` 
    to create material.module.ts where i will keep all my angular material imports.

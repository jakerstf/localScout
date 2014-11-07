HomeworkPlanner
===============

This is the repo for Jake Faulkner's Personal Project -- DGM 3790 Fall 2014.

#How To Test My Project

1. **Install Ionic**

    Use the following commands to get your system ready to test this app.
        
        $ sudo npm install -g cordova
        
        $ sudo npm install -g ionic
        

2. **Clone This Repo To Your Local Drive**

    After choosing a location on your local drive use the "git clone" directive to clone this project to your local drive.
    
        Example:
        
        $ cd <location you want the files to go>
        
        $ git clone https://github.com/jakerstf/localScout.git
      
       

3. **Test The App**
    
    You may need change your directory to "localScout" Use the following example if you need to.
        
        Example:
        
        $ cd <file location>localScout
        
    To test the app in a browser use "ionic serve."
        
        $ ionic serve
        
    To test the app with the iOS simulator you will need to add the platform, build the project, and emulate.
    
        $ ionic platform add ios
        $ ionic build
        $ ionic emulate
        
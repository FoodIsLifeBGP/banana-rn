# THE BANANA APP: Ruby on Rails/Postgres backend

Banana App is an open-source, not-for-profit project of The Be Good Foundation.  We can reduce hunger by simplifying food donation.  We make it easy for grocery stores and restaurants to donate good food that would otherwise be disposed of.  Users will be able to find active donations, view the business's food rating, and claim a portion.

# Installation for Mac(Docker)

- Install Docker from [official website ](https://hub.docker.com/?overlay=onboarding) (Take the tutorial if you want)
  - a brief introduction for docker:

    > Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications. Consisting of Docker Engine, a portable, lightweight runtime and packaging tool, and Docker Hub, a cloud service for sharing applications and automating workflows, Docker enables apps to be quickly assembled from components and eliminates the friction between development, QA, and production environments. As a result, IT can ship faster and run the same app, unchanged, on laptops, data center VMs, and any cloud.

  - Why we want to use docker:
    
    - From the previous experience, developers using windows could suffer from configuring the environment, downloading the Postgres database and many other things like the version of ruby, and docker is a convenient solution to solve all those problems so beginners need only focus on project structure and project development. 
- If you do not know docker before, just think it as a manager of virtual machines. Our project would run in those virtual machines with no dependency on the environment of your machine.
  
- Make sure there is no running program in your 5432 port, which is the default port for Postgresql where we would map the database container to. 

  - you might find `lsof -i:[port]` and `kill [pid]` useful

- Run command

  ```bash
  docker-compose up
  ```

  to build and run the docker environment.

- Run the command 

  ```
  docker-compose run web rails db:setup
  ```

  To initialize the container, hopefully you would only need to run it once. But if you rebuild the docker containers you might need to run it again.

- Visit ``http://localhost:3000`` on your browser if you see the information

  ```json
  {
  	"message": "Please log in."
  }
  ```

  Then you're done! You can now move on to installing the Donor, Client, or Admin apps at the following URLs:

  **[Donor/Client](https://github.com/FoodIsLifeBGP/banana-rn)**

- The docker offers hot reload features so every modification of files under the project directory would be updated in real time, and there is no need to restart the backend server.

  - The underlying mechanism is that docker synchronizes the files between project directory and container directory. For more details, look at comment at `volumes` configuration under `docker-compose.yml` file in the project root directory.

# Installation for windows (Docker)

- Install Docker from [official website ](https://hub.docker.com/?overlay=onboarding) 

- If it says "Only supports windows 10 pro", try following steps 
  - run following script as cmd script in administrator mode

    ```
    pushd "%~dp0"
    
    dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
    
    for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
    
    del hyper-v.txt
    
    Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
    ```

    - This code enables a window feature necessary for running docker.
    - It would require you to restart the your machine

  - run following script as before to disguise you system as win10pro:

    ```
    REG ADD "HKEY_LOCAL_MACHINE\software\Microsoft\Windows NT\CurrentVersion" /v EditionId /T REG_EXPAND_SZ /d Professional /F
    ```

  - it should be able to run the install exe, and remember to uncheck the first option box (enable window features blabla) at the first step

- Make sure there is no running program in your 5432 port, which is the default port for Postgresql where we would map the database container to. 

  - [command inspecting port on windows TBD]

- Run command

  ```bash
  docker-compose up
  ```

  to build and run the docker environment.

- Run the command in a new terminal window

  ```
  docker-compose run web rails db:setup
  ```

  To initialize the docker

- Visit ``http://localhost:3000`` on your browser if you see the information

  ```json
  {
  	"message": "Please log in."
  }
  ```

  Then you're done! You can now move on to installing the Donor, Client, or Admin apps at the following URLs:

  **[Donor/Client](https://github.com/FoodIsLifeBGP/banana-rn)**

## common problems：

- `standard_init_linux.go:211: exec user process caused "no such file or directory"`
  - Use any software(Like [notepad++](https://stackoverflow.com/questions/51508150/standard-init-linux-go190-exec-user-process-caused-no-such-file-or-directory)) to replace the CRLF in file to LF.
  - It would not trigger git update, so do not worry about that.
  - That is because of an history problem that the window use CRLF as the EOL notation and it could cause problems in Linux container(which ruby image is based on)

## Admin: TBD

# Endpoints

## Complete:
- admin_auth/create
- donor_auth/create
- client_auth/create

- client/create
- client/update

- donor/create
- donor/get
- donor/scan -- complete a claim scanned from the donor frontend app

- claims/update -- client cancels donation, or donor marks as claimed
- client/get_donations (by location) -- client searching for nearby donations, and getting donation detail (should be moved to donations controller)

- donations/create -- donor listing a donation
- donations/update -- donor updating donation info
- donations/get_donations (active, by user) -- donor seeing their donation list
- donations/:id/claim -- client creates a claim on a donation

### To do:
- donor/account_status --> donor/update
- client/get_claims -- client pulling up their current claims and QR code info
- push notifications

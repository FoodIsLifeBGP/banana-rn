# THE BANANA APP: Ruby on Rails/Postgres backend

## Installation

All of The Banana App family (Donor, Client, & Admin) runs off of this backend.  Install this first.

The following commands in Terminal will install RVM, Ruby 2.6.3, Rails, and the Postgres gem.
`gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`
`\curl -sSL https://get.rvm.io | bash`
`rvm install 2.6.3 && rvm use 2.6.3`
`gem install rails`
`gem install pg`

Install Postgres by following the instructions on https://postgresapp.com/.

Back in Terminal, run
`git clone https://github.com/256hz/banana-rails.git && cd banana-rails`
From inside `banana-rails`, run:
`bundle` (package installer)
`rails db:setup` (creates, migrates, and seeds your local DB)
and finally
`rails s`
to start the server.  Once that's running, your terminal should look something like:

```terminal
=> Booting Puma
=> Rails 6.0.0 application starting in development 
=> Run `rails server --help` for more startup options
Puma starting in single mode...
* Version 3.12.1 (ruby 2.6.3-p62), codename: Llamas in Pajamas
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://localhost:3000
Use Ctrl-C to stop
```

Once you see that, open a web browser, and navigate to `http://localhost:3000/donors/0/donations`.  If you see this:

```json
{
	"message": "Please log in."
}
```

You're done!  You can now move on to installing the Donor, Client, or Admin apps at the following URLs:

[Donor](https://github.com/FoodIsLifeBGP/banana-rn)

[Client](https://github.com/FoodIsLifeBGP/banana-rn-client)

Admin: TBD

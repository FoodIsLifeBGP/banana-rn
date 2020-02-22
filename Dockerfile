FROM rubylang/ruby:2.6.3-bionic
RUN mkdir /banana-rails
WORKDIR /banana-rails
COPY . /banana-rails
RUN apt-get update -qq
RUN apt-get -y install postgresql-client libpq5 libpq-dev 
RUN gem install pg -v '1.1.4' --source 'https://rubygems.org/'
RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]

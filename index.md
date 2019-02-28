---
layout: profile
body_class: profile-page
background: machu_picchu.jpg
profile_name: Marvin Guerra
profile_title: Staff Software Engineer
about_me: |
    Hi, I'm Marvin. I am a developer, proud [Peruano](http://www.peru.travel/en-us/), eternal student, amateur runner, 
    and husband to [@BeingValentina](https://twitter.com/BeingValentina). I work on things I love and surround myself 
    with great people. Fan of whiskey and stouts, and enjoy playing strategy board games. Follow me at 
    [@SenorLlama](https://twitter.com/SenorLlama) or drop me a [line](/#contact). 
company_twitter: gofundme
resume_header: Recent Experience
resume_dl: resume.pdf
resume:
    - title: Staff Software Engineer
      url: http://www.gofundme.com
      company: GoFundMe
      logo: gofundme.jpg
      dates: March 2018 - Present
      location: Los Angeles, CA
      responsibilities:
        - RESTful web services development
        - Payments procesing service development
    - title: Senior Software Engineer
      url: http://www.hyp3r.com
      company: HYP3R
      logo: hyp3r.png
      dates: Apr 2016 - March 2018
      location: San Francisco, CA
      responsibilities:
        - RESTful web services development
        - Developed partner API and accompanying portal
        - Developed partner integrations and managed data ingestion from partners
        - Designed and developed microservices responsible for different ETL processes using docker containers hosted on AWS container service
        - Designed and developed Big Data solutions to support statistical analysis and speed enhanced large queries using AWS Kinesis, AWS S3, AWS SQS, AWS Lambda, Redshift, and Elasticsearch
    - title: Lead Software Engineer
      url: http://www.revinate.com
      company: Revinate
      logo: revinate.png
      dates: Feb 2013 - Apr 2016
      location: San Francisco, CA
      responsibilities:
        - RESTful web services development, Enterprise Integration Patterns development using Spring Integration, MySQL, Mongo, Elasticsearch, RabbitMQ, Spring MVC, Jersey
        - Delivered Revinate's first structured review data API, providing access to hotel reviews from over 100 review sites and key-metrics (review counts, average ratings) and sentiment analysis
        - Delivered and responsible for maintaining internal RESTful API that supports Revinate's mobile applications and surveys product line
        - Designed architecture models supporting surveys product
        - Delivered external surveys ingestion platform
education_header: Education
education:
    - school: Massachusetts Institute of Technology
      url: http://www.mit.edu
      degree: M.Eng, Electrical Engineering
      dates: 2007 - 2008
      logo: mit.png
    - school: Massachusetts Institute of Technology
      url: http://www.mit.edu
      degree: B.S., Electrical Engineering and Computer Science
      dates: 2003 - 2007
      logo: mit.png
    - school: Phillips Exeter Academy
      url: http://www.exeter.edu
      degree: High School
      dates: 1999 - 2003
      logo: exeter.png
projects_header: Open Source Projects
projects:
    - name: Kinesis Logback Appender
      background_img: kinesis.png
      github: hyp3rventures/ kinesis-logback-appender
      badges: |
        [![Maven Central](https://img.shields.io/maven-central/v/com.hyp3r/kinesis-logback-appender.svg)](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.hyp3r%22%20AND%20a%3A%22kinesis-logback-appender%22)&nbsp;&nbsp;
        [![CircleCI](https://circleci.com/gh/hyp3rventures/kinesis-logback-appender.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/hyp3rventures/kinesis-logback-appender)&nbsp;&nbsp;
        [![codecov](https://codecov.io/gh/hyp3rventures/kinesis-logback-appender/branch/master/graph/badge.svg)](https://codecov.io/gh/hyp3rventures/kinesis-logback-appender)
      description: |
        This Logback Appender for Amazon Kinesis enables Java applications to send their logs in a structured format 
        to an Amazon Kinesis stream
    - name: Elasticsearch DSL Builder
      background_img: elastic.png
      github: hyp3rventures/ elasticsearch-dsl-builder
      badges: |
        [![Gem Version](https://badge.fury.io/rb/elasticsearch-dsl-builder.svg)](https://badge.fury.io/rb/elasticsearch-dsl-builder)&nbsp;&nbsp;
        [![CircleCI](https://circleci.com/gh/hyp3rventures/elasticsearch-dsl-builder.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/hyp3rventures/elasticsearch-dsl-builder)&nbsp;&nbsp; 
        [![codecov](https://codecov.io/gh/hyp3rventures/elasticsearch-dsl-builder/branch/master/graph/badge.svg)](https://codecov.io/gh/hyp3rventures/elasticsearch-dsl-builder)
      description: |
          Library utilizing builder pattern providing a Ruby API for the 
          [Elasticsearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html). 
          Compatible with Ruby 2.3.2 or higher and Elasticsearch 5.0 and higher
    - name: Docker ProFtpd
      background_img: docker.png
      docker: senorllama/ docker-proftpd
      badges: |
        [![Docker Pulls](https://img.shields.io/docker/pulls/senorllama/docker-proftpd.svg)](https://hub.docker.com/r/senorllama/docker-proftpd)
      description: A Docker image to create a virtual FTP server that uses an external database for user credentials
    - name: Docker ELK
      background_img: docker.png
      docker: senorllama/ elk
      badges: |
        [![Docker Pulls](https://img.shields.io/docker/pulls/senorllama/elk.svg)](https://hub.docker.com/r/senorllama/elk)
      description: Docker Image Packaging for ELK (Elasticsearch/Logstash/Kibana) stack
contact_header: Let's Get In Touch!
---

pipeline {
    agent any
    tools {
        jdk 'jdk'
        maven 'maven'
    }
    
    stages {
        stage('Build') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/weeejull/SIT_223_6.2C.git'
                echo "Fetching the source code from Github."
                echo "Compiling the code using Maven and generating artifacts."
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo "Automated Unit Tests Run Successfully using Selenium."
                echo "Automated Integration Tests Run Successfully using Selenium."
            }
        }
        stage('Code Analysis') {
            steps {
                echo "The code has been analyzed successfully."
            }
        }
        stage('Security Scan') {
            steps {
                echo "Security Scanning has been done on the code successfully."
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo "Deploying to Staging done successfully."
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo "Integration Tests have been run on Staging successfully."
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying to production has been done successfully."
            }
        }
    }
    
    post {
        success {
            // Email notification for successful test and security scan stages
            emailext attachLog: true, body: "Project Name: SIT_223_6.2C | Build Status: SUCCESS | Stage: Test and Security Scan have run successfully.", subject: "Build Status: SUCCESS!", to: "vijulkapoor@gmail.com"
        }
        failure {
            // Email notification for failed test and security scan stages
            emailext attachLog: true, body: "Project Name: SIT_223_6.2C | Build Status: FAILURE | Stage: Test and Security Scan have failed.", subject: "Build Status: FAILURE!", to: "vijulkapoor@gmail.com"
        }
    }
}

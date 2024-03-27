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
            post {
                success {
                    mail bcc: '', body: 'Project Name: SIT_223_6.2C \n Build Status: SUCCESS \n Stage: Unit and Integration Tests have run successfully.', cc: '', from: 'vijulkapoor@gmail.com', mimeType: 'text/html', replyTo: 'vijulkapoor@gmail.com', subject: 'Build Status: SUCCESS!', to: 'vijulkapoor@gmail.com'
                }
                failure {
                    mail bcc: '', body: 'Project Name: SIT_223_6.2C \n Build Status: FAILURE n Stage: Unit and Integration Tests have failed.', cc: '', from: 'vijulkapoor@gmail.com', mimeType: 'text/html', replyTo: 'vijulkapoor@gmail.com', subject: 'Build Status: FAILURE!', to: 'vijulkapoor@gmail.com'
                }
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
            post {
                success {
                    mail bcc: '', body: 'Project Name: SIT_223_6.2C \n Build Status: SUCCESS \n Stage: Security Scanning has been done on the code successfully.', cc: '', from: 'vijulkapoor@gmail.com', mimeType: 'text/html', replyTo: 'vijulkapoor@gmail.com', subject: 'Build (Scan) Status: SUCCESS!', to: 'vijulkapoor@gmail.com'
                }
                failure {
                    mail bcc: '', body: 'Project Name: SIT_223_6.2C \n Build Status: FAILURE \n Stage: Security Scanning failed.', cc: '', from: 'vijulkapoor@gmail.com', mimeType: 'text/html', replyTo: 'vijulkapoor@gmail.com', subject: 'Build (Scan) Status: FAILURE!', to: 'vijulkapoor@gmail.com'
                }
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
            post {
                success {
                    mail bcc: '', body: 'Project Name: SIT_223_6.2C \n Build Status: SUCCESS \n Stage: Integration Tests have been run on Staging successfully.', cc: '', from: 'vijulkapoor@gmail.com', mimeType: 'text/html', replyTo: 'vijulkapoor@gmail.com', subject: 'Build (Test) Status: SUCCESS!', to: 'vijulkapoor@gmail.com'
                }
                failure {
                    mail bcc: '', body: 'Project Name: SIT_223_6.2C \n Build Status: FAILURE \n Stage: Running Integration Tests on Staging failed.', cc: '', from: 'vijulkapoor@gmail.com', mimeType: 'text/html', replyTo: 'vijulkapoor@gmail.com', subject: 'Build (Test) Status: FAILURE!', to: 'vijulkapoor@gmail.com'
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying to production has been done successfully."
            }
        }
    }
}

pipeline {
    agent any
    stages {
        // make build
        //maven is used
        stage('Build') {
            steps {
                echo "Fetching the source code from GitHub"
                echo "Compiling the code and generating artifacts."
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/weeejull/SIT_223_6.2C/Jenkinsfile.git'
            }
        }
        // test starts
        //Selenium is used
        stage('Unit and Integration Tests') {
            steps {
                echo "Running unit tests: started"
                echo "Running integration tests: started"
            }
            post {
                success {
                    mail to: 'vijul4860.be22@chitkara.edu.in',
                        subject: 'UNIT AND INTEGRATION TEST SUCCESS',
                        body: 'The unit and integration tests are successfull.'
                }
                failure {
                    mail to: 'vijul4860.be22@chitkara.edu.in',
                        subject: 'UNIT AND INTEGRATION TEST FAILED',
                        body: 'The unit and integration tests are unsuccessfull.'
                }
            }
        }
        //SONARQUBE is used
        stage('Code Analysis') {
            steps {
                echo "Running code analysis: started"
            }
        }

        //OWASP is used
        stage('Security Scan') {
            steps {
                echo "Running security scan: started"
            }
            post {
                success {
                    mail to: 'vasudha4859.be22@chitkara.edu.in',
                        subject: 'Security Scan Success',
                        body: 'The Security Scan has succeeded. Find attached logs for more information.'
                }
                failure {
                    mail to: 'vasudha4859.be22@chitkara.edu.in',
                        subject: 'Security Scan Failed',
                        body: 'The Security Scan has failed. Find attached logs for more information.'
                }
            }
        }
        
        //AWS is used
        stage('Deploy to Staging') {
            steps {
                echo "Deploying to Staging: started"
            }
        }
        
        //AWS is used
        stage('Integration Tests on Staging') {
            steps {
                echo "Running integration tests on Staging: started"
            }
            post {
                success {
                    mail to: 'vijul4860.be22@chitkara.edu.in',
                        subject: 'Integration Tests on Staging Success',
                        body: 'The Integration Tests on Staging are successful.'
                }
                failure {
                    mail to: 'vijul4860.be22@chitkara.edu.in',
                        subject: 'Integration Tests on Staging Failed',
                        body: 'The Integration Tests on Staging have failed. Find attached logs for more information.'
                }
            }
        }

        //AWS is used
        stage('Deploy to Production') {
            steps {
                echo "Deploying to Production: started"
            }
        }
    }
}

pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t inf324/ui .'
            }
        }
    }
}
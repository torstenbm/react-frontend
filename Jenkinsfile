pipeline {
    agent any
    stages {
        stage('Build image') { 
            steps {
                app = docker.build("inf324/ui")
            }
        }
    }
}
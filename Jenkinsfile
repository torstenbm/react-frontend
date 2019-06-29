pipeline {
    agent any
    def app
    stages {
        stage('Build image') { 
            app = docker.build("inf324/ui")
        }
    }
}
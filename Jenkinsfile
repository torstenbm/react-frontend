pipeline {
    agent any
    def app
    stages {
        stage('Build image') { 
            steps {
                app = docker.build("inf324/ui")
            }
        }
    }
}
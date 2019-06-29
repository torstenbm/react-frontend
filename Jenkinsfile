pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                app = docker.build("inf324/ui")
            }
        }
    }
}
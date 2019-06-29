pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t inf324/ui .'
            }
        }
        stage('Re-Deploy') { 
            steps {
                sh 'docker stop user-interface'
                sh 'docker rm user-interface'

                sh 'docker run --name user-interface -p 3010:3010 -d inf324/ui'
            }
        }
    }
}
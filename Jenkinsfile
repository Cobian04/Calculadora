pipeline {
    agent any
    tools {
        nodejs 'NodeJS 24' 
    }
    environment {
        SONAR_TOKEN = credentials('sonar-token') 
    }
    stages {
        stage('Checkout') {
            steps {
                // REEMPLAZA ESTA URL POR LA DE TU REPOSITORIO DE LA CALCULADORA
                git branch: 'main', url: 'https://github.com/Cobian04/Calculadora.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Lint (optional)') {
            steps {
                // Si no tienes configurado lint en package.json, esto simplemente saltará
                sh 'npm run lint || true'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
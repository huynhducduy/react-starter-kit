pipeline {
    agent {
        docker {
            image 'node:lts'
            args '-v /etc/passwd:/etc/passwd'
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('prepare') {
            steps {
                git(
                    branch: "source",
                    url: "https://github.com/<username>/<repo>"
                )
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'CI=true npm test'
            }
        }
        stage('deploy') {
            steps {
                dir('build') {
                    sshagent(credentials: ['<credentials id>']) {
                        sh 'git init'
                        sh 'git config core.sshCommand "ssh -v -o StrictHostKeyChecking=no"'
                        sh "git config user.email '<email>' && git config user.name '<name>'"
                        sh 'git remote add origin git@github.com:<username>/<repo>'
                        sh 'git add -A && git commit -m "jenkins builder"'
                        sh 'git push -u origin master --force'
                    }
                }
            }
        }
    }
}

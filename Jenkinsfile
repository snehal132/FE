//#!groovy

properties(
    [
        [$class: 'BuildDiscarderProperty', strategy:
          [$class: 'LogRotator', artifactDaysToKeepStr: '14', artifactNumToKeepStr: '5', daysToKeepStr: '30', numToKeepStr: '60']],
        pipelineTriggers(
          [
              pollSCM('H/15 * * * *'),
              cron('@daily'),
          ]
        )
    ]
)

node {
    stage('Checkout') {
        echo 'Fetching latest code from GIT'
        //deleteDir()
        //git credentialsId: '36587512-8b14-4789-bf67-1419220502a5', url: 'https://github.com/snehal132/FE.git'
        //checkout scm
    }
    stage('Install'){
        echo 'Updating node modules'
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
             bat 'npm install'
        }
    }
    stage('Test') {
        echo 'Testing Jasmine test cases'
        bat 'ng test --progress=false --watch false'
    }
    stage('Build') {
        milestone()
        echo 'Generating prod build'
        bat 'ng build --prod'
    }
    stage('Archive') {
        echo 'Zip build package for deployment'
        bat 'tar -cvzf dist.tar.gz --strip-components=1 dist'
        archiveArtifacts 'dist.tar.gz'
    }
    stage('Deploy') {
        milestone()
        echo 'Deploying package to tomcat'
        bat 'tar xvzf C:\\apache-tomcat-9.0.20\\webapps\\dist.tar.gz -C C:\\apache-tomcat-9.0.20\\webapps\\'
    }
}
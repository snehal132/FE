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
        checkout scm
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
        bat 'tar -cvzf tssidemofedist.tar.gz --strip-components=1 dist'
        archiveArtifacts 'tssidemofedist.tar.gz'
    }
    stage('Approve') {
         milestone()
         mail bcc: '', body: 'TSSIDemoPL_FE project is built and ready for deployment upon approval.', cc: '', from: '', replyTo: '', subject: 'TSSIDemoPL_FE Build Ready', to: 'samrat.mitra@vodafone.com'
         timeout(time: 1, unit: 'MINUTES') {
            input 'Deploy package ?'
        } 
    }
    stage('Deploy') {
        milestone()
        echo 'Deploying package to tomcat'
        bat 'copy tssidemofedist.tar.gz C:\\apache-tomcat-9.0.20\\webapps\\'
        bat 'tar xvzf C:\\apache-tomcat-9.0.20\\webapps\\tssidemofedist.tar.gz -C C:\\apache-tomcat-9.0.20\\webapps\\'
    }
}
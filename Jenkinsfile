node {
    stage('Build') {
        echo 'Building'
        npm install
        ng test
    }
    stage('Test') {
        echo 'Testing'
    }
    if (currentBuild.currentResult == 'SUCCESS') {
        stage('Deploy') {
            echo 'Deploying'
        }
    }
}
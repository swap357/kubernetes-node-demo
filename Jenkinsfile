node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        slackSend "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"

        checkout scm

        def COMMITHASH = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
        echo ("Commit hash: "+COMMITHASH.substring(0,7))
    }
  }

node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        slackSend "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"

        checkout scm

        def COMMITHASH = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
        echo ("Commit hash: "+COMMITHASH.substring(0,7))
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        println('Build image stage');
        app = docker.build("swap357/arya")

    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */

        docker.withRegistry('https://registry.hub.docker.com') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
        slackSend "Docker image is built and pushed to Docker Container Registry>  "
    }


  }

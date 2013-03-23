# openshift.npm

This project is currently just a placeholder helping to ensure that the 'openshift' npm module is actually controlled by folks in the OpenShift team.

The long-term goal of this module is to allow developers to make their existing web applications fully openshift compatible in one or two simple steps.

Currently, this does nothing:

    npm install openshift

Try this instead:

    cd $YOUR_PROJECT_FOLDER # I'm assuming that your project is a git repo
    git remote add upstream -m master git@github.com:ryanj/nodejs-custom-version-openshift.git
    git pull -s recursive upstream master # merge in a basic OpenShift skeleton

Then, resolve any merge conflicts, review the changes and additions, and commit your updated application code:

    git add filename # after fixing, for each file that contained a merge conflict
    git commit -m 'merging in OpenShift dependencies for node.js applications'
    git push # to enhance your GitHub project, making it OpenShift compatible.

Finally, provision and deploy your new OpenShift-compatible node.js application in one step:

    rhc app create mynodeapp nodejs --from-code=http://github.com/YOUR_GH_PROFILE/YOUR_GH_REPO.git

The `rhc` command-line output should return your live application URL.

For additional help, see:

 * https://www.openshift.com/get-started#cli
 * https://www.openshift.com/get-started/node-js 
 * https://github.com/ryanj/nodejs-custom-version-openshift/blob/master/README
 * https://github.com/ryanj/nodejs-custom-version-openshift/blob/master/README.md

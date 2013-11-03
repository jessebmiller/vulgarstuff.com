from fabric.api import *
from fabric.context_managers import cd, prefix

env.hosts = ['jesse@vulgarstuff.com']

clone = "git clone -o mainline https://github.com/jessebmiller/vulgarstuff.com.git"
pull = "git pull mainline master"
push = "git push mainline master"
test = "echo '>>>>>>>>>>>> write some tests sucka <<<<<<<<<<<<'"
test_path = "tmp_vulgarstuff_test"

def on(branch_name):
    """ return a command that will fail if not on correct branch """
    return "git branch | grep '* {}'".format(branch_name)

@task
def integrate():
    """ Pull, Test, Push, Test """

    # confirm we are on master branch
    local(on("master"))

    local(pull)
    local(test)
    local(push)

    # create the test directory
    # clone mainline
    # run the tests
    # delete the test directory
    try:
        run("mkdir {}".format(test_path))
        with cd(test_path):
            run(clone)
            run(test)
    except Exception, e:
        raise e
    finally:
        run("rm -rf {}".format(test_path))


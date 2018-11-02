Contributing to Open Source Software
------------------------------------

### Tools and Techniques ###

  * Working with other people:

    * Communicate your desire to change something

    * Adhere to project guidelines (style, conduct, etc.)

    * Be willing to accept criticism

  * Using Git

    * For better or worse it's what most projects use

    * Submit a single commit (via squashing)

    * Make sure your branch is up to date (via rebasing)

  * Submitting changes:

    * GitHub pull requests (PR)

    * GitLab merge requests (MR)

    * Sending patches to a mailing list

### Deciding What to Contribute ###

People are most often motivated to contribute to an open source
project when they have an issue to resolve:

  * A bug affecting you needs to be fixed

  * The project is missing a feature that you need

But, if you just want to help then you can:

  * Start by contributing documentation

  * Ask where you can be helpful

### Working with the Project's Developers ###

Before writing any code:

  * Understand the project well enough to know where your contribution
    fits in and how to structure it

  * Let the project know what your intentions are by:
    - Posting a message on a mailing list
    - Opening a ticket/issue in the bug tracker

  * Some projects may want to assign you to a mentor or pair you up
    with someone who has commit access

### Submissions that are More Likely to be Accepted ###

Make your contribution as easy to accept as possible.  Submissions
that require extra work may sit around for a long time.  Here are some
suggestions:

  * Ensure your code conforms to any style guidelines and is formatted
    the way other code in the project is formatted

  * The project may have submission guidelines, read them

  * Include tests that verify your code

  * Update relevant documentation

  * Add an entry in the change log

  * Rebase your branch and squash your commits!

### Branch Rebasing in Git ###

#### What is Rebasing? ####

Rebasing is a technique that *replays* your commits on top of your
parent branch so merges are fast and clean.  It's a good idea to
rebase just before opening a pull request.

#### How Do I Rebase? ####

Let's say you have a branch called `feature` that was created off of
`master`.  You want to move the *merge base* forward so `feature`
includes all the latest commits from `master`:

~~~{.sh}
$ git checkout feature
$ git rebase master
~~~

#### Warning: Rebasing Generates New Commits ####

Make sure you understand the consequences of performing a rebase!

### Squashing Commits via Interactive Rebasing ###

#### What is Squashing? ####

Most projects prefer that you contribute a single commit.  If you have
more than one commit you can combine them in a process known as
*squashing*.

#### How Do I Squash Commits? ####

To squash the last four commits into one:

~~~{.sh}
$ git rebase -i HEAD~4
~~~

Choose *pick* for the first listed commit and *squash* for all
remaining commits.

#### Warning: Squashing is Done via Rebasing ####

Make sure you understand the consequences of performing a rebase!

### Creating Pull Requests ###

The final step is to actually submit your change:

  * If the project is using a tool like GitHub or GitLab, open a pull
    request/merge request

  * Otherwise, have Git produce a patch file and submit the patch to
    the appropriate mailing list or email address

#### The Approval Process ####

Be sure to stay engaged during the approval process.  Team members may
ask you to make changes or justify decisions you made.  The more
responsive you are the faster the submission can be merged.

Keep in mind that developers who have the ability to accept your
contribution may be in a vastly different timezone than your own.

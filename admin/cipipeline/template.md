An ability to quickly and easily build and test code is an important aspect of Agile software engineering.  However, Continuous Integration (CI) and Deployment (CD) pipelines are not always easy to build.  Quite often CI/CD pipelines are brittle and building is done less frequently that it should be. By the end of the quarter we aim to address this by having a pipeline so easy that a grader can make a change and push a new built to evaluate within a few minutes.  As this is not a simple task, we will break this effort into three phases. 

CI/CD pipeline phase 1 should be a vetting phase were you explore the following ideas

    linting and code style enforcement (may happen in pipeline and/or in editor)
    code quality via tool  (ex. Codeclimate, Codacy, etc.)
    code quality via human review (ex. Pull Requests)
    unit tests via automation (ex. Jest, Tape, Ava, Cypress, Mocha/Chai, etc.)*
    documentation generation via automation (ex. JSDocs)


* Other testing including e2e (end to end) and pixel testing is also possible so you may decide to use an environment that does numerous things.

Note: Future phases may include: code coverage reporting, packaging, deployment, minification and more.  You are welcome to try these ideas out now in preparation for future phases.

Your CI/CD pipeline should be run as Github Actions.   Your CI/CD pipeline should not be building anything substantial at this phase especially if you have not cleared your pitch stage.  Use some simple experimental code to demonstrate testing, docs, linting, etc.  Given the parallel creation of devops features as you code you may consider making special branches to test out the pipeline, then once finalized have it work on main and stage branches appropriately.

For the satisfactory completion of this phase you should provide the following items and store them in your repo under /admin/cipipeline.

    phase1.png - a diagram of your phase 1 build pipeline (can be phase1.drawio.png if using draw.io)
    phase1.md - a short 2 page (roughly) status on the pipeline in terms of what is currently functional (and what is planned or in progress). Embed your diagram in the markdown file.
    phase1.mp4 - a no more than 2 min video demonstration of the pipeline

 

There will be two checkpoints for this assignment

    Checkpoint 1 - due in repo by 11/15
    Checkpoint 2 - due in repo by 11/30

We'll do a final evaluation during a project review

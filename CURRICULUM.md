# Technical Career Transition — Curriculum

## Purpose

Build demonstrable technical skills that can lead to paid remote work.

The initial employment target is business systems, technical implementation and automation. The programme should also build foundations for later specialisation in applied AI, application security, AI security or related technical roles.

The objective is not simply to complete a course. The objective is to accumulate demonstrable technical capability until employers or clients will pay for it.

---

# Career Route

Existing operational and business experience

→ Technical foundations

→ Business systems / technical implementation / automation

→ First technical employment or paid technical work

→ Applied AI / AI implementation / application security / technical consulting

The final specialisation does not need to be decided at the beginning.

---

# Three Parallel Tracks

## 1. BUILD

Learn technical skills by building the RoomReady application.

## 2. MARKET

Regularly compare developing skills against current UK vacancies.

Do not automatically wait until the curriculum is complete before applying for jobs.

Employers should be allowed to decide whether the learner is ready.

## 3. REAL WORK

Once sufficient basic capability exists, look for small genuine problems that can be solved for real people or organisations.

Early work may be free where it provides useful experience, permission for an anonymised portfolio case study and ideally a testimonial.

Progress towards small paid projects where appropriate.

---

# Main Project — RoomReady

RoomReady is an accommodation/property operations application.

It will develop progressively rather than being built all at once.

The system may eventually include:

- properties and rooms
- departures and arrivals
- cleaning status
- inspections
- maintenance defects
- repair priorities
- stock shortages
- readiness rules
- users and permissions
- relational database
- REST API
- automated workflows
- operational risk identification
- AI-assisted summaries
- procedure/policy retrieval
- security controls and testing

The project is primarily a learning vehicle and portfolio project.

The learner should understand and be able to explain what is built.

---

# Teaching Structure

Normal study pattern:

- Lesson A — Learn a new concept
- Lesson B — Practise the concept
- Lesson C — Apply it to RoomReady
- Lesson D — Debug, modify and explain

A normal lesson is approximately 45 minutes.

Lessons may be shortened when less time is available.

Optional longer build sessions may be used when the learner wants to continue.

Progress is based on demonstrated understanding, not time spent.

---

# Phase 0 — Development Environment

## Week 1

Learn:

- repositories
- Git
- GitHub
- commits
- pushes
- basic Markdown
- project files and folders
- basic terminal navigation
- VS Code
- local versus remote repositories

Build:

- RoomReady repository
- README
- curriculum
- learning log
- AI tutor instructions

Evidence:

The learner can create and navigate a project, make changes, commit them and eventually push local changes to GitHub.

---

# Phase 1 — JavaScript Foundations

## Weeks 2–5

Learn:

- variables
- strings
- numbers
- booleans
- objects
- arrays
- conditions
- comparison operators
- logical operators
- functions
- parameters
- return values
- loops
- array methods
- errors
- debugging

Build:

Room readiness rules and reports.

Example problem:

A room has completed cleaning and inspection but has a blocking repair. Determine whether it can be marked READY.

Evidence:

The learner can write and explain JavaScript that makes operational decisions using structured data.

---

# Phase 2 — Web Fundamentals

## Weeks 6–8

Learn:

- browser and server
- HTTP
- requests and responses
- GET, POST, PATCH and DELETE
- status codes
- headers
- JSON
- browser developer tools
- basic HTML
- browser JavaScript
- events

Build:

A browser interface for RoomReady.

Evidence:

The learner can explain at a basic level how a web application communicates and can build a simple interactive browser application.

At approximately Week 8, review current UK job vacancies and compare requested skills with demonstrated skills.

Begin considering suitable small real-world problems for the REAL WORK track.

---

# Phase 3 — SQL and Databases

## Weeks 9–10

Learn:

- tables
- rows
- columns
- primary keys
- relationships
- SELECT
- WHERE
- JOIN
- INSERT
- UPDATE
- DELETE
- basic data modelling

Build:

Store RoomReady properties, rooms, turnovers, defects and actions in a relational database.

Evidence:

The learner can design a basic relational data model and retrieve useful operational information using SQL.

---

# Phase 4 — APIs

## Weeks 11–12

Learn:

- REST APIs
- endpoints
- requests
- validation
- business logic
- database interaction
- responses
- API testing
- asynchronous programming basics

Build example endpoints such as:

GET /rooms

GET /rooms/214

GET /arrivals/tomorrow

POST /defects

PATCH /rooms/214

Evidence:

The learner can explain and build a basic API connecting an application to data and business logic.

Review current job vacancies again at approximately Week 12.

---

# Phase 5 — Business Systems Engineering

## Weeks 13–14

Learn:

- requirements gathering
- process mapping
- stakeholders
- business rules
- user stories
- acceptance criteria
- system design
- testing
- technical documentation

Example user story:

"As a manager, I want rooms with blocking defects automatically prevented from being marked Ready so that unsuitable accommodation is not allocated."

Build:

Translate a messy operational problem into requirements and working RoomReady functionality.

Evidence:

Produce a portfolio case study showing:

problem → requirements → design → implementation → testing

Begin assessing whether applications for suitable technical roles are already justified.

---

# Phase 6 — Automation and Integration

## Weeks 15–16

Learn:

- workflow automation
- event-driven thinking
- scheduled processes
- webhooks
- integrations
- basic Power Automate / Power Platform concepts where useful

Build:

Example rule:

IF an arrival is within 24 hours AND a blocking repair exists THEN flag HIGH RISK and create an action.

Evidence:

A working automated operational workflow.

---

# Phase 7 — Applied AI

## Weeks 17–19

Learn:

- LLM APIs
- prompts
- structured outputs
- tool calling
- embeddings
- retrieval
- RAG
- evaluation
- hallucination
- guardrails
- appropriate versus inappropriate use of AI

Build:

AI-assisted operational summaries and procedure/policy retrieval.

Important principle:

Known deterministic business rules should not automatically be delegated to an LLM simply because AI is available.

Evidence:

A functioning AI-enabled business application whose design choices the learner can explain and defend.

---

# Phase 8 — Application Security

## Weeks 20–22

Learn:

- authentication
- authorisation
- access control
- input validation
- secrets and API keys
- OWASP concepts
- XSS
- SQL injection
- CSRF
- IDOR / broken access control
- Burp Suite
- introductory offensive web security testing

Build:

Introduce roles such as Manager and Cleaner and test whether users can access actions or information they should not.

Evidence:

Document vulnerabilities found in RoomReady, demonstrate testing and implement fixes.

Use this phase to assess whether application security is an area the learner genuinely enjoys.

---

# Phase 9 — Professional Engineering and Portfolio

## Weeks 23–24

Learn:

- testing
- debugging
- logging
- environment variables
- deployment
- basic CI/CD
- branches
- pull requests
- code review
- professional technical documentation

Produce:

A polished RoomReady portfolio case study and repository.

The learner should be capable of explaining:

- the business problem
- requirements
- architecture
- data model
- code
- API
- automation
- AI design decisions
- security decisions
- testing
- lessons learnt

---

# Employment Checkpoints

Do not treat Week 24 as the first point at which employment is possible.

At approximately Weeks 8, 12, 14, 18 and 22:

1. Review current relevant UK vacancies.
2. Extract repeatedly requested skills.
3. Compare them against demonstrated capability.
4. Identify genuine gaps.
5. Adjust upcoming teaching where appropriate.
6. Apply for suitable roles when reasonably credible.

Potential early target roles include:

- Business Systems Analyst
- Technical Implementation Consultant
- Implementation Specialist
- Junior Technical Consultant
- Automation / Power Platform roles
- Technical Business Analyst with systems/integration responsibilities

---

# Real Work Checkpoints

From approximately Week 8 onward, actively look for a small external problem that can be solved at the learner's current skill level.

Prefer problems involving:

- repetitive administration
- spreadsheets
- forms
- manual data transfer
- repeated emails
- status tracking
- workflow
- reporting
- simple automation

Where work is initially free, seek:

- a genuine problem
- genuine user feedback
- permission for an anonymised case study
- a testimonial where appropriate

The aim is to progress from learning exercises to evidence of solving real problems.

---

# Anti-Abandonment Rules

## No catching up

If study stops for several weeks, there is no backlog of hours to repay.

Resume from the current position.

## No automatic restarting

After a long gap, use a short retrieval exercise to identify what has been forgotten.

Repair gaps and continue.

Do not automatically return to Week 1.

## One primary project

RoomReady remains the main learning project.

New ideas may be recorded for later rather than repeatedly replacing the main project.

## Evidence over attendance

A lesson is not complete simply because material was presented.

The learner should demonstrate important concepts through explanation, implementation, debugging or independent work.

## Every session should leave evidence where practical

Examples:

- commit
- code
- test
- requirement
- diagram
- documentation
- demonstrated understanding recorded in the learning log

---

# Portfolio and Public Presence

GitHub is the technical evidence base, not necessarily the main discovery channel.

LinkedIn and other public profiles should be updated progressively as genuine skills and evidence develop.

Do not claim professional identities or technical capabilities before they can be demonstrated.

Prefer sharing evidence of actual problem solving over generic statements about learning to code.

---

# Programme Success

Success is not defined solely as completing Week 24.

Success includes:

- demonstrable technical capability
- useful portfolio evidence
- solving real problems
- obtaining interviews
- obtaining paid project work
- obtaining a technical role
- discovering which technical specialisation best fits the learner

The programme should continue adapting to evidence from learning, real work and the employment market.

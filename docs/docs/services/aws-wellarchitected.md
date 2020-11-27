---
id: aws-wellarchitected
title: AWS Well-Architected
---

## Overview

The AWS Well-Architected Framework provides **architectural best practices** across the five pillars for designing and operating **reliable, secure, efficient, and cost-effective systems** in the cloud. The Framework provides **a set of questions** that allows you to review an existing or proposed architecture. It also provides a set of AWS **best practices** for each pillar. Using the Framework in your architecture will help you produce stable and efficient systems, which allow you to **focus on your functional requirements**.

For more information see:

- [Well-Architected Training course](https://www.aws.training/Details/Curriculum?id=42037)
- [Well-Architected Framework whitepaper](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)
- [Serverless Application Lens whitepaper](https://d1.awsstatic.com/whitepapers/architecture/AWS-Serverless-Applications-Lens.pdf)

## The Five Pillars

### Operational Excellence

- The operational excellence pillar focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures. Key topics include managing and automating changes, responding to events, and defining standards to successfully manage daily operations.
- Logging
- Monitoring
- Deployment
- Load testing

### Security

- The security pillar focuses on protecting information & systems. Key topics include confidentiality and integrity of data, identifying and managing who can do what with privilege management, protecting systems, and establishing controls to detect security events.
- PoLP (1:1 Lambda to IAM)
- API authorization
- VPC security

### Reliability

- The reliability pillar focuses on the ability to prevent, and quickly recover from failures to meet business and customer demand. Key topics include foundational elements around setup, cross project requirements, recovery planning, and how we handle change.
- High availability
- Fault tolerance
- Recovery

### Performance Efficiency

- The performance efficiency pillar focuses on using IT and computing resources efficiently. Key topics include selecting the right resource types and sizes based on workload requirements, monitoring performance, and making informed decisions to maintain efficiency as business needs evolve.
- Memory
- Runtime (Node.js has faster start-up time than C#)
- Tracing (X-Ray)

### Cost Optimisation

- Cost Optimization focuses on avoiding un-needed costs. Key topics include understanding and controlling where money is being spent, selecting the most appropriate and right number of resource types, analyzing spend over time, and scaling to meet business needs without overspending.
- Resource allocation
- Asynchronicity (long-running, synchronous functions are more expensive)
- Event sources

## The Review Process

- The review of architectures needs to be done in a consistent manner, with a **blame-free** approach that encourages **diving deep**. It should be a **light-weight process** (hours not days) that is a **conversation and not an audit**. The purpose of reviewing an architecture is to identify any critical issues that might need addressing or areas that could be improved. The outcome of the review is a set of actions that should improve the **experience of a customer** using the workload.
- We recommend that the team members who build an architecture use the Well-Architected Framework to continually review their architecture, rather than holding a formal review meeting. A continuous approach allows your team members to update answers as the architecture evolves, and improve the architecture as you deliver features.
- If you want to use the review as a one-time snapshot or independent measurement you will want to ensure you have all the right people in the conversation. Often we find that reviews are the first time that a team truly understands what they have implemented.
- Conduct review at key milestones: early in design process and then before go-live

For more inforamtion see:

- [The Review Process](https://wa.aws.amazon.com/wat.thereviewprocess.wa-review.en.html)

## Game Days

A game day simulates a failure or event to test systems, processes, and team responses. The purpose is to actually perform the actions the team would perform as if an exceptional event happened. These should be conducted regularly so that your team builds "muscle memory" on how to respond.

For more inforamtion see:

- [Game Days](https://wa.aws.amazon.com/wat.thereviewprocess.wa-review.en.html)

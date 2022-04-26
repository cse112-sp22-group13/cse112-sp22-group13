# Manually Test over Implementing Unit Testing

* Status: accepted
* Deciders: Alanna, Sanat, and Scott
* Date: 2021-12-03

## Context and Problem Statement

With a looming deadline, do we scrap implementing unit testing or end to end testing and settle for manual testing?

## Decision Drivers

* Time Constraints
* Our Limited Technical Knowledge
* The Looming Shadow of Past Mistakes

## Considered Options

* Manual Testing
* Unit Testing

## Decision Outcome

Chosen option: Manual Testing, because we don't have enough free minds to figure out how to get
unit testing done. 

### Positive Consequences

* No technical hurdle to implement
* Easier for more people to contribute

### Negative Consequences

* Substandard testing

## Pros and Cons of the Options

### Manual Testing

Meat puppet labor.

* Good, because brute force works (kind of)
* Good, because we don't risk ending up with nothing
* Bad, because we are guaranteed to miss something
* Bad, because it wastes a lot of effort over time

### Unit Testing

Putting in automated tests for individual functions/modules <!-- optional -->

* Good, automation saves time in the long run
* Good, because it is more reliable
* Bad, it is a technical hurdle to develop and implement
# Visualisation of Crime by State and Sex (Australia)

## Installation & Run

#### Requirements
* Node 18
* Yarn

#### Installation
```
yarn
```

#### Start
Open index.html

## Data Pre-processing 

The data used in my visualisation was pre-processed from Australian Bureau of Statistics1.

The data was collected, organised and finally formatted into this form:
https://github.com/thespacecadette/visualisation_crime_by_state_Australia/blob/main/data/data.js 

The nature of the data is that of principal offences that occurred in Australia, categorised by State and Sex (males, females) from 2022-2023.  “Principal offence” means that the assault offence was the most serious offence for which the offender was convicted. The most serious offence is defined as the one which was given the highest penalty. Thus, for example, a case where the offender was convicted of a murder and an assault would not be included here if, as is probable, the assault offence attracted a lower penalty than the murder. 

## Implementation

Since I wanted to use a hierarchical sunburst visualisation, I had to organise the data into a linked list data structure with 3 dimensions: State/Territory > PO offence > Sex (male, female). This is a perfect structure for a hierarchical graph. The library used was d3JS in a NodeJS project.  

### Method
#### Advantages
Because all this data was drawn from a single population, we could compare the data sets relatively (by proportion). The sunburst visualisation was able to show visually the proportion of crimes by state (across Australia), with additional drill down information on male's vs female proportions within each offence, within each state. 

Because most of the data flows in the same direction, and the intersections are minimised, I used a hierarchical graph.  

#### Disadvantages 
The disadvantage of this graph is that you cannot see more than 1 depth of data dimension, limiting visibility of depth 3 data (sex of crimes committed across different states, only within 1 state). This would not be a good visualisation for comparing sex of PO’s across all states/territories.

If you wanted to give a user a better idea of crimes committed by sex, you could add a third depth, but then the visualisation would be cluttered (even with the males/female categories being the same colour) (see below) because the amount of data/information on the screen. In other words, this visualisation does not scale well.

Another disadvantage is that small proportions can sometimes not be visible, unless a parent category is clicked.

This graph could also be improved by adding a label to the centre node when a child category is clicked. For example, below, when a user clicks on NSW, it would help to have a label in the centre showing “NSW”.

## Analysis

### Observations

At first glance (looking at the colours – pre-attentive cognition), the biggest proportion of offences are **Acts intended to cause injury** (especially in NSW), second is **Illicit drugs** (in nearly all the states). We can also see that the biggest proportion of offences are committed in NSW, but we do not know what the comparison of this data is to the true population, hence we cannot determine of these proportions are because the population size or not. There could be confounding factors at play.  

When you drill down into each state, you will see that in all Acts intended to cause injury, most of these crimes were committed by males.

Upon observing each state, one could conclude that males commit most offences overall (regardless of the number of offences committed).

The one arc that disappeared in this graph was Homicide, hence this could be considered an outlier.  

## Visual Design Principles

### Readable labels
Labels for drilling down into second levels could be clearly shown in the middle of the graph, to give the user some context about which state or offence they are looking at.  

### Colour
Because colour is part of pre-attentive cognition, it made sense to make the offences the same colour (to show comparison by each state).  

### Enclosure Approach (Sunbursts)

Sunburst visualisations are good for showing node attributes, are efficient for screen real estate but do not show immediately the relationships between all the nodes.  Sunbursts use the Enclosure Approach to partition the hierarchy in a circular manner, much like a pie chart (which is the best method for comparing data sets of the same population). 

## References

1. Australian Bureau of Statistics: https://www.abs.gov.au/statistics/people/crime-and-justice
2. https://www.lawinsider.com/dictionary/principaloffence#:~:text=Principal%20offence%20here%20means%20that,was%20given %20the%20highest%20penalty.
3. https://www.abs.gov.au/statistics/people/crime-and-justice 

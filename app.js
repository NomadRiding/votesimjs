let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independentCandidates = [];
// let faker = require('faker');
// let randomName = faker.name.findName();
let ideologies = ["Conservative", "Liberal", "Neutral"];
class Person {
    constructor(name){
        this.name = name;
    }
}

class Voter extends Person {
    constructor(name, ideology){
        super(name);
        this.ideology = ideology;
    }
}

class Candidate extends Person{
    constructor(name, party, votes){
        super(name);
        this.party = party;
        this.votes = 0;
    }
    candidateSort() {
        if(this.party === "Democrat"){
            democratCandidates.push(this);
        }
        else if(this.party === "Independent") {
            independentCandidates.push(this);
        }else{
            republicanCandidates.push(this);
        }
    }
}



$('#candidate-form form').on('submit', (event) => {
    event.preventDefault();
    let candidateName = $('#candidate-name').val()
    let candidateParty = $('#candidate-party').val()
    let newCandidateMember = new Candidate(candidateName, candidateParty);
    $('#candidate-list ul').append([`<li class="list-group-item"> ${newCandidateMember.name} is a ${newCandidateMember.party}</li>`]);
    console.log(newCandidateMember);
    newCandidateMember.candidateSort();
});

$('#voter-form form').on('submit', (event) => {
    event.preventDefault();
     let voterName = $('#voter-name').val()
     let voterIdeology = $('#voter-ideology').val()
     let newVoteMember = new Voter(voterName, voterIdeology);
     $('#voter-list ul').append([`<li class="list-group-item"> ${newVoteMember.name} is a ${newVoteMember.ideology}</li>`]);
    voters.push(newVoteMember);
     console.log(newVoteMember);
});


function voteCalc(num1, num2,){
    let randomNum = Math.random();
    if(randomNum <= num1){
        democratCandidates[array(democratCandidates.length-1)].votes++;
    } else if (randomNum <= num2) {
        republicanCandidates[array(republicanCandidates.length -1)].votes++;
    }else {
        independentCandidates[array(independentCandidates.length -1)].votes++;
    }
}

function array(number){
    return Math.floor(Math.random() * number);
}

function vote() {
    voters.forEach(candidates => {
        let vote = candidates.ideology;
        if (vote == `Conservative`) {
            voteCalc(0.4, 0.8, 0.8);
        } else if (vote == `Liberal`) {
            voteCalc(0.8, 0.4, 0.8);
        } else if (vote == `Neutral`) {
            voteCalc(0.75, 0.75, 0.5);
        }
    })
    alert(`The Winner is ${theWinner()}!!`);
}

function theWinner() {
    let totCandidates = [...republicanCandidates, ...independentCandidates, ...democratCandidates]
    let max = totCandidates[0]
    totCandidates.forEach((value) => {
        max.votes > value.votes ? null : max = value
    })
    return max.name
}


$(`#vote-btn-div button`).on('click', (event) => {
    event.preventDefault();
    vote()
})



/*
3a.  If the Voter 's ideology property is equal to liberal,
the voter has a 60 percent chance of voting democratic, 20 percent chance
of voting independent, and 20 percent chance of voting republican.
*/

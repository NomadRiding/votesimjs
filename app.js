let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independedCandidates = [];
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
        votes = 0;
    }
    candidateSort() {
        if(this.party === "Democrat"){
            democratCandidates.push(this);
        }
        else if(this.party === "Independent") {
            independedCandidates.push(this);
        }else{
            republicanCandidates.push(this);
        }
    }
}


$(document).ready(function(){

})
$('#candidate-form form').on('submit', (event) => {
    event.preventDefault();
    let candidateName = $('#candidate-name').val()
    let candidateParty = $('#candidate-party').val()
    let newCandidateMember = new Candidate(candidateName, candidateParty);
    $('#candidate-list ul').append([`<li class="list-group-item"> ${newCandidateMember.name} is a ${newCandidateMember.party}</li>`]);
    console.log(newCandidateMember);
});

$('#voter-form form').on('submit', (event) => {
    event.preventDefault();
     let voterName = $('#voter-name').val()
     let voterIdeology = $('#voter-ideology').val()
     let newVoteMember = new Voter(voterName, voterIdeology);
     $('#voter-list ul').append([`<li class="list-group-item"> ${newVoteMember.name} is a ${newVoteMember.ideology}</li>`]);
    console.log(newVoteMember);
});    

// $('.randomize-btn').on('click', (event) => {
//     event.preventDefault();
//     let randideology = ideologies[Math.floor(Math.random() * ideologies.length)];
//     console.log(randideology)
//     let randList = new Voter(($(randomName).val(), $('#voterIdeology').val()));
//     $('#voter-list ul').append([`<li class="list-group-item"> ${newVoter.name} is a ${newVoter.ideology}</li>`]);
//     console.log(randideology);
// })

// let fakeName = faker.name.findName();
// console.log(fakeName);



function vote (){

}

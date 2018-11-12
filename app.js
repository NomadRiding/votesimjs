let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independedCandidates = [];

class Person {
    constructor(name){
        this.name = name;
    }
}

class Voter extends Person {
    constructor(name, ideologoy){
        super(name);
        this.ideologoy = ideologoy;
    }
}

class Candidate extends Person{
    constructor(name, party){
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



$('#canidate-form form').on('submit' (event => {
    event.preventDefault();
    let newCandidateMember = new Candidate($("#candiddateName").val(),$('#candidateParty').val());
    $('#candidate-list ul').append([`<li class="list-group-item"> ${newCandidateMember.name} is a ${newCandidateMember.party}</li>`]);
    console.log(newCandidateMember);
}));

$('#voter-form form').on('submit' (event => {
    event.preventDefault();
    let newVoter = new Voter($("#voterName").val(), $('#voterIdeology').val());
    $('#voter-list ul').append([`<li class="list-group-item"> ${newVoter.name} is a ${newVoter.ideology}</li>`]);
    console.log(newVoter);
}));    

$('.randomize-btn').on('click' (event => {
    event.preventDefault();
}))

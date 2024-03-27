console.log('at her majesty services')

const teams = [
    {
    name: 'James Bond',
    job: '007',
    email: 'mi6@secretservices.uk',
    },

    {
        name: 'M',
        job: 'Headmaster',
        email: 'mi6@secretservices.uk',
    } ,

    {
        name: 'Felix Leiter',
        job: 'CIA',
        email: 'CIA@secretservices.us',
    },
]


console.log(teams)

// per ogni membro del team si recupera:

for(let i=0; i<teams.length; i++){
    let currentTeamMember = teams[i]
    AppendTableHTML(currentTeamMember);

}

const form = document.getElementById('form-add-members');
console.log(form);
form.addEventListener('submit', AddMember);


//Funzione che
// - accetta un parametro di tipo evento (click, cursore)
// - disabilita la propagazione del submit
// - pushare nuovo membro nell'array 


function AddMember(e){
    console.log(e)
    e.preventDefault();

    const name = document.getElementById('name').value;
    const job = document.getElementById('role').value;
    const email = document.getElementById('email').value;

    const NewMember  = {
        name: name,
        job: job,
        email: email,
    };

    console.log(NewMember);
    teams.push(NewMember);

    console.log(teams);
    AppendTableHTML(NewMember);


const tBodyElement = document.getElementById('table-body')
const trHTMLString = `
<tr>
<td>${name} </td>
<td>${job} </td>
<td>${email} </td>
</tr> `


tBodyElement.innerHTML += trHTMLString
}

function AppendTableHTML(member){
    const tBodyElement = document.getElementById('table-body')

	const trHTMLString = `
	<tr>
	  <td>${member.name}</td>
	  <td>${member.job}</td>
	  <td>${member.email}</td>
	</tr>
	`
	tBodyElement.innerHTML += trHTMLString
}